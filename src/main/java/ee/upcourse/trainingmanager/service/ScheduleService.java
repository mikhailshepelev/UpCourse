package ee.upcourse.trainingmanager.service;

import java.util.List;
import ee.upcourse.trainingmanager.dto.*;

public interface ScheduleService {
    List<ScheduleDTO> getSchedule(String username);
}
