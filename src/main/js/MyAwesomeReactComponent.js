/**
 * Created by user on 3/20/18.
 */
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {lightGreenA700, green800} from 'material-ui/styles/colors';

/*как добавить к бабелю ()=> функцию*/

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

/*
const MyAwesomeReactComponent = () => (
    <div>
        <RaisedButton label="ADD SONG" fullWidth={true} style={style} secondary={true} />
    </div>
);

export default MyAwesomeReactComponent;
    */
export default class MyAwesomeReactComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            dataSource: [],
            songName:'',
        }
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSearchButtonActivate = this.handleSearchButtonActivate.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
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

    handleSearch(e){
    /*    var searchQuery=e.target.value.toLowerCase();
        var displayedSongs = SONGS.filter(function (el) {
            var searchValue = el.name.toLowerCase();
            return searchValue.indexOf(searchQuery) !== -1;  //добавить фильтры
        });

        this.setState({
            displayedSongs: displayedSongs
        });
        */
    };

    handleOpen () {
        this.setState({open: true});
    };

    handleClose ()  {
        this.setState({open: false});
    };

    addSong () {

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
                onClick={this.handleClose}
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
                        value={this.state.searchField}
                        onChange={this.handleSearchButtonActivate}
                        /*onChange={this.handleSearch}*/
                    /><br />
                    <FlatButton
                        label="Search"
                        backgroundColor="#a4c639"
                        hoverColor="#8AA62F"
                        disabled={!this.state.searchField} />
                </div>

                <FloatingActionButton secondary={true} style={style} onClick={this.handleOpen}>
                    <ContentAdd />
                </FloatingActionButton>
                <Dialog
                    title="Create new song form"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                    <TextField
                        hintText="e.g.: 6..."
                        /*dataSource={this.state.dataSource}
                         errorText="This field is required"*/
                        name="color_id"
                        floatingLabelText="Color ID"
                        fullWidth={true}
                        /*onChange = {this.onChange.bind(this)} как добавить валидацию?*/
                    /><br />
                    <TextField
                        hintText="Type song name..."
                        /*dataSource={this.state.dataSource}
                        errorText="This field is required"*/
                        name="name"
                        floatingLabelText="Song name"
                        fullWidth={true}
                        /*onChange = {this.onChange.bind(this)} как добавить валидацию?*/
                    /><br />
                    <TextField
                        hintText="Type song description..."
                        /*dataSource={this.state.dataSource}
                        errorText="This field is required"*/
                        name="description"
                        floatingLabelText="Song description"
                        fullWidth={true}
                        /*onChange = {this.onChange.bind(this)} как добавить валидацию?*/
                    /><br />
                    <TextField
                        hintText="Type song duration..."
                        /*dataSource={this.state.dataSource}
                        errorText="This field is required"*/
                        name="duration"
                        floatingLabelText="Song duration"
                        fullWidth={true}
                        /*onChange = {this.onChange.bind(this)} как добавить валидацию?*/
                    /><br />
                    <TextField
                        hintText="Type song photoUrl..."
                        /*dataSource={this.state.dataSource}
                         errorText="This field is required"*/
                        name="photoUrl"
                        floatingLabelText="Song photoUrl"
                        fullWidth={true}
                        /*onChange = {this.onChange.bind(this)} как добавить валидацию?*/
                    /><br />
                    <TextField
                        hintText="Type song Url..."
                        /*dataSource={this.state.dataSource}
                         errorText="This field is required"*/
                        name="songUrl"
                        floatingLabelText="Song Url"
                        fullWidth={true}
                        /*onChange = {this.onChange.bind(this)} как добавить валидацию?*/
                    />
                </Dialog>
            </div>
        );
    }
}