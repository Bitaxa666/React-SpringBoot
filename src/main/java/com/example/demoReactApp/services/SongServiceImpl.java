package com.example.demoReactApp.services;

import com.example.demoReactApp.dao.ISongRepository;

import com.example.demoReactApp.employee.Song;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Created by user on 3/21/18.
 */
@Service("songService")
@Transactional
public class SongServiceImpl implements ISongServices {

    @Autowired
    ISongRepository songRepository;


    @Override
    public Song findById(Long id) {
        return songRepository.getOne(id);
    }

    @Override
    public Song findByName(String name) {
        return songRepository.findByName(name);
    }

    @Override
    public void saveSong(Song song) {
        songRepository.save(song);
    }

    @Override
    public void updateSong(Song song) {
        saveSong(song);
    }

    @Override
    public void deleteSongById(Long id) {
        songRepository.deleteById(id);
    }
}
