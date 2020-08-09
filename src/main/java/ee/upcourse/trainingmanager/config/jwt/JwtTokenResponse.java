package ee.upcourse.trainingmanager.config.jwt;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.security.core.GrantedAuthority;

import java.io.Serializable;
import java.util.Collection;

@Data
@AllArgsConstructor
public class JwtTokenResponse implements Serializable {

    private String token;
    private String username;
    private Collection<? extends GrantedAuthority> authorities;

    public JwtTokenResponse(String token) {
        this.token = token;
    }
}
