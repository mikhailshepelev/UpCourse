package ee.upcourse.trainingmanager.repository;

import ee.upcourse.trainingmanager.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepository extends JpaRepository<Course, Long> {
}
