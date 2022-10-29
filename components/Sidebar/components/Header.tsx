import React from 'react';
import styled from 'styled-components';

const NavSibar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Flex = styled.div`
  display: flex;
  flex-shrink: 0;
`;
const Icon = styled.div`
  margin-left: 12px;
`;
const BorderIcon = styled.div`
  background-color: #e4e6eb;
  height: 36px;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  justify-content: center;
  padding-left: 0;
  border-radius: 50%;
  outline: none;
  width: 36px;
`;
const Icon1 = styled.i`
  background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yu/r/n4Fb5QewROc.png);
  background-position: -154px -150px;
  background-size: 190px 252px;
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
  display: inline-block;
  vertical-align: -0.25em;
`;
const Icon2 = styled.i`
  background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/ya/r/Y4bWnRWZwPU.png);
  background-position: 0px -304px;
  background-size: 34px 1454px;
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
  display: inline-block;
`;
const Icon3 = styled.i`
  background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/ya/r/Y4bWnRWZwPU.png);
  background-position: 0px -568px;
  background-size: 34px 1454px;
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
  display: inline-block;
`;

const Header = () => {
  return (
    <>
      <NavSibar>
        <h2>Chat</h2>
        <Flex>
          <Icon>
            <BorderIcon>
              <Icon1></Icon1>
            </BorderIcon>
          </Icon>

          <Icon>
            <BorderIcon>
              <Icon2></Icon2>
            </BorderIcon>
          </Icon>
          <Icon>
            <BorderIcon>
              <Icon3></Icon3>
            </BorderIcon>
          </Icon>
        </Flex>
      </NavSibar>
    </>
  );
};

export default Header;
