import React, {Component} from 'react';
import EmployeeList from './listExampleSelectable';

class App extends Component {

    constructor(props) {
        super(props); /* Зачем нужен супер??-просто в джава это родитель*/
        this.state = {
            list:[]
        }
        this.handleDelete = this.handleDelete.bind(this);
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
                <EmployeeList />
            </div>
        )
    }
}



ReactDOM.render(
    <App />,
    document.getElementById('react')
)