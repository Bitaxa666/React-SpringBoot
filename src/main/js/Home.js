/**
 * Created by user on 3/20/18.
 */
import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';


const style = {
    backgroundColor: '#80FF00',
};

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
        this.handleToggle = this.handleToggle.bind(this);
        this.handleToggleClose = this.handleToggleClose.bind(this);
    }

    handleToggle () {
        this.setState({open: !this.state.open});
    }
    handleToggleClose ()  {
        this.setState({open: false});
    };

    render() {
        return (
            <div className="appBar">
                <AppBar
                        style={style}
                        title="SONG LIST"
                        onLeftIconButtonClick={this.handleToggle} >
                    <Drawer width={200} open={this.state.open} zDepth={4} >
                        <AppBar
                            style={style}
                            onTitleClick={this.handleToggleClose}
                            title="Menu"
                            onLeftIconButtonClick={this.handleToggleClose}
                        />
                        <MenuItem>Home</MenuItem>
                        <MenuItem>Songs List</MenuItem>
                    </Drawer>
                </AppBar>
            </div>
        );
    }
}
