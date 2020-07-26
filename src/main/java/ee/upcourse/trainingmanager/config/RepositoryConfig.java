package ee.upcourse.trainingmanager.config;

import ee.upcourse.trainingmanager.model.Course;
import ee.upcourse.trainingmanager.model.Lesson;
import ee.upcourse.trainingmanager.model.Topic;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;

@Configuration
public class RepositoryConfig implements RepositoryRestConfigurer {

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        config.exposeIdsFor(Course.class,
                            Topic.class,
                            Lesson.class);
    }
}
