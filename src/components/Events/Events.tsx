import { FC } from "react";
import { useGetEventsQuery } from "../../application/services/events";
import { EventsContainer } from "./Events.styles";
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
                {data.data.map((event: Event) => (
                    <EventCard key={event.title} event={event} />
                ))}
            </EventsContainer>
        );
    }
};

export default Events;
