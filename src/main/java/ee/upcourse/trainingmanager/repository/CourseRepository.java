package ee.upcourse.trainingmanager.repository;

import ee.upcourse.trainingmanager.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CourseRepository extends JpaRepository<Course, Long> {

    List<Course> findAll();

}
