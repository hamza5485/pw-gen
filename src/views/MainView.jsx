import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import ActionCard from '../components/app/ActionCard';
import HeadingCard from '../components/app/HeadingCard';
import PassphraseGenerator from '../lib/PassphraseGenerator';

const useStyles = makeStyles(theme => ({
    container: {
        minHeight: '100vh'
    }
}));

const passGen = new PassphraseGenerator();

const MainView = () => {
    const classes = useStyles();
    const [password, setPassword] = React.useState('');

    const generatePassword = async () => {
        console.log(`generating password`);
        const pass = await passGen.generatePassphrase();
        setPassword(pass);
    };

    return (
        <Grid container spacing={0} direction="column" alignItems="center" justify="center" className={classes.container}>
            <Grid item xs={12}>
                <HeadingCard heading="Password Generator" />
                <ActionCard data={password} body={"click to copy"} onClickAction={generatePassword}/>
            </Grid>

        </Grid>
    );
};

export default MainView;