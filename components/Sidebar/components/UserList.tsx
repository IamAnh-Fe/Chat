import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import styles from '../../../styles/image.module.css';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  height: 100%;
  flex-grow: 1;
  overflow-y: hidden;

`;
const Container1 = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  flex-grow: 1;
  overflow-y: hidden;
`;
const Scroll = styled.div`
      overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    position: relative;
      padding: 0 8px;


`;
const Card = styled.div`
border: 1px solid;
border-radius: 30px;
    padding: 8px ;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 0.2s;
     border-radius: 7px;
    position: relative;`;

const Content = styled.div`
      font-weight: 500;
    font-size: 13px;
    display: flex;
`;
const Info = styled.div`
     overflow: hidden;

`;
const UserName = styled.div`
        margin-bottom: 4px;
    font-weight: 600;
    font-size: 15px;
  }
`;
const Message = styled.span`
   display: flex;
    align-items: center;
`;
const Date = styled.span`
     font-size: 14px;
    color: #626466;
    margin-left: 3px;
     &:before {
       content: "•";
    margin-right: 2px;
  }
`;
const Seen = styled.span`
  position: absolute; 
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: hsl(214, 89%, 52%);
}
`;

export const UserList = () => {
  return (
    <>
      
      <Scroll>
        
                  <Card>
            <Image src="https://res.cloudinary.com/dxk9kfxk1/image/upload/v1663778326/lexamwt52x7y3egx75im.jpg" className={`${styles.avatar}`} alt='avatar' width={56} height={56}/>
              <Info>
                <UserName>
                  Madison Jones
                </UserName>
                <Content>
                  <Message>What time was our meet</Message>
                        <Date>20m</Date>
                        <Seen></Seen>
                </Content>
              </Info>
        </Card>
               <Card>
            <Image src="https://res.cloudinary.com/dxk9kfxk1/image/upload/v1663778326/lexamwt52x7y3egx75im.jpg" className={`${styles.avatar}`} alt='avatar' width={56} height={56}/>
              <Info>
                <UserName>
                  Madison Jones
                </UserName>
                <Content>
                  <Message>What time was our meet</Message>
                        <Date>20m</Date>
                        <Seen></Seen>
                </Content>
              </Info>
                  </Card>
                         <Card>
            <Image src="https://res.cloudinary.com/dxk9kfxk1/image/upload/v1663778326/lexamwt52x7y3egx75im.jpg" className={`${styles.avatar}`} alt='avatar' width={56} height={56}/>
              <Info>
                <UserName>
                  Madison Jones
                </UserName>
                <Content>
                  <Message>What time was our meet</Message>
                        <Date>20m</Date>
                        <Seen></Seen>
                </Content>
              </Info>
                  </Card>
                         <Card>
            <Image src="https://res.cloudinary.com/dxk9kfxk1/image/upload/v1663778326/lexamwt52x7y3egx75im.jpg" className={`${styles.avatar}`} alt='avatar' width={56} height={56}/>
              <Info>
                <UserName>
                  Madison Jones
                </UserName>
                <Content>
                  <Message>What time was our meet</Message>
                        <Date>20m</Date>
                        <Seen></Seen>
                </Content>
              </Info>
                  </Card>
                         <Card>
            <Image src="https://res.cloudinary.com/dxk9kfxk1/image/upload/v1663778326/lexamwt52x7y3egx75im.jpg" className={`${styles.avatar}`} alt='avatar' width={56} height={56}/>
              <Info>
                <UserName>
                  Madison Jones
                </UserName>
                <Content>
                  <Message>What time was our meet</Message>
                        <Date>20m</Date>
                        <Seen></Seen>
                </Content>
              </Info>
                  </Card>
                         <Card>
            <Image src="https://res.cloudinary.com/dxk9kfxk1/image/upload/v1663778326/lexamwt52x7y3egx75im.jpg" className={`${styles.avatar}`} alt='avatar' width={56} height={56}/>
              <Info>
                <UserName>
                  Madison Jones
                </UserName>
                <Content>
                  <Message>What time was our meet</Message>
                        <Date>20m</Date>
                        <Seen></Seen>
                </Content>
              </Info>
                  </Card>
                         <Card>
            <Image src="https://res.cloudinary.com/dxk9kfxk1/image/upload/v1663778326/lexamwt52x7y3egx75im.jpg" className={`${styles.avatar}`} alt='avatar' width={56} height={56}/>
              <Info>
                <UserName>
                  Madison Jones
                </UserName>
                <Content>
                  <Message>What time was our meet</Message>
                        <Date>20m</Date>
                        <Seen></Seen>
                </Content>
              </Info>
                  </Card>
                         <Card>
            <Image src="https://res.cloudinary.com/dxk9kfxk1/image/upload/v1663778326/lexamwt52x7y3egx75im.jpg" className={`${styles.avatar}`} alt='avatar' width={56} height={56}/>
              <Info>
                <UserName>
                  Madison Jones
                </UserName>
                <Content>
                  <Message>What time was our meet</Message>
                        <Date>20m</Date>
                        <Seen></Seen>
                </Content>
              </Info>
                  </Card>
                         <Card>
            <Image src="https://res.cloudinary.com/dxk9kfxk1/image/upload/v1663778326/lexamwt52x7y3egx75im.jpg" className={`${styles.avatar}`} alt='avatar' width={56} height={56}/>
              <Info>
                <UserName>
                  Madison Jones
                </UserName>
                <Content>
                  <Message>What time was our meet</Message>
                        <Date>20m</Date>
                        <Seen></Seen>
                </Content>
              </Info>
                  </Card>
                         <Card>
            <Image src="https://res.cloudinary.com/dxk9kfxk1/image/upload/v1663778326/lexamwt52x7y3egx75im.jpg" className={`${styles.avatar}`} alt='avatar' width={56} height={56}/>
              <Info>
                <UserName>
                  Madison Jones
                </UserName>
                <Content>
                  <Message>What time was our meet</Message>
                        <Date>20m</Date>
                        <Seen></Seen>
                </Content>
              </Info>
        </Card>
                  <Card>
            <Image src="https://res.cloudinary.com/dxk9kfxk1/image/upload/v1663778326/lexamwt52x7y3egx75im.jpg" className={`${styles.avatar}`} alt='avatar' width={56} height={56}/>
              <Info>
                <UserName>
                  Madison Jones
                </UserName>
                <Content>
                  <Message>What time was our meet</Message>
                        <Date>20m</Date>
                        <Seen></Seen>
                </Content>
              </Info>
        </Card>
                  <Card>
            <Image src="https://res.cloudinary.com/dxk9kfxk1/image/upload/v1663778326/lexamwt52x7y3egx75im.jpg" className={`${styles.avatar}`} alt='avatar' width={56} height={56}/>
              <Info>
                <UserName>
                  Madison Jones
                </UserName>
                <Content>
                  <Message>What time was our meet</Message>
                        <Date>20m</Date>
                        <Seen></Seen>
                </Content>
              </Info>
        </Card>
                  <Card>
            <Image src="https://res.cloudinary.com/dxk9kfxk1/image/upload/v1663778326/lexamwt52x7y3egx75im.jpg" className={`${styles.avatar}`} alt='avatar' width={56} height={56}/>
              <Info>
                <UserName>
                  Madison Jones
                </UserName>
                <Content>
                  <Message>What time was our meet</Message>
                        <Date>20m</Date>
                        <Seen></Seen>
                </Content>
              </Info>
        </Card>
                  <Card>
            <Image src="https://res.cloudinary.com/dxk9kfxk1/image/upload/v1663778326/lexamwt52x7y3egx75im.jpg" className={`${styles.avatar}`} alt='avatar' width={56} height={56}/>
              <Info>
                <UserName>
                  Madison Jones
                </UserName>
                <Content>
                  <Message>What time was our meet</Message>
                        <Date>20m</Date>
                        <Seen></Seen>
                </Content>
              </Info>
        </Card>
                  <Card>
            <Image src="https://res.cloudinary.com/dxk9kfxk1/image/upload/v1663778326/lexamwt52x7y3egx75im.jpg" className={`${styles.avatar}`} alt='avatar' width={56} height={56}/>
              <Info>
                <UserName>
                  Madison Jones
                </UserName>
                <Content>
                  <Message>What time was our meet</Message>
                        <Date>20m</Date>
                        <Seen></Seen>
                </Content>
              </Info>
        </Card>
                  <Card>
            <Image src="https://res.cloudinary.com/dxk9kfxk1/image/upload/v1663778326/lexamwt52x7y3egx75im.jpg" className={`${styles.avatar}`} alt='avatar' width={56} height={56}/>
              <Info>
                <UserName>
                  Madison Jones
                </UserName>
                <Content>
                  <Message>What time was our meet</Message>
                        <Date>20m</Date>
                        <Seen></Seen>
                </Content>
              </Info>
        </Card>
                  <Card>
            <Image src="https://res.cloudinary.com/dxk9kfxk1/image/upload/v1663778326/lexamwt52x7y3egx75im.jpg" className={`${styles.avatar}`} alt='avatar' width={56} height={56}/>
              <Info>
                <UserName>
                  Madison Jones
                </UserName>
                <Content>
                  <Message>What time was our meet</Message>
                        <Date>20m</Date>
                        <Seen></Seen>
                </Content>
              </Info>
        </Card>
                  <Card>
            <Image src="https://res.cloudinary.com/dxk9kfxk1/image/upload/v1663778326/lexamwt52x7y3egx75im.jpg" className={`${styles.avatar}`} alt='avatar' width={56} height={56}/>
              <Info>
                <UserName>
                  Madison Jones
                </UserName>
                <Content>
                  <Message>What time was our meet</Message>
                        <Date>20m</Date>
                        <Seen></Seen>
                </Content>
              </Info>
        </Card>
                  <Card>
            <Image src="https://res.cloudinary.com/dxk9kfxk1/image/upload/v1663778326/lexamwt52x7y3egx75im.jpg" className={`${styles.avatar}`} alt='avatar' width={56} height={56}/>
              <Info>
                <UserName>
                  Madison Jones
                </UserName>
                <Content>
                  <Message>What time was our meet</Message>
                        <Date>20m</Date>
                        <Seen></Seen>
                </Content>
              </Info>
        </Card>
                  <Card>
            <Image src="https://res.cloudinary.com/dxk9kfxk1/image/upload/v1663778326/lexamwt52x7y3egx75im.jpg" className={`${styles.avatar}`} alt='avatar' width={56} height={56}/>
              <Info>
                <UserName>
                  Madison Jones
                </UserName>
                <Content>
                  <Message>What time was our meet</Message>
                        <Date>20m</Date>
                        <Seen></Seen>
                </Content>
              </Info>
        </Card>
                  <Card>
            <Image src="https://res.cloudinary.com/dxk9kfxk1/image/upload/v1663778326/lexamwt52x7y3egx75im.jpg" className={`${styles.avatar}`} alt='avatar' width={56} height={56}/>
              <Info>
                <UserName>
                  Madison Jones
                </UserName>
                <Content>
                  <Message>What time was our meet</Message>
                        <Date>20m</Date>
                        <Seen></Seen>
                </Content>
              </Info>
        </Card>
                  <Card>
            <Image src="https://res.cloudinary.com/dxk9kfxk1/image/upload/v1663778326/lexamwt52x7y3egx75im.jpg" className={`${styles.avatar}`} alt='avatar' width={56} height={56}/>
              <Info>
                <UserName>
                  Madison Jones
                </UserName>
                <Content>
                  <Message>What time was our meet</Message>
                        <Date>20m</Date>
                        <Seen></Seen>
                </Content>
              </Info>
        </Card>
                  <Card>
            <Image src="https://res.cloudinary.com/dxk9kfxk1/image/upload/v1663778326/lexamwt52x7y3egx75im.jpg" className={`${styles.avatar}`} alt='avatar' width={56} height={56}/>
              <Info>
                <UserName>
                  Madison Jones
                </UserName>
                <Content>
                  <Message>What time was our meet</Message>
                        <Date>20m</Date>
                        <Seen></Seen>
                </Content>
              </Info>
        </Card>
                  <Card>
            <Image src="https://res.cloudinary.com/dxk9kfxk1/image/upload/v1663778326/lexamwt52x7y3egx75im.jpg" className={`${styles.avatar}`} alt='avatar' width={56} height={56}/>
              <Info>
                <UserName>
                  Madison Jones
                </UserName>
                <Content>
                  <Message>What time was our meet</Message>
                        <Date>20m</Date>
                        <Seen></Seen>
                </Content>
              </Info>
        </Card>
        
        
            
                </Scroll>
        
    </>
  )
}
