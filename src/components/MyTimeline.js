import React from 'react';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from "@material-ui/lab";
import Typography from '@material-ui/core/Typography';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '6px 16px',
    },
}));

function MyTimeline({ align }) {
    const classes = useStyles();
    return (
        <Timeline align={align}>

            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">9:30 am</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="primary" variant="outlined">
                        <FastfoodIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">Eat</Typography>
                        <Typography>Because you need strength</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>

        </Timeline>
    )
}

export default MyTimeline;