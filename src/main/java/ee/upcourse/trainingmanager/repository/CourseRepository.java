package ee.upcourse.trainingmanager.repository;

import ee.upcourse.trainingmanager.model.Course;
import ee.upcourse.trainingmanager.model.Topic;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("http://localhost:4200")
public interface CourseRepository extends JpaRepository<Course, Long> {


}
