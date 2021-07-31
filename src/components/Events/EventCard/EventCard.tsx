import { FC } from "react";
import { Event } from "../../../types";
import {
    EventCardContainer,
    EventCardDescription,
    EventCardTitle,
} from "./EventCard.styles";

type EventCardProps = {
    event: Event;
};

const EventCard: FC<EventCardProps> = ({ event }) => {
    return (
        <EventCardContainer>
            <EventCardTitle>{event.title}</EventCardTitle>
            <EventCardDescription>{event.description}</EventCardDescription>
        </EventCardContainer>
    );
};

export default EventCard;
