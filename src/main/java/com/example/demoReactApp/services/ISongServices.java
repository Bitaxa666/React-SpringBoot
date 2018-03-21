package com.example.demoReactApp.services;

import com.example.demoReactApp.employee.Song;

/**
 * Created by user on 3/21/18.
 */
public interface ISongServices {

    Song findById(Long id);

    Song findByName(String name);

    void saveSong(Song song);

    void updateSong(Song song);

    void deleteSongById(Long id);
}
