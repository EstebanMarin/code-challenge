import React from 'react';
import styled from 'styled-components';

const StyledTabbar = styled.div`
`

interface TabbarProps {
}

// eslint-disable-next-line
function Tabbar({ }: TabbarProps): React.ReactNode {
  return (
    <StyledTabbar>
      <div className="tabbar" />
    </StyledTabbar>
  );
}

export default Tabbar;
