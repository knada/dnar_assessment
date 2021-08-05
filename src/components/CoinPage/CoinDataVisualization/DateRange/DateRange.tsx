import { FC, useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateRangeContainer = styled.div`
    @media screen and (min-width: ${props => props.theme.breakpoints.md}px) {
        margin-left: auto;
    }
`;

const DateRange: FC = () => {
    const [fromDate, setFromDate] = useState(new Date());
    const [toDate, setToDate] = useState(new Date());
    return (
        <DateRangeContainer>
            From:
            <div>
                <DatePicker
                    selected={fromDate}
                    selectsStart
                    onChange={(date: Date) => setFromDate(date)}
                    startDate={fromDate}
                    endDate={toDate}
                    minDate={new Date("2009")}
                />
            </div>
            To:
            <div>
                <DatePicker
                    selected={toDate}
                    selectsEnd
                    onChange={(date: Date) => setToDate(date)}
                    startDate={fromDate}
                    endDate={toDate}
                    minDate={fromDate}
                    maxDate={new Date()}
                />
            </div>
        </DateRangeContainer>
    );
};

export default DateRange;
