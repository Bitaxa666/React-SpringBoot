package com.example.demoReactApp.employee;

import lombok.*;

import javax.persistence.*;

/**
 * Created by user on 3/21/18.
 */

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="song")
public class Song {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_song")
    private Long idSong;

    // @ManyToOne
    //  @JoinColumn(name="id_color", referencedColumnName="id_color", nullable=false)
    //private Color color1;
    @Column(name = "id_color")
    private int idColor;

    private String name;
    private String duration;
    private String photoUrl;
    private String description;
    private String songUrl;
}
