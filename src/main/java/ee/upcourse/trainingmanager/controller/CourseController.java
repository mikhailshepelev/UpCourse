package ee.upcourse.trainingmanager.controller;

import ee.upcourse.trainingmanager.model.Course;
import ee.upcourse.trainingmanager.model.User;
import ee.upcourse.trainingmanager.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CourseController {

    @Autowired
    private CourseRepository courseRepository;

    @GetMapping("/courses")
    public List<Course> getAllCourses(){
        return courseRepository.findAll();
    }
    @PostMapping("/courses")
    public void addCourse(@RequestBody Course theCourse){
        courseRepository.save(theCourse);
    }
    @DeleteMapping("/courses/{courseId}")
    public void deleteCourse(@PathVariable long courseId){
        Course theCourse = courseRepository.getOne(courseId);
//        removeUserCourseConstraint(courseId);
        courseRepository.delete(theCourse);
    }

}
