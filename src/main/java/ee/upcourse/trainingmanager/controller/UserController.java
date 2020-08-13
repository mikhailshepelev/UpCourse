package ee.upcourse.trainingmanager.controller;

import ee.upcourse.trainingmanager.model.User;
import ee.upcourse.trainingmanager.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:4200")
public class UserController {

    @Autowired
    private UserService userService;

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
}
