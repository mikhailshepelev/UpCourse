package ee.upcourse.trainingmanager.controller;

import ee.upcourse.trainingmanager.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.security.Principal;

@CrossOrigin
@RestController
public class MainController {

    @Autowired
    private UserRepository userRepository;



    @GetMapping(value = "/")
    @ResponseBody
    public String currentUserNameSimple(HttpServletRequest request) {
        Principal principal = request.getUserPrincipal();
        return principal.toString();
    }
}