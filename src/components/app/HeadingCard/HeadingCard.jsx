import React from 'react';
import { Card, CardContent, makeStyles, Typography } from '@material-ui/core';
import { cardRoot } from '../../../styles/card';

const useStyles = makeStyles({
    cardRoot
});

const HeadingCard = props => {
    const classes = useStyles();

    return (
        <Card className={classes.cardRoot}>
            <CardContent>
                <Typography variant="h3" component="h2">
                    {props.heading}
                </Typography>
            </CardContent>
        </Card>

    );
};

export default HeadingCard;