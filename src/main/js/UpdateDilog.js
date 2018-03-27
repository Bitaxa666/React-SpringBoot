/**
 * Created by user on 3/20/18.
 */
import React from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';


export default class UpdateDilog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            dataSource: [],
            songName:'',
            newSongs: [],

            name: '',
            idColor: 5,
            duration: '',
            photoUrl: '',
            description: '',
            songUrl: '',
        }
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleAddSubmit = this.handleAddSubmit.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    };

    handleUpdate(e) {
        this.setState({searchField: e.target.value})
    };

    handleAddSubmit(e) {

        const state = this.state;
        state[e.target.name] = e.target.value;

        this.setState(state);
    };

    handleOpen () {
        this.setState({open: true});
    };

    handleClose ()  {
        this.setState({open: false});
    };

    handleOnSubmit () {

        const newSong ={
            name:this.state.name,
            idColor:this.state.idColor,
            duration:this.state.duration,
            photoUrl:this.state.photoUrl,
            description:this.state.description,
            songUrl:this.state.songUrl,
        };

        console.log(newSong);

        axios.put('http://localhost:8013/api/v1/song' + {id}, newSong
        )
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="Add"
                primary={true}
                keyboardFocused={true}
                onClick={this.handleOnSubmit}
            />,
        ];

        return (
            <div>
                <div className="updateFields">

                <Dialog
                    title="Update song"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    /*onRequestClose={this.handleClose}*/
                >
                    <TextField
                        defaultValue={this.props.idColor}
                        name="color_id"
                        floatingLabelText="Color ID"
                        fullWidth={true}
                        value = {this.state.idColor}
                        type="number"
                        onChange = {this.handleAddSubmit.bind(this)}
                    /><br />
                    <TextField
                        defaultValue={this.props.name}
                        name="name"
                        floatingLabelText="Song name"
                        fullWidth={true}
                        value = {this.state.name}
                        onChange = {this.handleAddSubmit.bind(this)}
                        /*onChange = {this.onChange.bind(this)} как добавить валидацию?*/
                    /><br />
                    <TextField
                        defaultValue={this.props.description}
                        name="description"
                        floatingLabelText="Song description"
                        fullWidth={true}
                        value = {this.state.description}
                        onChange = {this.handleAddSubmit.bind(this)}
                    /><br />
                    <TextField
                        defaultValue={this.props.duration}
                        name="duration"
                        floatingLabelText="Song duration"
                        fullWidth={true}
                        value = {this.state.duration}
                        onChange = {this.handleAddSubmit.bind(this)}
                    /><br />
                    <TextField
                        defaultValue={this.props.photoUrl}
                        name="photoUrl"
                        floatingLabelText="Song photoUrl"
                        fullWidth={true}
                        value = {this.state.photoUrl}
                        onChange = {this.handleAddSubmit.bind(this)}
                    /><br />
                    <TextField
                        defaultValue={this.props.songUrl}
                        name="songUrl"
                        floatingLabelText="Song Url"
                        fullWidth={true}
                        value = {this.state.songUrl}
                        onChange = {this.handleAddSubmit.bind(this)}
                    />
                </Dialog>
            </div>
        );
    };
}
