import React from 'react';
import {Link} from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

const Navigation = ()=>(
    <div className="bg-indigo-600 p-2">
        <ul className="flex">
            <li className="navbar-item"><Link to={ROUTES.SING_IN}>Sign in</Link></li>
            
            <li className="navbar-item"><Link to={ROUTES.LANDING}>Landing</Link></li>

            <li className="navbar-item"><Link to={ROUTES.HOME}>Home</Link></li>
            
            <li className="navbar-item"><Link to={ROUTES.ACCOUNT}>Account</Link></li>
            
            <li className="navbar-item"><Link to={ROUTES.ADMIN}>Admin</Link></li>

        </ul>
    </div>
);

export default Navigation;