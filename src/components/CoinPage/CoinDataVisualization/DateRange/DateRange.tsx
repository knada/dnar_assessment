import { FC } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import { useAppDispatch, useAppSelector } from "../../../../application/hooks";
import "react-datepicker/dist/react-datepicker.css";
import {
    setFromDate,
    setToDate,
} from "../../../../application/features/dateSlice";

const DateRangeContainer = styled.div`
    @media screen and (min-width: ${props => props.theme.breakpoints.md}px) {
        margin-left: auto;
    }
`;

const DateRange: FC = () => {
    const { fromDate, toDate } = useAppSelector(state => state.date);
    const dispatch = useAppDispatch();

    return (
        <DateRangeContainer>
            From:
            <div>
                <DatePicker
                    dateFormat="dd MMM yy"
                    selected={fromDate}
                    selectsStart
                    onChange={(date: Date) => dispatch(setFromDate(date))}
                    startDate={fromDate}
                    endDate={toDate}
                    minDate={new Date("2009")}
                    maxDate={new Date()}
                />
            </div>
            To:
            <div>
                <DatePicker
                    dateFormat="dd MMM yy"
                    selected={toDate}
                    selectsEnd
                    onChange={(date: Date) => dispatch(setToDate(date))}
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
