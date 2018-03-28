package com.example.demoReactApp.controller;

import com.example.demoReactApp.dao.IColorRepository;
import com.example.demoReactApp.dao.ISongRepository;
import com.example.demoReactApp.employee.Color;
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

import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.Optional;

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
    //@ResponseStatus(HttpStatus.OK)
    public ResponseEntity<List<Song>> getAllSong(){
        logger.info("getting all users");
        List<Song> songs = songRepository.findAll();
        if (songs == null || songs.isEmpty()){
            logger.info("no users found");
            return new ResponseEntity<List<Song>>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<Song>>(songs, HttpStatus.OK);
        //return songRepository.findAll();
    }

    //---------------------------Get song by id
    @GetMapping("/song/{id}")
    public ResponseEntity<Song> getSong(@PathVariable("id") long id){
        logger.info("getting song with id: {}", id);
        Song song = songService.findById(id);
        //Song song = songRepository.findOne();
        if (song == null){
            logger.info("song with id {} not found", id);
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        logger.info("song with id is find: {}, {}", id, song);
        return new ResponseEntity<Song>(song, HttpStatus.OK);

    }
    // -------------------Create a Song
    @PostMapping("/song")
    @ResponseStatus(HttpStatus.OK)
    public Song createMessage(@RequestBody Song song) {
        logger.info("Creating Song : {}", song);
        songService.saveSong(song);
        return song;
    }
    // --------------------Edit Existing Song
    @PutMapping(value = "/song/{id}")
    public ResponseEntity<?> updateSong(@PathVariable long id, @RequestBody Song song){
        logger.info("updating user: {}", song);
        Song currentSong = songService.findById(id);

        if (currentSong == null){
            logger.info("User with id {} not found", id);
            return new ResponseEntity(new CustomErrorType("Song with id: " + id + " not found."),
                    HttpStatus.NOT_FOUND);
        }
        currentSong.setName(song.getName());
        currentSong.setDuration(song.getDuration());
        currentSong.setDescription(song.getDescription());
        currentSong.setPhotoUrl(song.getPhotoUrl());
        currentSong.setSongUrl(song.getSongUrl());

        songService.updateSong(currentSong);//или song
        return new ResponseEntity<Song>(currentSong, HttpStatus.OK);
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


    // -------------------------- Get Song By Color
    @GetMapping("/{id}/songs")
    public ResponseEntity<List<Color>> getColorSongs(@PathVariable("id") long id){
        logger.info("getting all song with id: {}", id);
        //Optional<Color> col1 = colorRepository.findById(id);
        List<Color> col = colorRepository.findByIdColor(id);

        /*Map<Color, Song> color = colorRepository.findById(id);
        //Song song = songRepository.findOne();
        if (color == null){
            logger.info("song with id {} not found", id);
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        logger.info("song with id is find: {}, {}", id, color);
        return new ResponseEntity<Song>(color, HttpStatus.OK);*/
        //logger.info("song with id is find: {}, {}", id, col1.getSongs());
        if(col !=null){
            return new ResponseEntity<List<Color>>(col, HttpStatus.OK);
        } else {
            return new ResponseEntity<List<Color>>(HttpStatus.NOT_FOUND);
        }

    }

}
