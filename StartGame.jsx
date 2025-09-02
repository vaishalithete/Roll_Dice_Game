import React from 'react'
import styled from "styled-components";
import { Button } from '../styled/Button';

const StartGame = ( {toggle} ) => {
  return (
    <Container>
    
        <div>
            <Img src="/images/dices.png" />
        </div>
        <div className='content'>
            <h1>DICE GAME</h1>
            <Button onClick={toggle}>Play Now</Button>
            {/* <Button onClick={toggle} >Play Now</Button> */}
        </div>

    </Container>
  )
};

export default StartGame;

const Container = styled.div`
    max-width: 1180px;
    height: 100vh;
    display: flex;
    margin: 0 auto;
    align-items: center;
    justify-content: center;

    .content {
        h1{
            font-size: 96px;
            white-space: nowrap;
        }
    }
`;

const Img = styled.img`
    /* max-width: 900px;
    height: 450px; */
    width: 649px;
    height: 522px;
`;

// const Button = styled.button`
//     color: white;
//     padding: 10px 18px;
//     background: #000000;
//     border-radius: 5px;
//     min-width: 220px;
//     border: none;
//     font-size: 16px;

//     cursor:pointer;
//     border: 1px solid transparent;
//     transition: 0.4s background ease-in;

//     &:hover{
//         /* background-color: #383838; */
//         background-color: #7e7c7c;
//         background-color: #ffffff;
//         border: 3.5px solid black;
//         color: black;
//         transition: 0.3s background ease-in;
//     }
// `;