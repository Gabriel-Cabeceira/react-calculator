// Aqui é configurado a estilização da virtual DOM (Da página princial da aplicação)

import styled from 'styled-components'

export const Container = styled.section`
    width: 100%;
    height: 100vh;
    background-color: #777777;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.section`
    
    height: 800px;
    background-color: black;
    border-radius: 15px;
    box-shadow: 0 0 5px #111111;
`

export const Row = styled.section`
    display: flex;
    margin: 0 3em;
    flex-direction: row;
    justify-content: space-between;
`