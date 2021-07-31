export type Coin = {
    id: string;
    symbol: string;
    name: string;
    block_time_minutes: string;
    image: {
        thumb: string;
        small: string;
        large: string;
    };
    market_data: {
        current_price: {
            usd: string;
        };
    };
    last_updated: string;
};

export type Event = {
    type: string;
    title: string;
    description: string;
    organizer: string;
    start_date: string;
    end_date: string;
    website: string;
    email: string;
    venue: string;
    address: string;
    city: string;
    country: string;
    screenshot: string;
};
