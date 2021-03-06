import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Profile from './Profile';

const Profiles = () => {
    return (
        <div>
            <h3>사용자 목록 : </h3>
            <ul>
                <li>
                    <Link to="/profiles/velopert">velopert</Link>
                </li>
                <li>
                    <Link to="/profiles/gildong">gildong</Link>
                </li>
            </ul>

            <Route path="/profiles" exact render={() => <div>사용자를 선택해 주세요.</div>}>                
            </Route>
            <Route path="/profiles/:username" component={Profile}></Route>
        </div>
    )
}

export default Profiles;