import styled from "styled-components";

export const Button = styled.button`
    color: white;
    padding: 10px 18px;
    background: #000000;
    border-radius: 5px;
    min-width: 220px;
    border: none;
    font-size: 16px;

    cursor:pointer;
    border: 1px solid transparent;
    transition: 0.4s background ease-in;

    &:hover{
        /* background-color: #383838; */
        background-color: #7e7c7c;
        background-color: #ffffff;
        background-color: white;
        border: 3.5px solid black;
        color: black;
        transition: 0.3s background ease-in;
    }
`;

// yaha jese hi button pass kara to upar wale ki sari property idhar aa gyi
export const OutlineButton = styled(Button)`   
    background-color: white;
    border: 1px solid black;
    color: black;
    &:hover{
        background-color: black;
        border: 3.5px solid transparent;
        color: white;
    }
`;