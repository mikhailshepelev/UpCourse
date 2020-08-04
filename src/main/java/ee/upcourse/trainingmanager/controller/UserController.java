package ee.upcourse.trainingmanager.controller;

import ee.upcourse.trainingmanager.model.User;
import ee.upcourse.trainingmanager.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @CrossOrigin("http://localhost:4200")
    @PostMapping("/registration")
    public void registration(@RequestBody User user){
        userService.saveRegisteredUser(user);
    }
}
