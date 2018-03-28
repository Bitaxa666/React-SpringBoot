package com.example.demoReactApp.employee;


import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import static java.util.Arrays.asList;

/**
 * Created by user on 3/27/18.
 */
@Data
@Getter
@Setter
@NoArgsConstructor
//@AllArgsConstructor
@ToString(exclude = "songs")
@Entity
@Table(name="color")
public class Color {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_color")
    private Long idColor;

    @Size(max = 100)
    @Column(name = "color_code")
    private String colorCode;

   // private List<Song> songs1;
/*
    @OneToMany(cascade = CascadeType.ALL,
            orphanRemoval = true,
            fetch = FetchType.LAZY,
            mappedBy = "color"
    )
    private Set<Song> songs = new HashSet<>();
    /*public List<Song> getSong(){
        return songs;
    }*/

    @OneToMany(
            cascade = CascadeType.ALL,
            orphanRemoval = true,
            mappedBy = "color"
    )
    private List<Song> songs = new ArrayList<>();
/*
    @OneToMany(
            cascade = CascadeType.ALL,
            orphanRemoval = true
            //mappedBy = "color"
    )
    public List<Song> getSongs(){
        return songs1;
    }
    public void setSongs(List<Song> songs1){
        this.songs1 = songs1;
    }*/
/*
    public Color(String colorCode, Song... songs) {
        this.colorCode = colorCode;
        this.songs.addAll(asList(songs));
    }
    */
  /*  public Color(String colorCode, List<Song> songs) {
        this.colorCode = colorCode;
        this.songs1 = songs;
    }*/
}
