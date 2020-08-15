package ee.upcourse.trainingmanager.basicauth;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class AuthenticationBean {

    private String message;

    public AuthenticationBean(String message) {
        this.message = message;
    }
}
