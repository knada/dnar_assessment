import { FC } from "react";
import { useGetEventsQuery } from "../../application/services/events";
import {
    EventsCardsContainer,
    EventsContainer,
    EventsHeading,
} from "./Events.styles";
import EventCard from "./EventCard/EventCard";
import { Event } from "../../types";

const Events: FC = () => {
    const { data, isLoading, isError } = useGetEventsQuery("");
    if (isLoading) {
        return <h1>Loading...</h1>;
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
