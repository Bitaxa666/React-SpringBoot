'use strict';
/*
const React = require('react');
const ReactDOM = require('react-dom');
/*const when = require('when');*/
const client = require('./client');
//const Accordion = ReactBootstrap.Accordion;
import { Button } from 'react-bootstrap';
/////////////////new data material
import Subheader from 'material-ui/Subheader';
import PropTypes from 'prop-types';
import MobileTearSheet from './component/MobileTearSheet';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import EmployeeList from './component/employee/employeeList';
import CreateDialog from './component/dialog/createDialog';




const follow = require('./follow'); // function to hop multiple links by "rel"

const root = '/api';

class App extends React.Component {

    constructor(props) {
        super(props); /* Зачем нужен супер??-просто в джава это родитель*/
        this.state = {employees: [], attributes: [], links: {}};
        this.onCreate = this.onCreate.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onNavigate = this.onNavigate.bind(this);
    }

    // tag::follow-2[]
    loadFromServer() {
        follow(client, root, [
            {rel: 'employees'}]
        ).then(employeeCollection => {
            return client({
                method: 'GET',
                path: employeeCollection.entity._links.profile.href,
                headers: {'Accept': 'application/schema+json'}
            }).then(schema => {
                this.schema = schema.entity;
                return employeeCollection;
            });
        }).done(employeeCollection => {
            this.setState({
                employees: employeeCollection.entity._embedded.employees,
                attributes: Object.keys(this.schema.properties),
                links: employeeCollection.entity._links});
        });
    }
    // end::follow-2[]

    // tag::create[]
    onCreate(newEmployee) {
        follow(client, root, ['employees']).then(employeeCollection => {
            return client({
                method: 'POST',
                path: employeeCollection.entity._links.self.href,
                entity: newEmployee,
                headers: {'Content-Type': 'application/json'}
            })
        }).then(response => {
            return follow(client, root, [
                {rel: 'employees'}]);
        }).done(response => {
            if (typeof response.entity._links.last != "undefined") {
                this.onNavigate(response.entity._links.last.href);
            } else {
                this.onNavigate(response.entity._links.self.href);
            }
        });
    }
    // end::create[]

    // tag::update[]
    /*onUpdate(employee, updatedEmployee) {
        client({
            method: 'PUT',
            path: employee.entity._links.self.href,
            entity: updatedEmployee,
            headers: {
                'Content-Type': 'application/json',
                'If-Match': employee.headers.Etag
            }
        }).done(response => {
            this.loadFromServer();
        }, response => {
            if (response.status.code === 412) {
                alert('DENIED: Unable to update ' +
                    employee.entity._links.self.href + '. Your copy is stale.');
            }
        });
    }*/
    // end::update[]

    // tag::delete[]
    onDelete(employee) {
        client({method: 'DELETE', path: employee._links.self.href}).done(response => {
            this.loadFromServer();
        });
    }
    // end::delete[]
    // tag::navigate[]
    onNavigate(navUri) {
        client({method: 'GET', path: navUri}).done(employeeCollection => {
            this.setState({
                employees: employeeCollection.entity._embedded.employees,
                attributes: this.state.attributes,
                links: employeeCollection.entity._links
            });
        });
    }

    // tag::navigate[]
    /*onNavigate(navUri) {
        client({
            method: 'GET',
            path: navUri
        }).then(employeeCollection => {
            this.links = employeeCollection.entity._links;

            return employeeCollection.entity._embedded.employees.map(employee =>
                client({
                    method: 'GET',
                    path: employee._links.self.href
                })
            );
        }).then(employeePromises => {
            return when.all(employeePromises);
        }).done(employees => {
            this.setState({
                employees: employees,
                attributes: Object.keys(this.schema.properties),
                links: this.links
            });
        });
    }*/
    // end::navigate[]

    // tag::follow-1[]
    componentDidMount() {
        this.loadFromServer();
    }
    // end::follow-1[]

    render() {
        return (
            <div>
                <CreateDialog attributes={this.state.attributes} onCreate={this.onCreate}/>
                <EmployeeList employees={this.state.employees}
                              links={this.state.links}
                              onNavigate={this.onNavigate}
                              onDelete={this.onDelete}/>
            </div>
        )
    }
}

// tag::create-dialog[]
class CreateDialog extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        var newEmployee = {};
        this.props.attributes.forEach(attribute => {
            newEmployee[attribute] = ReactDOM.findDOMNode(this.refs[attribute]).value.trim();
        });
        this.props.onCreate(newEmployee);

        // clear out the dialog's inputs
        this.props.attributes.forEach(attribute => {
            ReactDOM.findDOMNode(this.refs[attribute]).value = '';
        });

        // Navigate away from the dialog to hide it.
        window.location = "#";
    }

    render() {
        var inputs = this.props.attributes.map(attribute =>
            <p key={attribute}>
                <input type="text" placeholder={attribute} ref={attribute} className="field" /> /* Проблема с тем что одно поле инт*/
            </p>
        );

        return (
            <div>
                <a href="#createEmployee">Create</a>

                <div id="createEmployee" className="modalDialog">
                    <div>
                        <a href="#" title="Close" className="close">X</a>

                        <h2>Create new employee</h2>

                        <form>
                            {inputs}
                            <button onClick={this.handleSubmit}>Create</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

}
// end::create-dialog[]

// tag::update-dialog[]
/*class UpdateDialog extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        var updatedEmployee = {};
        this.props.attributes.forEach(attribute => {
            updatedEmployee[attribute] = ReactDOM.findDOMNode(this.refs[attribute]).value.trim();
        });
        this.props.onUpdate(this.props.employee, updatedEmployee);
        window.location = "#";
    }

    render() {
        var inputs = this.props.attributes.map(attribute =>
            <p key={this.props.employee.entity[attribute]}>
                <input type="text" placeholder={attribute}
                       defaultValue={this.props.employee.entity[attribute]}
                       ref={attribute} className="field" />
            </p>
        );

        var dialogId = "updateEmployee-" + this.props.employee.entity._links.self.href;

        return (
            <div key={this.props.employee.entity._links.self.href}>
                <a href={"#" + dialogId}>Update</a>
                <div id={dialogId} className="modalDialog">
                    <div>
                        <a href="#" title="Close" className="close">X</a>

                        <h2>Update an employee</h2>

                        <form>
                            {inputs}
                            <button onClick={this.handleSubmit}>Update</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

};*/
// end::update-dialog[]
/*
class EmployeeList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        var employees = this.props.employees.map(employee =>
            <Employee key={employee._links.self.href} employee={employee} onDelete={this.props.onDelete}/>
        );

        return (
            <div>
                <table>
                    <tbody>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Description</th>
                        <th>Delete</th>
                    </tr>
                    {employees}
                    </tbody>
                </table>
            </div>
        )
    }
    // end::employee-list-render[]
}
*/
/*
// tag::employee[]
class Employee extends React.Component {

    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        this.props.onDelete(this.props.employee);
    }

    render() {
        return (
                <tr>
                <td>{this.props.employee.firstName}</td>
                <td>{this.props.employee.lastName}</td>
                <td>{this.props.employee.description}</td>
                <td>
                    <button onClick={this.handleDelete}>Delete</button>
                </td>
            </tr>
        )
    }
}
// end::employee[]
*/

ReactDOM.render(
    <App />,
    document.getElementById('react')
)