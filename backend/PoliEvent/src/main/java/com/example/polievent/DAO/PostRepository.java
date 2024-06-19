package com.example.polievent.DAO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.query.Param;
import java.util.List;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.transaction.annotation.Transactional;
import java.util.Optional;

@Repository
public interface PostRepository extends JpaRepository<Post, Long>
{
    @Query("SELECT u FROM Post u WHERE u.id = ?1")
    Optional<Post> findPostsByID(Long id);
    @Query("SELECT u FROM Post u WHERE u.verified = :verified")
    List<Post> findPostsByVerified(@Param("verified") int verified);
    @Query("SELECT u FROM Post u WHERE u.title = ?1")
    Optional<Post> findPostsByTitle(String title);
    @Query("SELECT u FROM Post u WHERE u.eventId = ?1")
    List<Post> findByEventId(Long eventId);
    @Query("SELECT u FROM Post u where u.verified = :verified ORDER BY u.id")
    List<Post> findLastAdded(@Param("verified") int verified);
}
