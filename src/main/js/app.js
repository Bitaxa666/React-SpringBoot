import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
//import getMuiTheme from 'material-ui/styles/getMuiTheme';
import ListExampleMessages from './listExampleSelectable';
import Home from './Home';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';
import axios from 'axios';
/**/
/*
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list:[]
        }
      /*  this.handleDelete = this.handleDelete.bind(this);
        this.onCreate = this.onCreate.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onNavigate = this.onNavigate.bind(this);
    }

    componentDidMount() {
        const self = this;
        axios.get('http://localhost:8013/test/string')
            .then(function (response) {
                console.log(response);
                self.setState({list: response.data})
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <CreateDialog attributes={this.state.attributes} onCreate={this.onCreate}/>
                <ListExampleMessages />
                <p>Hello world!Lets do it)</p>
            </div>
        )
    }
}
*/
const style = {
    height: '100%',
    width: '65%' ,
    margin: '5% 5%',
    textAlign: 'center',
    display: 'inline-block',
};
const stylefindBlock = {
    height: '40%',
    width: '25%',
    textAlign: 'center',
    display: 'inline-block',
    position: 'absolute',
    right: 0,
};




class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            songs: [
            ],
            displayedSongs: [],
            searchField: ''
        }
        this.handleSearch = this.handleSearch.bind(this);

    };

    componentDidMount() {
        const self = this;
        axios.get('http://localhost:8013/api/v1/songs')
            .then(function (response) {
                console.log(response.data);
                console.log(response.headers);
                self.setState({
                    songs: response.data,
                    displayedSongs: response.data})
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    handleSearch(e){

         var searchQuery=e.target.value.toLowerCase();
         var displayedSongs = this.state.songs.filter(function (el) {
         var searchValue = el.name.toLowerCase();
         return searchValue.indexOf(searchQuery) !== -1;  //добавить фильтры
         });

         this.setState({
            displayedSongs: displayedSongs,
            searchField: e.target.value
         });
    };

    render() {
        return(<MuiThemeProvider>
            <div className="pageBackground">
                <Home />
                <div className="findBlock" style={stylefindBlock}>
                    <MyAwesomeReactComponent searchField={this.state.searchField} handleSearch={this.handleSearch} />
                </div>
                <Paper className="listPapper" style={style} zDepth={4}>
                    <ListExampleMessages songs={this.state.displayedSongs} /> {/*displayedSongs*/}
                </Paper>
            </div>
        </MuiThemeProvider>)
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('react1')
);