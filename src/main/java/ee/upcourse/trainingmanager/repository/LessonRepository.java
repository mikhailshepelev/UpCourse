package ee.upcourse.trainingmanager.repository;

import ee.upcourse.trainingmanager.model.Lesson;
import ee.upcourse.trainingmanager.model.Topic;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

@CrossOrigin("http://localhost:4200")
public interface LessonRepository extends JpaRepository<Lesson, Long> {
    Page<Lesson> findByTopicId(@RequestParam("id") Long id, Pageable pageable);

}
