package ee.upcourse.trainingmanager.repository;

import ee.upcourse.trainingmanager.model.Topic;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

@CrossOrigin("http://localhost:4200")
public interface TopicRepository extends JpaRepository<Topic, Long> {
    Page<Topic> findByCourseId(@RequestParam("id") Long id, Pageable pageable);
}
