/**
 * Created by user on 3/15/18.
 */
/**
 * Created by user on 3/15/18.
 */
import React, {Component} from 'react';
import MobileTearSheet from './component/MobileTearSheet';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';

const style = {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 0,
    paddingTop: 20,
};

const styleBackground = {
    backgroundColor: '#BCF5A9',
};

let SelectableList = makeSelectable(List);

const SONGS = [
    {
        id: 1,
        topName: 'Test top article?',
        name: 'Brendan Lim',
        avatar: 'https://cdn.pixabay.com/photo/2017/01/27/13/13/winnie-the-pooh-2013026_960_720.png',
        description: '--I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?'

    }, {
        id: 2,
        topName: 'Summer BBQ&nbsp;&nbsp; 4',
        name: 'Tomas Lim',
        avatar: 'https://cdn.pixabay.com/photo/2017/01/27/13/13/winnie-the-pooh-2013026_960_720.png',
        description: '--Wish I could come, but I&apos;m out of town this weekend.'
    }, {
        id: 3,
        topName: 'Tomas Cat Test',
        name: 'Nik Dog',
        avatar: 'https://cdn.pixabay.com/photo/2017/01/27/13/13/winnie-the-pooh-2013026_960_720.png',
        description: '--I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?'
    }
];

const iconButtonElement = (
    <IconButton
        touch={true}
        tooltip="more..."
        tooltipPosition="bottom-left"
    >
        <MoreVertIcon color={grey400} />
    </IconButton>
);


function handleDeleteSong(id, index){
    console.log(id, "Delete")
    // var arr = this.state.songs;
    // arr.splice(index, 1);
    // this.setState({songs: arr});
    //
    // axios.delete('http://localhost:8013/api/v1/song/' + {id});
};


const rightIconMenu = (

    <IconMenu iconButtonElement={iconButtonElement}>
        <MenuItem
            disabled={true}
        >
            Test
        </MenuItem>
        <MenuItem>Update</MenuItem>
        <MenuItem
            /*onClick={handleDeleteSong(id)}*/
        >
            Delete
        </MenuItem>
    </IconMenu>
);

var SongItem = React.createClass({
    render: function () {
        return(
            <ListItem
                leftAvatar={<Avatar src={this.props.photoUrl} />}
                rightIconButton={rightIconMenu}
                primaryText={this.props.name}
                secondaryText={
                    <p>
                        <span style={{color: darkBlack}}>{this.props.duration}</span>
                        <br />
                        {this.props.description}
                        <br />
                    </p>

                }
                secondaryTextLines={2}
            />
        );
    }
});

export default class ListExampleMessages extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            dataSource: [],
            songName:'',
            newSongs: [],

        }
        // this.handleDeleteSong = this.handleDeleteSong.bind(this);
    };
    //
    // handleDeleteSong(index, id){
    //     var arr = this.state.songs;
    //     arr.splice(index, 1);
    //     this.setState({songs: arr});
    //
    //     axios.delete('http://localhost:8013/api/v1/song/' + {id});
    // };

    updateBlock(){

    };

    render () {
        return (
            <div style={styleBackground}>
                <MobileTearSheet style={style}>
                    <List>
                        {
                            this.props.songs.map((el, index) => {
                                return (
                                    <div key={el.idSong}>
                                        <SongItem
                                            id={el.idSong}
                                            name={el.name}
                                            description={el.description}
                                            duration={el.duration}
                                            photoUrl={el.photoUrl}
                                        />
                                        {
                                            this.props.songs.length - 1 > index &&

                                            <Divider style={{backgroundColor: '#80FF00',}}/>
                                        }
                                    </div>
                                );
                            })
                        }
                    </List>
                </MobileTearSheet>
            </div>
        )
    }

};
