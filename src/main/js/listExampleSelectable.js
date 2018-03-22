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
/*
 getInitialState: function() {
 return {}
 }
componentDidMount() {
    const self = this;
    axios.get('http://localhost:8013/test/string/ss')
        .then(function (response) {
            console.log(response.data);
            console.log(response.headers);
            self.setState({list: response.data})
        })
        .catch(function (error) {
            console.log(error);
        });
}
*/

const iconButtonElement = (
    <IconButton
        touch={true}
        tooltip="more..."
        tooltipPosition="bottom-left"
    >
        <MoreVertIcon color={grey400} />
    </IconButton>
);
const rightIconMenu = (
    <IconMenu iconButtonElement={iconButtonElement}>
        <MenuItem>Test</MenuItem>
        <MenuItem>Update</MenuItem>
        <MenuItem>Delete</MenuItem>
    </IconMenu>
);

var SONGS = [
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
/*
var SongItem = React.createClass({
    render: function () {
        return(
            <ListItem
                leftAvatar={<Avatar src={this.props.avatar} />}
                rightIconButton={rightIconMenu}
                primaryText={this.props.topName}
                secondaryText={
                    <p>
                        <span style={{color: darkBlack}}>{this.props.name}</span>
                        {this.props.description}
                    </p>
                }
                secondaryTextLines={2}
            />
        );
    }
});
*/
const ListExampleMessages = () => (
    <div style={styleBackground}>
        <MobileTearSheet style={style}>
            <List>
                {/* <Subheader>All Songs List</Subheader>*/}
                <ListItem
                    leftAvatar={<Avatar src="https://cdn.pixabay.com/photo/2017/01/27/13/13/winnie-the-pooh-2013026_960_720.png" />}
                    rightIconButton={rightIconMenu}
                    primaryText="Test top article?"
                    secondaryText={
                        <p>
                            <span style={{color: darkBlack}}>Brendan Lim</span> --
                            I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
                        </p>
                    }
                    secondaryTextLines={2}
                />
                <Divider style={{backgroundColor: '#80FF00',}} />
                <ListItem
                    leftAvatar={<Avatar src="https://cdn.pixabay.com/photo/2017/01/27/13/13/winnie-the-pooh-2013026_960_720.png" />}
                    rightIconButton={rightIconMenu}
                    primaryText={
                        <p>Summer BBQ&nbsp;&nbsp;<span style={{color: lightBlack}}>4</span></p>
                    }
                    secondaryText={
                        <p>
                            <span style={{color: darkBlack}}>to me, Scott, Jennifer</span> --
                            Wish I could come, but I&apos;m out of town this weekend.
                        </p>
                    }
                    secondaryTextLines={2}
                />
                <Divider style={{backgroundColor: '#80FF00',}} />
                <ListItem
                    leftAvatar={<Avatar src="https://cdn.pixabay.com/photo/2017/01/27/13/13/winnie-the-pooh-2013026_960_720.png" />}
                    rightIconButton={rightIconMenu}
                    primaryText={
                        <p>Summer BBQ&nbsp;&nbsp;<span style={{color: lightBlack}}>4</span></p>
                    }
                    secondaryText={
                        <p>
                            <span style={{color: darkBlack}}>to me, Scott, Jennifer</span> --
                            Wish I could come, but I&apos;m out of town this weekend.
                        </p>
                    }
                    secondaryTextLines={2}
                />
                <Divider style={{backgroundColor: '#80FF00',}} />
                <ListItem
                    leftAvatar={<Avatar src="https://cdn.pixabay.com/photo/2017/01/27/13/13/winnie-the-pooh-2013026_960_720.png" />}
                    rightIconButton={rightIconMenu}
                    primaryText={
                        <p>Summer BBQ&nbsp;&nbsp;<span style={{color: lightBlack}}>4</span></p>
                    }
                    secondaryText={
                        <p>
                            <span style={{color: darkBlack}}>to me, Scott, Jennifer</span> --
                            Wish I could come, but I&apos;m out of town this weekend.
                        </p>
                    }
                    secondaryTextLines={2}
                />
               {/* {
                    SONGS.map(function (el) {
                        return <SongItem
                            key={el.id}
                            name={el.name}
                            topName={el.topName}
                            avatar={el.avatar}
                            description={el.description}
                        />;
                    })
                }*/}
            </List>
        </MobileTearSheet>
    </div>
);


export default ListExampleMessages;