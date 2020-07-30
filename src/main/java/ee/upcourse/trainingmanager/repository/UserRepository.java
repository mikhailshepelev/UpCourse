package ee.upcourse.trainingmanager.repository;

import ee.upcourse.trainingmanager.model.Course;
import ee.upcourse.trainingmanager.model.Lesson;
import ee.upcourse.trainingmanager.model.Role;
import ee.upcourse.trainingmanager.model.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

@CrossOrigin("http://localhost:4200")
public interface UserRepository extends JpaRepository<User, Long> {

    User findByUsername(String username);

    Page<User> findByCoursesIsNotContainingAndRolesContains(Course course, Role role, Pageable pageable);



}
