package com.example.demoReactApp.employee;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;
import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

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
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Song {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_song")
    private Long idSong;

    // @ManyToOne
    //  @JoinColumn(name="id_color", referencedColumnName="id_color", nullable=false)
    //private Color color1;
    //bi-directional many-to-one association to User
   /* @ManyToOne(fetch=FetchType.LAZY)
   @NotFound(
    action = NotFoundAction.IGNORE)
    @JoinColumn(name="Users_id")
    private User user = new User();*/
    @Column(name = "id_color")
    private int idColor;

    private String name;
    private String duration;
    private String photoUrl;
    private String description;
    private String songUrl;
}
