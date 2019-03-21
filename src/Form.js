import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import InputForm from './InputForm';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControlLabel from '@material-ui/core/FormControlLabel'


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
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
});

class Form extends Component {
    state = {
        checkedA: true,
        jamBerangkat: '',
        jamKembali: '',
        isReturn: false,
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    handleJamChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleOnReturnChange = (e) => {
        this.setState({ isReturn: e.target.checked });
    }

    handlePenumpangChange = (e) =>{
        console.log(e.target.value);
    }
    render() {
        const { classes } = this.props;
        return (
            <Grid container >
                <Grid item xs={12}>
                    <InputForm txt="Pilih asal" />
                </Grid>
                <Grid item xs={12}>
                    <InputForm txt="Pilih tujuan" />
                </Grid>
                <Grid item xs={6}>

                </Grid>
                <Grid item xs={6} className={classes.container}>
                    <FormControlLabel
                        control={
                            <Checkbox checked={this.state.isReturn} onChange={this.handleOnReturnChange} value="isReturn" />
                        }
                        label="Kembali"
                    />
                </Grid>
                <Grid item xs={6}>
                    <form className={classes.container} noValidate>
                        <TextField
                            id="date"
                            label="Berangkat"
                            type="date"
                            defaultValue="2017-05-24"
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </form>
                </Grid>
                <Grid item xs={6}>
                    <form className={classes.container} noValidate>
                        <TextField
                            id="date"
                            label="Kembali"
                            type="date"
                            defaultValue="2017-05-24"
                            className={classes.textField}
                            disabled={!this.state.isReturn}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </form>
                </Grid>
                <Grid item xs={6}>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="jam-berangkat">Jam</InputLabel>
                        <Select
                            value={this.state.jamBerangkat}
                            onChange={this.handleJamChange}
                            inputProps={{
                                name: 'jamBerangkat',
                                id: 'jam-berangkat',
                            }}
                        >
                            <MenuItem value={10}>08:00</MenuItem>
                            <MenuItem value={20}>12:00</MenuItem>
                            <MenuItem value={30}>17:00</MenuItem>
                        </Select>
                    </FormControl>

                </Grid>
                <Grid item xs={6}>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="jam-kembali">Jam</InputLabel>
                        <Select
                            value={this.state.jamKembali}
                            onChange={this.handleJamChange}
                            disabled={!this.state.isReturn}
                            inputProps={{
                                name: 'jamKembali',
                                id: 'jam-kembali',
                            }}
                        >
                            <MenuItem value={10}>08:00</MenuItem>
                            <MenuItem value={20}>12:00</MenuItem>
                            <MenuItem value={30}>17:00</MenuItem>
                        </Select>
                    </FormControl>

                </Grid>
                <Grid item xs={6}>
                    <Typography>Penumpang</Typography>
                    <FormControl className={classes.formControl}>
                        <input type='number' name="quantity" min='0' onChange={this.handlePenumpangChange} />
                    </FormControl>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(Form);