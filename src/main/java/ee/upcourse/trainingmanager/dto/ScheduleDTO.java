package ee.upcourse.trainingmanager.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDateTime;

@AllArgsConstructor
@Data
public class ScheduleDTO {
    private Long id;
    private String subject;
    private LocalDateTime startTime;
    private LocalDateTime endTime;
}
