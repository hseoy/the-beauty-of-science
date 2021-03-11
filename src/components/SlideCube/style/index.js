import styled from 'styled-components';

const Scene = styled.div`
  position: relative;
  perspective: 1000px;
  max-width: ${props => props.size || '0'}px;
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
`;

const Cube = styled.div`
  transform-style: preserve-3d;
  transition: transform 1s;
  width: 100%;
  height: 100%;

  transform: translateZ(-${props => props.size / 2 || '0'}px)
    rotateY(
      ${props => {
        if (props.front) {
          return 0;
        }
        if (props.right) {
          return -90;
        }
        if (props.back) {
          return -180;
        }
        if (props.left) {
          return -270;
        }
        return 0;
      }}deg
    );
`;

const CubeFace = styled.div`
  position: absolute;
  text-align: center;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: ${props => props.bgColor || '#fff'};

  transform: rotateY(
      ${props => {
        if (props.front) {
          return 0;
        }
        if (props.right) {
          return 90;
        }
        if (props.back) {
          return 180;
        }
        if (props.left) {
          return 270;
        }
        return 0;
      }}deg
    )
    translateZ(${props => props.size / 2 || '0'}px);
`;

const CubeFaceEmpty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.primaryColor || '#fff'};
  border: 3px solid ${props => props.theme.colors.accentColor || '#000'};
`;

export { Scene };
export { Cube };
export { CubeFace };
export { CubeFaceEmpty };
export default { Scene, Cube, CubeFace, CubeFaceEmpty };
