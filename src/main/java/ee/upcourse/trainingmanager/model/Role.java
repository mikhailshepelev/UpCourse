package ee.upcourse.trainingmanager.model;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "role")
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    public Role() {
    }

    //    @OneToOne(mappedBy = "role")
//    private User user;

    @ManyToMany(mappedBy = "roles")
    private Set<Userr> users;

    public Role(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}
