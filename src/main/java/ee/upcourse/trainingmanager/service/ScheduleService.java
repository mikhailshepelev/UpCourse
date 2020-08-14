package ee.upcourse.trainingmanager.service;

import ee.upcourse.trainingmanager.model.Lesson;

import java.util.List;

public interface ScheduleService {
    List<Lesson> getSchedule(String username);
}
