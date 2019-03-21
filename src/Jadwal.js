import React, {Component, Fragment} from 'react';
import { withStyles } from '@material-ui/core';
import PrimarySearchAppBar from './PrimarySearchAppBar';

class JadwalContainer extends Component{
    constructor(){
        super(props);

    }

    render(){
        return(
            <Fragment>
                <PrimarySearchAppBar/>
                
            </Fragment>
        );
    }
}

export default withStyles(styles)(JadwalContainer);