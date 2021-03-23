import React from 'react';
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

    return (
        <Card className={classes.cardRoot}>
            {data ? <CardActionArea>
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
                <Button size="small" color="primary" onClick={onClickAction}>
                    Generate New Password
                </Button>
                {/* <Button size="small" color="primary">
                    Learn More
                </Button> */}
            </CardActions>
        </Card>
    );
};

export default ActionCard;
