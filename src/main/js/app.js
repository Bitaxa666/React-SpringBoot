import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
//import getMuiTheme from 'material-ui/styles/getMuiTheme';
import ListExampleMessages from './listExampleSelectable';
import Home from './Home'
import MyAwesomeReactComponent from './MyAwesomeReactComponent';
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
    width: '80%' ,
    /*margin: '5% 10%',*/
    textAlign: 'center',
    display: 'inline-block',
};
const style1 = {
    height: '100%',
    width: '20%',
    textAlign: 'center',
    display: 'inline-block',
    position: 'absolute',
    right: 0,
};


const App = () => (
    <MuiThemeProvider>
        <div className="pageBackground">
            <Home />
            <div className="findBlock" style={style1}>
                <MyAwesomeReactComponent />
            </div>
            <Paper style={style} zDepth={4}>
                <ListExampleMessages />
            </Paper>
        </div>
    </MuiThemeProvider>
);

ReactDOM.render(
    <App />,
    document.getElementById('react1')
);