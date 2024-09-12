import { useState } from "react";
import events from "../assets/events";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import Collapse from "@mui/material/Collapse";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: "rotate(0deg)",
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: "rotate(180deg)",
      },
    },
  ],
}));

function Event({ event }) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const date1 = new Date("9 August, 2024");
  const date2 = new Date(event.time);
  var delta = Math.abs(date2 - date1) / 1000;

  // calculate (and subtract) whole days
  var days = Math.floor(delta / 86400);
  // console.log("event", event, days);
  return (
    <TimelineItem key={event.title}>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot sx={{ justifyContent: "center", alignItems: "center" }}>
          <IconButton>
            <Typography sx={{ fontSize: "0.8rem", fontWeight: "bold" }}>
              Day {days}
            </Typography>
          </IconButton>
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: "12px", px: 1 }}>
        <Card sx={{}}>
          <CardHeader
            title={event.title}
            subheader={event.time}
            sx={{ p: 1, px: 2 }}
            action={
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            }
          />
          <Divider />
          {/* <CardContent>
            <Typography color="gray" variant="h6" sx={{ fontWeight: "bold" }}>
              {event.description}
            </Typography>
          </CardContent> */}
          <EventCollapse expanded={expanded} event={event} />
        </Card>
      </TimelineContent>
    </TimelineItem>
  );
}

function EventCollapse({ expanded, event }) {
  return (
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <Divider />
      <CardHeader title="Details" />
      <CardContent>
        <Typography
          sx={{
            marginBottom: 2,
            fontSize: "0.87rem",
            fontWeight: "bold",
          }}
        >
          {event.details}
        </Typography>
      </CardContent>
      <Divider />
      {"references" in event ? (
        <>
          <CardHeader title="References" />
          <CardContent>
            <ol>
              {event.references.map((rfr) => (
                <li>
                  <a href={rfr.link}>{rfr.title}</a>
                </li>
              ))}
            </ol>
          </CardContent>
        </>
      ) : null}
    </Collapse>
  );
}

export default function EventTimeline() {
  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
        padding: "1px 2px",
      }}
    >
      {events.map((item) => (
        <Event event={item} key={item.title} />
      ))}
    </Timeline>
  );
}
