import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import IMG from './raja-01.png';
import Avatar from '@material-ui/core/Avatar';
import { Chip } from '@material-ui/core';

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      margin: 'auto',
      maxWidth: 600,
      boxShadow: 'none',
    },
    image: {
      width: 64,
      height: 64,
      margin: 10,
    },
    img: {
      margin: '0',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  });

class User extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.paper} justify="center">
                <Grid container >
                    <Grid item xs={3} lg={2}>
                        <Avatar className={classes.image} justify="center">
                            <img className={classes.img} alt="complex" src={IMG} />
                        </Avatar>
                    </Grid>
                    <Grid item xs={9} lg={6} sm container>
                        <Grid item xs container direction="column" spacing={8}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1">
                                    Marselo Sitorus
                                </Typography>
                                <Chip label="60 points" className={classes.chip} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}

export default withStyles(styles)(User);