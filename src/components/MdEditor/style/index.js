import styled, { css } from 'styled-components';

const Wrap = styled.div`
  height: 100%;
  position: relative;
  padding: 0 10px;
  display: flex;
`;

const MdInput = styled.textarea`
  width: 50%;
  height: 100%;
  resize: none;
  padding: 20px;
  ${({ theme }) =>
    theme.colors.accentColor &&
    css`
      border: 2px solid ${theme.colors.accentColor};
    `}
  border-right: none;
`;

export { Wrap };
export { MdInput };
export default { Wrap, MdInput };
