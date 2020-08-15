package ee.upcourse.trainingmanager.service;

import ee.upcourse.trainingmanager.exception.EmailNotFoundException;
import ee.upcourse.trainingmanager.model.Role;
import ee.upcourse.trainingmanager.model.User;
import ee.upcourse.trainingmanager.repository.RoleRepository;
import ee.upcourse.trainingmanager.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.apache.commons.lang3.RandomStringUtils;

import javax.mail.MessagingException;
import java.util.ArrayList;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private EmailService emailService;

    @Override
    public void saveRegisteredUser(User user) {

        User userWithSameUsername = userRepository.findByUsername(user.getUsername());
        User userWithSameEmail = userRepository.findByEmail(user.getEmail());
        if (userWithSameUsername != null || userWithSameEmail != null) {
            try {
                throw new Exception("User with same username or email already registered");
            } catch (Exception exception) {
                exception.printStackTrace();
            }
        }
        else {
            String encodedPassword = passwordEncoder.encode(user.getPassword());
            user.setPassword(encodedPassword);
            try {
                Role role = roleRepository.findByName("ROLE_STUDENT");
                user.setRole(role);
            } catch (Exception e) {
                e.printStackTrace();
            }
            userRepository.save(user);
        }
    }

    @Override
    public void editUserProperties(User user) {
        User oldVersionOfUser = userRepository.findByUsername(user.getUsername());

        User userWithSameEmail = userRepository.findByEmail(user.getEmail());
        if (userWithSameEmail != null) {
            try {
                throw new Exception("User with same email already registered");
            } catch (Exception exception) {
                exception.printStackTrace();
            }
        }

        if (user.getPassword() != null) {
            String encodedPassword = passwordEncoder.encode(user.getPassword());
            oldVersionOfUser.setPassword(encodedPassword);
        }

        oldVersionOfUser.setEmail(user.getEmail());
        oldVersionOfUser.setFirstName(user.getFirstName());
        oldVersionOfUser.setLastName(user.getLastName());

        userRepository.save(oldVersionOfUser);
    }

    @Override
    public User getByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    @Override
    public List<String> getAllUsernames() {
        List<User> allUsers = (List<User>) userRepository.findAll();
        List<String> listOfUsernames = new ArrayList<>();
        for(User s : allUsers){
            listOfUsernames.add(s.getUsername());
        }
        return listOfUsernames;
    }

    @Override
    public List<String> getAllEmails() {
        List<User> allUsers = (List<User>) userRepository.findAll();
        List<String> listOfEmails = new ArrayList<>();
        for(User s : allUsers){
            listOfEmails.add(s.getEmail());
        }
        return listOfEmails;
    }

    @Override
    public void resetPassword(String email) throws MessagingException, EmailNotFoundException {
        User user = userRepository.findByEmail(email);
        if (user == null) {
            throw new EmailNotFoundException("No user found for email: " + email);
        }
        String password = generatePassword();
        user.setPassword(passwordEncoder.encode(password));
        userRepository.save(user);
        emailService.sendNewPasswordEmail(user.getFirstName(), password, user.getEmail());
    }

    private String generatePassword() {
        return RandomStringUtils.randomAlphanumeric(10);
    }
}
