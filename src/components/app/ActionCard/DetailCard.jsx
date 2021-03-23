import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { cardRoot } from '../../../styles/card';

const useStyles = makeStyles({
    cardRoot
});

const ActionCard = props => {
    const classes = useStyles();
    const { data } = props;
    const { body } = props;
    const { onClickAction } = props;

    return (
        <Card className={classes.cardRoot}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h4" component="h3">
                        {data}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {body}
                    </Typography>
                </CardContent>
            </CardActionArea>
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
