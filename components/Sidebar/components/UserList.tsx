import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  height: 100%;
  flex-grow: 1;
  overflow-y: hidden;
`;
// const Container = styled.div`
//   padding-top: 12px;
//   padding-bottom: 24px;
// `;
const Card = styled.div`
  position: relative;
`;
const CardItem = styled.div`
  padding: 8px;
  position: relative;
  padding-bottom: 8px;
  padding-left: 8px;
  background-color: transparent;
  min-width: 0;
  flex-basis: auto;
  -webkit-user-select: none;
  flex-shrink: 0;
  cursor: pointer;
  flex-direction: row;
  border: solid;
  outline: none;
`;
const User = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  justify-content: space-between;
  flex-direction: row;
  position: relative;
  flex-wrap: nowrap;
`;


export const UserList = () => {
  return (
    <Container>
        <Card>
            <CardItem>
                <User>

                </User>
            </CardItem>
        </Card>
    </Container>
  )
}
