/**
 * Created by user on 3/20/18.
 */
import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Snackbar from 'material-ui/Snackbar';
import {lightGreenA700, green800} from 'material-ui/styles/colors';
import axios from 'axios';

const style = {
    marginTop: 20,
    marginBottom: 20,
};

const findButtonStyles = {

    floatingLabelStyle: {
        color: lightGreenA700,
    },
    floatingLabelFocusStyle: {
        color: green800,
    },
};

export default class MyAwesomeReactComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            openSuccessDialog: false,
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
        this.handleSearchButtonActivate = this.handleSearchButtonActivate.bind(this);
        this.handleAddSubmit = this.handleAddSubmit.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    };

    getInitialState() {
        return {
            searchField: '',
        /*    displayedSongs: SONGS,*/
        }
    };

    handleSearchButtonActivate(e) {
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
        this.setState({
            open: false,
            openSuccessDialog: false,

            name: '',
            idColor: 5,
            duration: '',
            photoUrl: '',
            description: '',
            songUrl: '',
        });
    };

    handleOnSubmit () {

        this.setState({
            openSuccessDialog: true,
        });
        const newSong ={
            name:this.state.name,
            idColor:this.state.idColor,
            duration:this.state.duration,
            photoUrl:this.state.photoUrl,
            description:this.state.description,
            songUrl:this.state.songUrl,
        };

        console.log(newSong);

        axios.post('http://localhost:8013/api/v1/song', newSong
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
            <Snackbar
                open={this.state.openSuccessDialog}
                message="Song is added to list"
                autoHideDuration={2000}
                onRequestClose={this.handleClose}
            />,
        ];

        return (
            <div>
                <div className="findFields">
                    <TextField
                        id="find-text-field"
                        hintText="Search query"
                        floatingLabelText="Search Text..."
                        floatingLabelStyle={findButtonStyles.floatingLabelStyle}
                        floatingLabelFocusStyle={findButtonStyles.floatingLabelFocusStyle}
                        name="searchField"
                        value={this.props.searchField}
                        onChange={this.props.handleSearch}
                    /><br />
                    <FlatButton
                        label="Search"
                        backgroundColor="#a4c639"
                        hoverColor="#8AA62F"
                        disabled={!this.props.searchField} />
                </div>

                <FloatingActionButton secondary={true} style={style} onClick={this.handleOpen}>
                    <ContentAdd />
                </FloatingActionButton>
                <Dialog
                    title="Create new song form"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                >
                    <TextField
                        hintText="e.g.: 6..."
                        name="color_id"
                        floatingLabelText="Color ID"
                        fullWidth={true}
                        value = {this.state.idColor}
                        type="number"
                        onChange = {this.handleAddSubmit.bind(this)}
                    /><br />
                    <TextField
                        hintText="Type song name..."
                        name="name"
                        floatingLabelText="Song name"
                        fullWidth={true}
                        value = {this.state.name}
                        onChange = {this.handleAddSubmit.bind(this)}
                        /*onChange = {this.onChange.bind(this)} как добавить валидацию?*/
                    /><br />
                    <TextField
                        hintText="Type song description..."
                        name="description"
                        floatingLabelText="Song description"
                        fullWidth={true}
                        value = {this.state.description}
                        onChange = {this.handleAddSubmit.bind(this)}
                        /*onChange = {this.onChange.bind(this)} как добавить валидацию?*/
                    /><br />
                    <TextField
                        hintText="Type song duration..."
                        name="duration"
                        floatingLabelText="Song duration"
                        fullWidth={true}
                        value = {this.state.duration}
                        onChange = {this.handleAddSubmit.bind(this)}
                        /*onChange = {this.onChange.bind(this)} как добавить валидацию?*/
                    /><br />
                    <TextField
                        hintText="Type song photoUrl..."
                        name="photoUrl"
                        floatingLabelText="Song photoUrl"
                        fullWidth={true}
                        value = {this.state.photoUrl}
                        onChange = {this.handleAddSubmit.bind(this)}
                        /*onChange = {this.onChange.bind(this)} как добавить валидацию?*/
                    /><br />
                    <TextField
                        hintText="Type song Url..."
                        name="songUrl"
                        floatingLabelText="Song Url"
                        fullWidth={true}
                        value = {this.state.songUrl}
                        onChange = {this.handleAddSubmit.bind(this)}
                        /*onChange = {this.onChange.bind(this)} как добавить валидацию?*/
                    />
                </Dialog>
            </div>
        );
    }
}