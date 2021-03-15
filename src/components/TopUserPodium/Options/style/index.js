import styled from 'styled-components';

export const OptionsWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 0 10px;
`;

export const Option = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.grayColor || '#ddd'};
  background-color: ${props =>
    props.active
      ? props.theme.colors.textColor || '#1e1e1e'
      : props.theme.colors.bgColor || '#fff'};
  color: ${props =>
    props.active
      ? props.theme.colors.bgColor || '#fff'
      : props.theme.colors.textColor || '#1e1e1e'};
  border-radius: 2rem;
  padding: 5px 10px;
  margin: 0 10px;
  transition: 0.2s;

  &:hover {
    color: ${props => props.theme.colors.bgColor || '#fff'};
    background-color: ${props => props.theme.colors.textColor || '#1e1e1e'};
  }
`;
