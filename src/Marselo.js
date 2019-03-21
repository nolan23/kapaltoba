import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Konten from './Konten';
import PrimarySearchAppBar from './PrimarySearchAppBar'
import MarseloBottomNav from './MarseloBottomNav';
import { Grid } from '@material-ui/core';

const styles = theme => ({
    root: {
        backgroundColor: '#e0e0e0',
        flexGrow: 1,
        margin: 0,
    },
    container: {
        flexGrow: 1,
    }
});


class Marselo extends Component {

    render() {
        const { classes } = this.props;
        return (
            <Grid container spacing={16} direction="column" className={classes.root}>
                <Grid item xs={12}>
                    <Grid container className={classes.container} spacing={8} direction="column" alignContent="center">
                        <Grid item style={{ maxWidth: '600px' }}>
                            <PrimarySearchAppBar />
                        </Grid>
                        <Grid item style={{ maxWidth: '600px' }}>
                            <div style={{ paddingTop: 8 }}>
                                <Konten />
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                    <MarseloBottomNav />
            </Grid>
        );
    }
}

export default withStyles(styles)(Marselo);