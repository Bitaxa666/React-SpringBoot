package com.example.demoReactApp.dao;

import com.example.demoReactApp.employee.Song;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by user on 3/21/18.
 */
@Repository
public interface ISongRepository extends JpaRepository<Song,Long> {

    Song findByName(String name);
}
