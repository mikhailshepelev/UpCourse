package ee.upcourse.trainingmanager.repository;

import ee.upcourse.trainingmanager.model.Topic;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TopicRepository extends JpaRepository<Topic, Long> {
}
