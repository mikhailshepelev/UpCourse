package ee.upcourse.trainingmanager.repository;

import ee.upcourse.trainingmanager.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long> {
}
