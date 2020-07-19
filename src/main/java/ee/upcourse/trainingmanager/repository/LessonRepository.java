package ee.upcourse.trainingmanager.repository;

import ee.upcourse.trainingmanager.model.Lesson;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
public interface LessonRepository extends JpaRepository<Lesson, Long> {

}
