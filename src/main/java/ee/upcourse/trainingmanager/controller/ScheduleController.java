package ee.upcourse.trainingmanager.controller;

import ee.upcourse.trainingmanager.dto.ScheduleDTO;
import ee.upcourse.trainingmanager.service.ScheduleService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ScheduleController {

    private ScheduleService scheduleService;

    @Autowired
    public ScheduleController(ScheduleService scheduleService) {
        this.scheduleService = scheduleService;
    }

    @GetMapping("/schedule/{username}")
    public List<ScheduleDTO> getSchedule(@PathVariable String username){
        return scheduleService.getSchedule(username);
    }
}
