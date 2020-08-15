package ee.upcourse.trainingmanager.service;

import ee.upcourse.trainingmanager.exception.EmailNotFoundException;
import ee.upcourse.trainingmanager.model.User;

import javax.mail.MessagingException;
import java.util.List;

public interface UserService {
    void saveRegisteredUser(User user);
    void editUserProperties(User user);
    User getByUsername(String username);
    List<String> getAllUsernames();
    List<String> getAllEmails();
    void resetPassword(String email) throws MessagingException, javax.mail.MessagingException, EmailNotFoundException, EmailNotFoundException;
}
