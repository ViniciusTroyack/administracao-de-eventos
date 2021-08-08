import styled from "styled-components";

export const HeaderApp = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    top: 0;
    width: 100vw;
    height: 12vh;
    background-color: #423E37;

    button{
        background-color: #E3B23C;
        color: white;
        padding: 12px;
        margin: 6px
    }

    @media screen and (max-width: 660px){
        flex-direction: column;
        justify-content: center;

        button{
            padding: 6px;
        }
    }
`
