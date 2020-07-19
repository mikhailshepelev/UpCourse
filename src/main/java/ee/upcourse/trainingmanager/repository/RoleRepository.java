package ee.upcourse.trainingmanager.repository;

import ee.upcourse.trainingmanager.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RoleRepository extends JpaRepository<Role, Long> {

    List<Role> findAllByIdIsNotNull();
}
