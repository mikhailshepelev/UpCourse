package ee.upcourse.trainingmanager.controller;

import ee.upcourse.trainingmanager.model.User;
import ee.upcourse.trainingmanager.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @CrossOrigin("http://localhost:4200")
    @PostMapping("/registration")
    public void registration(@RequestBody User user){
        userService.saveRegisteredUser(user);
    }

    @CrossOrigin("http://localhost:4200")
    @PutMapping("/edit-user")
    public void editUserData(@RequestBody User user){
        userService.editUserProperties(user);
    }
}
