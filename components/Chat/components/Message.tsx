import React from 'react'
import styled from 'styled-components';
import Image from 'next/image';
import styles from '../../../styles/image.module.css';

const Container = styled.div`
       flex-grow: 1;
       padding: 0 16px;
`;
const Box = styled.div`
       display: flex;
    height: 100%;
    flex-grow: 1;
`;
const Content = styled.div`
       display: flex;
    flex-direction: column;
    min-height: 0;
        position: relative;
    z-index: 0;
    flex-grow: 1;
    max-width: 100%;
`;
const SMessage = styled.div`
       max-height: 100%;
     display: flex;
    flex-direction: column;
        overflow-x: hidden;
    // flex-basis: 0px;
    position: relative;
    flex-grow: 1;
    overflow-y: hidden;

`;
const Outer = styled.div`
          display: flex;
`;
const AvatarMain = styled.div`
          padding-left: 6px;
    padding-right: 8px;
`;
const AvatarStatus = styled.span`
        
`;
const Inner = styled.div`
          flex: 1;
    display: flex;
    flex-direction: row-reverse;
`;
const Bubble = styled.div`
          max-width: calc(100% - 67px);
    overflow-wrap: break-word;
`;
const Actions = styled.div`
         width: 67px;
    padding-right: 5px;
       flex-shrink: 0;
       display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 67px;
    padding-right: 5px;
`;
const Menu = styled.ul`
         width: 67px;
    padding-right: 5px;
       flex-shrink: 0;
`;
const Spacer = styled.div`
          flex: 1;
`;
const Status = styled.div`
    width: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
`;


export const Message = () => {
  return (
    <Container>
      <Box>
        <Content>
          <SMessage>
            <Outer>
              <AvatarMain>

              </AvatarMain>
              <Inner>
                <Bubble>ffdfdf</Bubble>
                <Actions>
                  <Menu></Menu>
                </Actions>
                <Spacer></Spacer>
              </Inner>
              <Status>
                <AvatarStatus>
            <Image src="https://res.cloudinary.com/dxk9kfxk1/image/upload/v1663778326/lexamwt52x7y3egx75im.jpg" className={`${styles.avatar}`} alt='avatar' width={28} height={28}/>

                </AvatarStatus>
              </Status>
            </Outer>

              <Outer dir="rtl">
              <AvatarMain>

              </AvatarMain>
              <Inner>
                <Bubble>ffdfdf</Bubble>
                <Actions>
                  <Menu></Menu>
                </Actions>
                <Spacer></Spacer>
              </Inner>
              <Status>
                <AvatarStatus>
            <Image src="https://res.cloudinary.com/dxk9kfxk1/image/upload/v1663778326/lexamwt52x7y3egx75im.jpg" className={`${styles.avatarMessage}`} alt='avatar' width={28} height={28}/>

                </AvatarStatus>
              </Status>
            </Outer>
          </SMessage>
        </Content>
        </Box>
    </Container>
  )
}
