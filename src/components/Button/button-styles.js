import styled from 'styled-components';

export const ButtonInstance = styled.button`
    width: 8rem;
    height: 6rem;
    margin: 10px;
    border-radius: 3em;
    color: #FFF;
    font-weight: bold;
    font-size: 2em;
    background-color: blue;

    &:hover {
        opacity: 0.85;
        cursor: pointer;
    }

    &.zero-button {
        width: 17rem;
    }

    &.digits {
        background-color: #333333;
    }

    &.operators {
        background-color: #F19A38;
    }

    &.other-controls {
        background-color: #A5A5A5;
        color: black;
    }
`