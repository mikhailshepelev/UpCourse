package ee.upcourse.trainingmanager.repository;

import ee.upcourse.trainingmanager.model.Userr;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<Userr, Long> {

    @Query("SELECT u FROM Userr u WHERE u.username = :username")
    public Userr getByUserName(@Param("username") String username);

    Userr findByUsername(String username);

}
