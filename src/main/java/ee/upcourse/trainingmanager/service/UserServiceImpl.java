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

    @Transactional
    @Override
    public void saveRegisteredUser(User user) {
        String encodedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encodedPassword);
        try {
            Role role = roleRepository.findByName("STUDENT");
            user.setRole(role);
        } catch (Exception e){
            e.printStackTrace();
        }
        userRepository.save(user);
    }
}
