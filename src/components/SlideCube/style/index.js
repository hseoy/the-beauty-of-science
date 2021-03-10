import styled from 'styled-components';

const Scene = styled.div`
  margin: 0 auto;
  perspective: 1000px;
`;

const Cube = styled.div`
  position: relative;
  transform-style: preserve-3d;
  transform: translateZ(-405px);
  transition: transform 1s;

  transform: translateZ(-405px)
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
          return 90;
        }
        return 0;
      }}deg
    );
`;

const CubeFace = styled.div`
  position: absolute;
  margin: 0 auto;
  text-align: center;
  overflow: hidden;
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
          return -90;
        }
        return 0;
      }}deg
    )
    translateZ(405px);
`;

export { Scene };
export { Cube };
export { CubeFace };
export default { Scene, Cube, CubeFace };
