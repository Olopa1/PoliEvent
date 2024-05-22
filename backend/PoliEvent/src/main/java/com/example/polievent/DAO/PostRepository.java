package com.example.polievent.DAO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PostRepository extends JpaRepository<Post, Long>
{
    @Query("SELECT u FROM Post u WHERE u.id = ?1")
    Optional<Post> findPostsByID(Long id);
    @Query("SELECT u FROM Post u WHERE u.title = ?1")
    Optional<Post> findPostsByTitle(String title);
}
