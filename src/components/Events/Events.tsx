import { FC } from "react";
import { useGetEventsQuery } from "../../application/services/events";
import {
    EventsCardsContainer,
    EventsContainer,
    EventsHeading,
} from "./Events.styles";
import EventCard from "./EventCard/EventCard";
import { Event } from "../../types";
import LoadingIndicator from "../LoadingIndicator/LoadingIndicator";

const Events: FC = () => {
    const { data, isLoading, isError } = useGetEventsQuery("");
    if (isLoading) {
        return <LoadingIndicator />;
    }
    if (isError) {
        return <h1>Error fetching data</h1>;
    } else {
        return (
            <EventsContainer>
                <EventsHeading>Events</EventsHeading>
                <EventsCardsContainer>
                    {data.data.map((event: Event) => (
                        <EventCard key={event.title} event={event} />
                    ))}
                </EventsCardsContainer>
            </EventsContainer>
        );
    }
};

export default Events;
