package ee.upcourse.trainingmanager.repository;

import ee.upcourse.trainingmanager.model.Course;
import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
public interface CourseRepository extends CrudRepository<Course, Long> {

}
