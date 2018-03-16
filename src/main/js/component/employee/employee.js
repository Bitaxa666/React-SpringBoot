import React, {Component} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import MobileTearSheet from './component/MobileTearSheet';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';// tag::employee[]

class Employee extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list:[]
        }
        this.handleDelete = this.handleDelete.bind(this);
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

    handleDelete() {
        this.props.onDelete(this.props.employee);
    }

    render() {
        console.log(this.state);
        return (
            <tr>
                <SelectableList defaultValue={1}>
                    {
                        this.state.list.map((first1, index) => {
                            return (
                                <ListItem
                                    value={index}
                                    primaryText={first1.name}
                                    leftAvatar={<Avatar src={first1.imageLinc} />}
                                    nestedItems={[
                                        <ListItem
                                            value={9999999}
                                            primaryText={first1.discription}
                                            leftAvatar={<Avatar src={first1.imageLinc} />}
                                        />,
                                    ]}
                                />
                            );
                        })
                    }

                </SelectableList>
                <td>{this.props.employee.firstName}</td> /*response.data.name*/
                <td>{this.props.employee.lastName}</td>
                <td>{this.props.employee.description}</td>
                <td>
                    <button onClick={this.handleDelete}>Delete</button>
                </td>
            </tr>
        )
    }
}
/* List item Up and List item Down - for top and low item??????*/

const ListExampleSelectable = () => (
    <MobileTearSheet>
        <SelectableList defaultValue={3}>
            <Subheader>Selectable Contacts</Subheader>
            <ListItem
                value={1}
                primaryText="Brendan Lim"
                leftAvatar={<Avatar src="images/ok-128.jpg" />}
                nestedItems={[
                    <ListItem
                        value={2}
                        primaryText="Grace Ng"
                        leftAvatar={<Avatar src="images/uxceo-128.jpg" />}
                    />,
                ]}
            />
            <ListItem
                value={3}
                primaryText="Kerem Suer"
                leftAvatar={<Avatar src="images/kerem-128.jpg" />}
            />
            <ListItem
                value={4}
                primaryText="Eric Hoffman"
                leftAvatar={<Avatar src="images/kolage-128.jpg" />}
            />
            <ListItem
                value={5}
                primaryText="Raquel Parrado"
                leftAvatar={<Avatar src="images/raquelromanp-128.jpg" />}
            />
        </SelectableList>
    </MobileTearSheet>
);

export default Employee;/*что бы далее использовать*/
