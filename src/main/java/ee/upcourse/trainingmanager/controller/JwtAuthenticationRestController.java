package ee.upcourse.trainingmanager.controller;

import java.util.Objects;

import javax.servlet.http.HttpServletRequest;

import ee.upcourse.trainingmanager.config.jwt.*;
import ee.upcourse.trainingmanager.model.User;
import ee.upcourse.trainingmanager.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class JwtAuthenticationRestController {

    @Value("${jwt.http.request.header}")
    private String tokenHeader;

    private AuthenticationManager authenticationManager;
    private JwtTokenUtil jwtTokenUtil;
    private UserDetailsService jwtUserDetailsService;
    private UserService userService;

    @Autowired
    public JwtAuthenticationRestController(AuthenticationManager authenticationManager, JwtTokenUtil jwtTokenUtil, UserDetailsService jwtUserDetailsService, UserService userService) {
        this.authenticationManager = authenticationManager;
        this.jwtTokenUtil = jwtTokenUtil;
        this.jwtUserDetailsService = jwtUserDetailsService;
        this.userService = userService;
    }

    @RequestMapping(value = "${jwt.get.token.uri}", method = RequestMethod.POST)
    public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtTokenRequest authenticationRequest)
            throws JwtAuthenticationException {

        authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword());

        final UserDetails userDetails = jwtUserDetailsService
                .loadUserByUsername(authenticationRequest.getUsername());

        final String token = jwtTokenUtil.generateToken(userDetails);

        return ResponseEntity.ok(new JwtTokenResponse(token, userDetails.getUsername(), userDetails.getAuthorities()));
    }

    @GetMapping("${jwt.refresh.token.uri}")
    public ResponseEntity<?> refreshAndGetAuthenticationToken(HttpServletRequest request) {
        String authToken = request.getHeader(tokenHeader);
        final String token = authToken.substring(7);
        String username = jwtTokenUtil.getUsernameFromToken(token);

        if (jwtTokenUtil.canTokenBeRefreshed(token)) {
            String refreshedToken = jwtTokenUtil.refreshToken(token);
            return ResponseEntity.ok(new JwtTokenResponse(refreshedToken));
        } else {
            return ResponseEntity.badRequest().body(null);
        }
    }

    @ExceptionHandler({ JwtAuthenticationException.class })
    public ResponseEntity<String> handleAuthenticationException(JwtAuthenticationException e) {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
    }

    private void authenticate(String username, String password) {
        Objects.requireNonNull(username);
        Objects.requireNonNull(password);

        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        } catch (DisabledException e) {
            throw new JwtAuthenticationException("USER_DISABLED", e);
        } catch (BadCredentialsException e) {
            throw new JwtAuthenticationException("INVALID_CREDENTIALS", e);
        }
    }

    @GetMapping("/jwt/user")
    public ResponseEntity<?> getAuthenticatedUser(HttpServletRequest request) {
        String authToken = request.getHeader(tokenHeader);
        final String token = authToken.substring(7);
        String username = jwtTokenUtil.getUsernameFromToken(token);
        User user = userService.getByUsername(username);
        JwtUser jwtUser = JwtUserFactory.create(user);

        if (username == null) {
            return ResponseEntity.badRequest().body(null);
        }
        else {
            return ResponseEntity.ok(jwtUser);
        }
    }
}
