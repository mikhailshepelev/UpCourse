package ee.upcourse.trainingmanager.controller;

import com.sun.xml.internal.messaging.saaj.packaging.mime.MessagingException;
import ee.upcourse.trainingmanager.model.HttpResponse;
import ee.upcourse.trainingmanager.model.User;
import ee.upcourse.trainingmanager.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;

import static org.springframework.http.HttpStatus.OK;

@RestController
@CrossOrigin("http://localhost:4200")
public class UserController {

    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/registration")
    public void registration(@RequestBody User user){
        userService.saveRegisteredUser(user);
    }

    @PutMapping("/edit-user")
    public void editUserData(@RequestBody User user){
        userService.editUserProperties(user);
    }

    @GetMapping("/get-usernames")
    public List<String> getAllUsernames(){
        return userService.getAllUsernames();
    }

    @GetMapping("/get-emails")
    public List<String> getAllEmails(){
        return userService.getAllEmails();
    }

    @GetMapping("/resetpassword/{email}")
    public ResponseEntity<HttpResponse> resetPassword(@PathVariable("email") String email) throws EmailNotFoundException, MessagingException, javax.mail.MessagingException {
        userService.resetPassword(email);
        return response(OK, "An email with a new password was sent to: " + email);
    }

    private ResponseEntity<HttpResponse> response(HttpStatus httpStatus, String message) {
        return new ResponseEntity<>(new HttpResponse(httpStatus.value(), httpStatus, httpStatus.getReasonPhrase().toUpperCase(),
                message), httpStatus);
    }



}
