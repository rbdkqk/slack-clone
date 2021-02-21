import React from 'react';
import styled from 'styled-components';
import { Avatar } from '@material-ui/core';

export default function Header() {
  return (
    <HeaderContainer>
      {/* Header Left */}
      <HeaderLeft>
        <HeaderAvatar />
      </HeaderLeft>
      {/* Header Search */}
      {/* Header Right */}
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  color: red;
`;

const HeaderLeft = styled.div``;

const HeaderAvatar = styled(Avatar)``;

const HeaderSearch = styled.div``;

const HeaderRight = styled.div``;
