import React from 'react';

const Layout = ({ modal, children }) => {
  return (
    <>
      {modal}
      {children}
    </>
  );
};

export default Layout;