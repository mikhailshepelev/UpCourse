package ee.upcourse.trainingmanager.service;

import ee.upcourse.trainingmanager.model.Role;
import ee.upcourse.trainingmanager.model.User;
import ee.upcourse.trainingmanager.repository.RoleRepository;
import ee.upcourse.trainingmanager.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public void saveRegisteredUser(User user) {
        String encodedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encodedPassword);
        try {
            Role role = roleRepository.findByName("ROLE_STUDENT");
            user.setRole(role);
        } catch (Exception e){
            e.printStackTrace();
        }
        userRepository.save(user);
    }

    @Override
    public void editUserProperties(User user) {
        User oldVersionOfUser = userRepository.findByUsername(user.getUsername());

        String encodedPassword = passwordEncoder.encode(user.getPassword());

        oldVersionOfUser.setPassword(encodedPassword);
        oldVersionOfUser.setEmail(user.getEmail());
        oldVersionOfUser.setFirstName(user.getFirstName());
        oldVersionOfUser.setLastName(user.getLastName());

        userRepository.save(oldVersionOfUser);
    }

    @Override
    public User getByUsername(String username) {
        return userRepository.findByUsername(username);
    }
}
