import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MobileTearSheet from '../../../MobileTearSheet';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';
import Employee from './component/employee/employee';

let SelectableList = makeSelectable(List);


function wrapState(ComposedComponent) {
    return class SelectableList extends Component {

        constructor(props) {
            super(props);
        }

        componentWillMount() {
            this.setState({
                selectedIndex: this.this.props.employee,
            });
        }

        handleRequestChange = (event, index) => {
            this.setState({
                selectedIndex: index,
            });
        };

        render() {
            var employees = this.props.employees.map(employee =>
                <Employee key={employee._links.self.href} employee={employee} onDelete={this.props.onDelete}/>
            );

            return (
                <ComposedComponent
                    value={this.state.selectedIndex}
                    onChange={this.handleRequestChange} /* это метод для смены дерева?*/
                >
                    {this.props.children} /*что такое пропс чилдрен???*/
                </ComposedComponent>
            );
        }
    };
}
SelectableList = wrapState(SelectableList);
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

export default ListExampleSelectable;