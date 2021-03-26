import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import PassphraseGenerator from '../lib/PassphraseGenerator';
const ActionCard = React.lazy(() => import('../components/app/ActionCard'));
const HeadingCard = React.lazy(() => import('../components/app/HeadingCard'));
const Snackbar = React.lazy(() => import('../components/app/Snackbar'));

const useStyles = makeStyles(theme => ({
    container: {
        minHeight: '100vh'
    }
}));

const passGen = new PassphraseGenerator();

const MainView = () => {
    const classes = useStyles();
    const [password, setPassword] = React.useState('');
    const [open, setOpen] = React.useState(false);

    const handleClick = () => setOpen(true);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const generatePassword = async () => {
        setPassword('');
        const pass = await passGen.generatePassphrase();
        setPassword(pass);
    };

    return (
        <Grid container spacing={0} direction="column" alignItems="center" justify="center" className={classes.container}>
            <Grid item xs={12}>
                <HeadingCard heading="Password Generator" />
                <ActionCard data={password} body={"Click to copy"} onClickAction={generatePassword} generateNotification={handleClick} />
                <Snackbar message="Copied to cliboard!" open={open} handleClose={handleClose}/>
            </Grid>
        </Grid>
    );
};

export default MainView;