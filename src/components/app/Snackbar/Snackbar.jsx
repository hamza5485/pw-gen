import React from 'react';
import MUISnackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

const Alert = props => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

const Snackbar = props => {
    const classes = useStyles();
    const { message } = props;
    const { open } = props;
    const { handleClose } = props;

    return (
        <div className={classes.root}>
            <MUISnackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    {message}
                </Alert>
            </MUISnackbar>
        </div>
    );
};

export default Snackbar;