import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Divider, Paper } from '@material-ui/core';
import User from './User';
import Form from './Form';

const styles = theme => ({
    grid: {
        width: '100%',
        margin: '0'
    },
    root: {
        width: '100%',
        maxWidth: 800,
        backgroundColor: theme.palette.background.paper
    },
    paper:{
        ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    }
});

function Konten(props) {
    const { classes } = props;
    return (
        <Grid container className={classes.grid} direction="column" spacing={8}>
            <Grid item xs >
                <User />
                <Divider />
            </Grid>
            <Grid item >
                <Paper className={classes.paper}>
                    <Form />
                </Paper>
                <Divider />
            </Grid>
        </Grid>
    )
}

Konten.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Konten);