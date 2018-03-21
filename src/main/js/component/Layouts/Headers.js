/**
 * Created by user on 3/20/18.
 */
import React from 'react';
import { AppBar, Toolbar, Typography } from 'material-ui';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
/*import SongList from './SongList';*/
/*import Home from './Home';*/

const Headers = () => (
    <AppBar position = "static">
        <Toolbar>
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/songs">Song List</Link>
                        </li>
                    </ul>

                    <hr />

                    <Route exact path="/" component={Home} />
                    <Route path="/songs" component={SongList} />
                </div>
            </Router>
        </Toolbar>
    </AppBar>
);

export default Headers;