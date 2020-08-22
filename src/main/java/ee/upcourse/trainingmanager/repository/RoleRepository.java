package ee.upcourse.trainingmanager.repository;

import ee.upcourse.trainingmanager.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin("http://localhost:4200")
public interface RoleRepository extends JpaRepository<Role, Long> {

    List<Role> findAllByIdIsNotNull();
    Role findByName(String name);
}
