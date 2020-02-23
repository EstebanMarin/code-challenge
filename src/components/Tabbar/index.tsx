import React from 'react';
import styled from 'styled-components';

const StyledTabbar = styled.div`
`

interface TabbarProps {
}

function Tabbar({ }: TabbarProps) {
  return (
    <StyledTabbar>
      <div className="tabbar"></div>
    </StyledTabbar>
  );
}

export default Tabbar;
