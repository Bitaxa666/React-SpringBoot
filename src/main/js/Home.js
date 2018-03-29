/**
 * Created by user on 3/20/18.
 */
import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';
import ContentHome from 'material-ui/svg-icons/action/home';
import Divider from 'material-ui/Divider';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';


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
                    <Drawer className="drawerBackGround"
                            width={180}
                            open={this.state.open}
                            zDepth={2}
                            docked={false}
                            containerStyle={{ backgroundColor: '#D0F5A9',}}>
                        <AppBar
                            style={style}
                            onTitleClick={this.handleToggleClose}
                            title="Menu"
                            onLeftIconButtonClick={this.handleToggleClose}
                        />
                        <List>
                            <ListItem primaryText="Home"
                                      rightIcon={<ContentHome />}
                                      onClick={this.handleToggleClose} /*Добавить слайдер при клике на эту ссылку*/
                            />
                            <ListItem primaryText="Songs List"
                                      onClick={this.handleToggleClose}
                            />
                            <ListItem primaryText="Player"
                                      onClick={this.handleToggleClose}
                            />
                            <ListItem primaryText="Technology"
                                      onClick={this.handleToggleClose}
                            />
                        </List>
                        <Divider style={{ backgroundColor: '#80FF00',}} />
                    </Drawer>
                </AppBar>
            </div>
        );
    }
}
