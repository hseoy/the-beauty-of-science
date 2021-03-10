import styled from 'styled-components';

const Input = styled.textarea`
  resize: none;
  width: 100%;
  height: 100px;
  display: inline-block;
  overflow-y: auto;
  padding: 5px;
  border: 3px solid ${({ theme }) => theme.colors.accentColor || '#000'};
`;

export default { Input };
