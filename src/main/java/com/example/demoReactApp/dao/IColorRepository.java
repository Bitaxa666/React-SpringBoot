package com.example.demoReactApp.dao;

import com.example.demoReactApp.employee.Color;
import com.example.demoReactApp.employee.Song;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by user on 3/27/18.
 */
@Repository
public interface IColorRepository extends JpaRepository<Color, Long> {

    List<Color> findByIdColor(@Param("id") Long Id);
}
