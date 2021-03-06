import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { cardRoot } from '../../../styles/card';
import { CircularProgress, Link } from '@material-ui/core';

const useStyles = makeStyles({
    cardRoot,
    progress: {
        margin: '.5em'
    }
});

const URL = "https://github.com/dropbox/zxcvbn#usage";

const ActionCard = props => {
    const classes = useStyles();
    const { data } = props;
    const { body } = props;
    const { onClickAction } = props;
    const { generateNotification } = props;

    useEffect(() => {
        onClickAction();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const copyToClipboard = () => {
        if (data) {
            const el = document.createElement('textarea');
            el.value = data.password;
            el.setAttribute('readonly', '');
            el.style.position = 'absolute';
            el.style.left = '-9999px';
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
            generateNotification();
        }
    };

    const getPassphraseInfo = () => {
        if (data) {
            const timeToCrack = data.crack_times_display.offline_fast_hashing_1e10_per_second;
            // const score = data.score;
            const backgroundColor = data.score === 4 ? "green" : data.score === 1 ? "red" : "orange";
            const textColor = data.score === 4 ? "white" : data.score === 1 ? "white" : "black";
            return (
                <CardContent style={{ color: textColor, backgroundColor: backgroundColor }}>
                    <Typography variant="overline" display="block" gutterBottom>
                        {`Time to crack: `}
                        <Link target="_blank" rel="noreferrer" href={URL} style={{ textDecoration: 'underline', color: textColor }}>
                            {timeToCrack}
                        </Link>
                    </Typography>
                </CardContent>
            );
        }
    };

    return (
        <Card className={classes.cardRoot}>
            {data ? <CardActionArea onClick={copyToClipboard}>
                <CardContent>
                    <Typography gutterBottom variant="h4" component="h3">
                        {data.password}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {body}
                    </Typography>
                </CardContent>
            </CardActionArea> : <CircularProgress disableShrink className={classes.progress} />}
            {getPassphraseInfo()}
            <CardActions>
                <Button size="small" color="primary" onClick={onClickAction} disabled={!data}>
                    Generate New Password
                </Button>
            </CardActions>
        </Card>
    );
};

export default ActionCard;
