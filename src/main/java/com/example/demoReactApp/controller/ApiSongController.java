package com.example.demoReactApp.controller;

import com.example.demoReactApp.dao.IColorRepository;
import com.example.demoReactApp.dao.ISongRepository;
import com.example.demoReactApp.employee.Color;
import com.example.demoReactApp.employee.Song;
import com.example.demoReactApp.services.ISongServices;
import com.example.demoReactApp.uril.CustomErrorType;
import com.sun.xml.internal.bind.v2.TODO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityNotFoundException;
import java.util.List;


/**
 * Created by user on 3/21/18.
 */
@RestController
@RequestMapping("/api/v1")
public class ApiSongController {

    public static final Logger logger = LoggerFactory.getLogger(ApiSongController.class);


    @Autowired
    IColorRepository colorRepository;

    @Autowired
    ISongRepository songRepository;

    @Autowired
    ISongServices songService;

    //-----------------------------All Songs List
    @GetMapping("/songs")
    public ResponseEntity<List<Song>> getAllSong(){
        logger.info("getting all users");
        List<Song> songs = songRepository.findAll();
        if (songs == null || songs.isEmpty()){
            logger.info("no users found");
            return new ResponseEntity<List<Song>>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<Song>>(songs, HttpStatus.OK);
    }

    //---------------------------Get song by id
    @GetMapping("/song/{id}")
    public ResponseEntity<?> getSong(@PathVariable("id") long id){
        logger.info("getting song with id: {}", id);
        Song song = songService.findById(id);
        try {
            if(song.getIdColor() !=0) {
                logger.info("song with id is find: {}, {}", id, song);
                return new ResponseEntity<Song>(song, HttpStatus.OK);
            }else{
                logger.info("song with id {} not found", id);
                return new ResponseEntity<>(new CustomErrorType("Unable to song. Song with id " + id + " not found."),
                        HttpStatus.NOT_FOUND);
            }
        }catch (EntityNotFoundException e) {
            logger.info("song with id {} not found", id);
            return new ResponseEntity<>(new CustomErrorType("Unable to song. Song with id " + id + " not found."),
                    HttpStatus.NOT_FOUND);
        }
    }
    // -------------------Create a Song
    @PostMapping("/song")
    public ResponseEntity<?> createMessage(@RequestBody Song song) {
        Song s = song;
        if(s.getIdColor() == 0 || s.getName() == null || s.getDuration() == null ||
                s.getPhotoUrl() == null || s.getDescription() == null || s.getSongUrl() == null)
        {
            return new ResponseEntity(new CustomErrorType("Some fields is empty: try again."),
                    HttpStatus.BAD_REQUEST);
        }else{
            logger.info("Creating Song : {}", song);
            songService.saveSong(song);
            return new ResponseEntity<Song>(song, HttpStatus.OK);
        }
    }
    // --------------------Edit Existing Song
    @PutMapping(value = "/song/{id}")
    public ResponseEntity<?> updateSong(@PathVariable long id, @RequestBody Song song) {

        Song s = song;
        if(s.getIdColor() == 0 || s.getName() == null || s.getDuration() == null ||
                s.getPhotoUrl() == null || s.getDescription() == null || s.getSongUrl() == null)
        {
            return new ResponseEntity(new CustomErrorType("Some fields is empty: try again."),
                    HttpStatus.BAD_REQUEST);
        }else {
            logger.info("get updating song: {}", song);
            Song currentSong = songService.findById(id);
            try {
                logger.info("Edit Song : {}", song);
                currentSong.setIdColor(song.getIdColor());
                currentSong.setName(song.getName());
                currentSong.setDuration(song.getDuration());
                currentSong.setDescription(song.getDescription());
                currentSong.setPhotoUrl(song.getPhotoUrl());
                currentSong.setSongUrl(song.getSongUrl());

                songService.updateSong(currentSong);//или song
                return new ResponseEntity<Song>(currentSong, HttpStatus.OK);

            } catch (EntityNotFoundException e) {
                logger.info("song with id {} not found", id);
                return new ResponseEntity<>(new CustomErrorType("Unable to song. Song with id " + id + " not found."),
                        HttpStatus.NOT_FOUND);
            }
        }

    }
    // ------------------- Delete a Song
    @DeleteMapping("/song/{id}")
    public ResponseEntity<?> deleteSong(@PathVariable("id") long id) {
        logger.info("Fetching & Deleting Song with id {}", id);
        songService.findById(id);
        try {
            songService.deleteSongById(id);
            return new ResponseEntity<Song>(HttpStatus.NO_CONTENT);
        }catch (EmptyResultDataAccessException e) {
            logger.error("Unable to delete. Song with id {} not found.", id);
            return new ResponseEntity(new CustomErrorType("Unable to delete. Song with id " + id + " not found."),
                    HttpStatus.NOT_FOUND);
        }
    }

    // -------------------------- Get Song By Color
    @GetMapping("/{id}/songs")
    public ResponseEntity<?> getColorSongs(@PathVariable("id") long id){
        logger.info("getting all song with id: {}", id);
        List<Color> col = colorRepository.findByIdColor(id);

        if(col.size() != 0){
            return new ResponseEntity<List<Color>>(col, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(new CustomErrorType("Unable to color. color with id " + id + " not found."),
                    HttpStatus.NOT_FOUND);
        }

    }

}
