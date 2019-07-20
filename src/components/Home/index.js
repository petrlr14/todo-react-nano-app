import React from 'react';
import {FirebaseContext} from '../Firebase';

const home = ()=>{
    return <FirebaseContext.Consumer>
        {firebase=>{
            return <div>Yeah</div>
        }}
    </FirebaseContext.Consumer>
};

export default home;