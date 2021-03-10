import styled from 'styled-components';

const Input = styled.input`
  outliine: none;
  border: none;
  font-size: 20px;
  display: block;
  width: 100%;
  border-bottom: 3px solid ${({ theme }) => theme.colors.accentColor || '#000'};
`;

export default { Input };
