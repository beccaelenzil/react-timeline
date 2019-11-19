import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
    const events = props.events
    console.log(`events: ${events}`)
    const timelineEventComponents = events.map((event, i) => {
      return(
        <div class="timeline" key={i}>
          <TimelineEvent person={event.person} status={event.status} timestamp={event.timestamp}/>
        </div>
      )
    });
    return timelineEventComponents
}

export default Timeline;
