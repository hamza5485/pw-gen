import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { cardRoot } from '../../../styles/card';
import { CircularProgress } from '@material-ui/core';

const useStyles = makeStyles({
    cardRoot,
    progress: {
        margin: '.5em'
    }
});

const ActionCard = props => {
    const classes = useStyles();
    const { data } = props;
    const { body } = props;
    const { onClickAction } = props;

    useEffect(() => {
        onClickAction();
    }, []);

    const copyToClipboard = () => {
        if (data) {
            const el = document.createElement('textarea');
            el.value = data;
            el.setAttribute('readonly', '');
            el.style.position = 'absolute';
            el.style.left = '-9999px';
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
            
            // generate notification
        }
    };

    return (
        <Card className={classes.cardRoot}>
            {data ? <CardActionArea onClick={copyToClipboard}>
                <CardContent>
                    <Typography gutterBottom variant="h4" component="h3">
                        {data}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {body}
                    </Typography>
                </CardContent>
            </CardActionArea> : <CircularProgress disableShrink className={classes.progress} />}
            <CardActions>
                <Button size="small" color="primary" onClick={onClickAction} disabled={!data}>
                    Generate New Password
                </Button>
            </CardActions>
        </Card>
    );
};

export default ActionCard;
