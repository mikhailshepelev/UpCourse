package ee.upcourse.trainingmanager.repository;

import ee.upcourse.trainingmanager.model.*;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
public interface UserRepository extends CrudRepository<User, Long> {

    User findByUsername(String username);
    User findByEmail(String email);

    Page<User> findByCoursesIsNotContainingAndRolesContains(Course course, Role role, Pageable pageable);

    Page<User> findByTopicsIsNotContainingAndRolesContaining(Topic topic, Role role, Pageable pageable);


}
