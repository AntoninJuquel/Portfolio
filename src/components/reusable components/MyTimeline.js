import React from 'react';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from "@material-ui/lab";
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

function MyTimeline({ align, items }) {
    return (
        <Timeline align={align}>

            {
                items &&
                items.map(el => {
                    return (
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography variant="body2" color={el.dateColor}>{el.date}</Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot color={el.iconColor} variant="outlined">
                                    {el.icon}
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper elevation={3} style={{textAlign: "center"}}>
                                    <Typography variant="h6" component="h1" color={el.titleColor}>{el.title}</Typography>
                                    <Typography color={el.descriptionColor}>{el.description}</Typography>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                    )
                })
            }

        </Timeline>
    )
}

export default MyTimeline;