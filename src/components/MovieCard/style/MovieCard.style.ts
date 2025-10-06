import styled from "styled-components";



export const CardContainer = styled.div<{ $focused: boolean }>`
    width: 320px;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid ${({ $focused }) => ($focused ? 'dodgerblue' : 'gold')};
    transition: border-color 0.3s ease;
`

