import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: auto;
    overflow: hidden;
    width: 720px;
    height: 450px;
    box-shadow: 5px 5px 15px #423E37;
    border-radius: 10px;
    margin: 16px;
    font-size: 1rem;
    background-color: #EDEBD7;
    color: #423E37;

    span{
        display: block;
        margin: 16px;
        color: #E3B23C;
        font-weight: bold;
    }
    
    p{
        padding-right: 20px;
    }

    select {
        background-color: #E3B23C;
        color: white;
        padding: 12px;
        width: 250px;
        appearance: button;
        outline: none;  
    }

    h1{
        padding-right: 20px;
    }

    @media screen and (max-width: 660px){
        width: 310px;
        height: auto;

        p{
        padding: 20px;
        }
        button{
            margin-bottom: 16px;
        }
        .mainCard{
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }

`

export const Image = styled.div`
    width: 300px;

    img{
        width: 200px;
        height: 300px;
        object-fit: contain;
    }

    @media screen and (max-width: 660px){
        display: none;
    }
`