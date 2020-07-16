package ee.upcourse.trainingmanager.model;

import javafx.scene.input.TouchPoint;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Data
@NoArgsConstructor
@Entity
@Table(name = "course")
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String name;

    @OneToMany(mappedBy = "course",
            cascade = CascadeType.ALL)
    private List<Topic> topics;


}
