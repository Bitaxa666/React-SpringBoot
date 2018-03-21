package com.example.demoReactApp.controller;

import com.example.demoReactApp.dao.ISongRepository;
import com.example.demoReactApp.employee.Song;
import com.example.demoReactApp.services.ISongServices;
import com.example.demoReactApp.uril.CustomErrorType;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;

/**
 * Created by user on 3/21/18.
 */
@RestController
@RequestMapping("/api/v1")
public class ApiSongController {

    public static final Logger logger = LoggerFactory.getLogger(ApiSongController.class);


    @Autowired
    ISongRepository songRepository;

    @Autowired
    ISongServices songService;

    //-----------------------------All Songs List
    @GetMapping("/songs")
    @ResponseStatus(HttpStatus.OK)
    public List<Song> getAllSong(){
        return songRepository.findAll();
    }
    // -------------------Create a Song
    @PostMapping("/song")
    @ResponseStatus(HttpStatus.OK)
    public Song createMessage(@RequestBody Song song, UriComponentsBuilder ucBuilder) {
        logger.info("Creating Song : {}", song);
        songService.saveSong(song);
        return song;
    }

    // ------------------- Delete a Song
    @DeleteMapping("/song/{id}")
    public ResponseEntity<?> deleteSong(@PathVariable("id") long id) {
        logger.info("Fetching & Deleting Song with id {}", id);

        Song songForDel = songService.findById(id);
        if (songForDel == null) {
            logger.error("Unable to delete. Song with id {} not found.", id);
            return new ResponseEntity(new CustomErrorType("Unable to delete. Song with id " + id + " not found."),
                    HttpStatus.NOT_FOUND);
        }
        songService.deleteSongById(id);
        return new ResponseEntity<Song>(HttpStatus.NO_CONTENT);
    }

}
