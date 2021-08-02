import styled, { keyframes } from "styled-components";

const spin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const LoadingIndicator = styled.div`
    width: 8rem;
    height: 8rem;
    border: 1rem solid white;
    margin: auto;
    border-bottom-color: transparent;
    border-radius: 50%;
    animation: ${spin} infinite 1s linear;
`;

export default LoadingIndicator;
