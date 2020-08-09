package ee.upcourse.trainingmanager.config.jwt;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class JwtTokenRequest implements Serializable {
    private String username;
    private String password;
}
