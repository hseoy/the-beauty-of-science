import React from 'react';
import styled from 'styled-components';
import loaderImage from 'assets/images/loader.svg';

const Loader = () => {
  return (
    <LoaderBlock>
      <img src={loaderImage} alt="Loading" />
    </LoaderBlock>
  );
};

const LoaderBlock = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #fff;

  > img {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export default Loader;
