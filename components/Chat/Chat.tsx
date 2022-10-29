import React from 'react'
import { Header } from './components/Header';
import { Message } from './components/Message';
import { Footer } from './components/Footer';
import styled from 'styled-components';

const Container = styled.div`
       display: flex;
    flex-direction: column;
    overflow: auto;
        flex-grow: 1;

`;

export const Chat = () => {
    return (
      <Container>
            <Header />
        <Message />
    <Footer/>
          
      </Container>
  )
}
