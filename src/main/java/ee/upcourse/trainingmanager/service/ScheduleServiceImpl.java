package ee.upcourse.trainingmanager.service;

import ee.upcourse.trainingmanager.model.*;
import ee.upcourse.trainingmanager.dto.ScheduleDTO;
import ee.upcourse.trainingmanager.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ScheduleServiceImpl implements ScheduleService{

    private UserRepository userRepository;

    @Autowired
    public ScheduleServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public List<ScheduleDTO> getSchedule(String username) {
        User user = userRepository.findByUsername(username);
        if (user == null) try {
            throw new Exception("User with this username does not exist");
        } catch (Exception exception) {
            exception.printStackTrace();
        }
        for (Role role : user.getRoles()) {
            if (role.getName().equals("ROLE_TEACHER")) {
                return getTeacherSchedule(user);
            }
        }
        return getStudentSchedule(user);
    }

    private List<ScheduleDTO> getStudentSchedule(User user) {
        List<ScheduleDTO> schedule = new ArrayList<>();
        List<Lesson> lessonList = new ArrayList<>();
        List<Topic> topicList = new ArrayList<>();
        List<Course> listOfCourses = user.getCourses();
        for (Course course : listOfCourses) {
            topicList.addAll(course.getTopics());
        }
        for (Topic topic : topicList) {
            lessonList.addAll(topic.getLessons());
        }
        for (Lesson lesson : lessonList){
            schedule.add(new ScheduleDTO(lesson.getId(), lesson.getSubject(), lesson.getStartTime(), lesson.getEndTime()));
        }
        return schedule;
    }

    private List<ScheduleDTO> getTeacherSchedule(User user) {
        List<ScheduleDTO> schedule = new ArrayList<>();
        List<Lesson> lessonList = new ArrayList<>();
        List<Topic> topicList = user.getTopics();
        for (Topic topic : topicList) {
            lessonList.addAll(topic.getLessons());
        }
        for (Lesson lesson : lessonList){
            schedule.add(new ScheduleDTO(lesson.getId(), lesson.getSubject(), lesson.getStartTime(), lesson.getEndTime()));
        }
        return schedule;
    }
}
