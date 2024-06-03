package com.example.polievent.DAO;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface SheduleRepository extends JpaRepository<Shedule,Long> {
    @Query("SELECT s FROM Shedule s")
    Optional<Shedule> listAllShedule();
    @Query("select s from Shedule s where s.userId = ?1")
    Optional<Shedule> listAllWithUserId(long userId);
    @Query("select s from Shedule s WHERE s.id = ?1")
    Optional<Shedule> findSheduleById(Long id);
}
