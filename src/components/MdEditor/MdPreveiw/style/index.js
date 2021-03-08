import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

const PostContentCss = css`
  line-height: 1.5rem;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${({ theme }) => theme.font.family.acccent || 'sans-seif'};
    line-height: 1.25;
    margin-bottom: 16px;
    margin-top: 24px;
    padding-bottom: 0.8rem;
  }

  h1,
  h2 {
    border-bottom: 1px solid #eaecef;
  }

  p {
    margin: 1.5rem 0 0.5rem;
  }

  a {
    position: relative;
    display: inline-block;

    color: ${({ theme }) => theme.colors.accentColor || '#000'};
    text-decoration: none;

    &[href] {
      box-shadow: inset 0 -4px 0 ${({ theme }) =>
        theme.colors.primaryColor || 'rgba(0,0,0,0.0)'};
      transition: box-shadow 0.2s, color 0.2s;
    }

    &:hover {
      text-decoration: none;
      box-shadow: inset 0 -20px 0 ${({ theme }) =>
        theme.colors.primaryColor || 'rgba(0,0,0,0.0)'};
      color: ${({ theme }) => theme.colors.accentColor || '#000'};
    }

    code {
      background-color: transparent;
    }
  }

  ol,
  ul {
    display: block;

    li {
      margin: 10px 0;
      li {
        margin-left: 40px;
      }
    }
  }

  input,
  textarea,
  select,
  button {
    font-family: ${({ theme }) => theme.font.family.base || 'sans-serif'};
  }

  img {
    max-width: 100%;
    vertical-align: middle;
    border: 0 none;
  }

  button {
    cursor: pointer;
    vertical-align: middle;
  }

  input,
  textarea {
    color: ${({ theme }) => theme.colors.accentColor || '#000'};
    border-radius: 5px;
    padding: 15px;
    border: 1px solid #cfcfcf;
  }

  input {
    vertical-align: middle;
  }

  input[type="checkbox"] {
    margin-right: 10px;
  }

  input::placeholder,
  textarea::placeholder {
    color: ${({ theme }) => darken(0.6, theme.colors.accentColor || '#000')};
  }

  blockquote {
    color: ${({ theme }) => lighten(0.6, theme.colors.accentColor || '#000')};
    padding-left: 20px;
    letter-spacing: -1px;
    font-style: italic;

    border-left: 4px solid
      ${({ theme }) => lighten(0.6, theme.colors.accentColor || '#000')};

    > :last-child {
      margin-bottom: 0;
    }
  }

  pre,
  code {
    font-family: Courier,
      ${({ theme }) => theme.font.family.base || 'sans-seif'};
    border-radius: 4px;
    background-color: #f6f8fa;
  }

  code {
    padding: 1px 5px;
  }

  pre {
    padding: 8px 12px;
    overflow-x: auto;

    > code {
      border: 0;
      padding-right: 0;
      padding-left: 0;
    }
  }

  table {
    margin: 20px 0;
    width: 100%;
    text-align: center;
    border-collapse: collapse;

    border: 2px solid
      ${({ theme }) => lighten(0.6, theme.colors.accentColor || '#000')};

    tr {
      &:nth-chiled(even) {
        background-color ${({ theme }) =>
          lighten(0.8, theme.colors.accentColor || '#000')};
      }
    }
    th,
    td {
      border-right: 2px solid ${({ theme }) =>
        lighten(0.6, theme.colors.accentColor || '#000')};
      padding: 5px 0;
    }
    th {
      ${({ theme }) =>
        theme.colors.accentColor &&
        css`
          color: ${theme.colors.accentColor};
          background-color: ${lighten(0.9, theme.colors.accentColor)};
          border-bottom-color: ${lighten(0.6, theme.colors.accentColor)};
        `}
    }
    td {

      border: 1px solid: ${({ theme }) =>
        lighten(0.8, theme.colors.accentColor || '#000')};
    }
  }
`;

const MdPreview = styled.div`
  width: 50%;
  height: 100%;
  padding: 20px;
  overflow-y: auto;
  ${({ theme }) =>
    theme.colors.accentColor &&
    css`
      border: 2px solid ${theme.colors.accentColor};
    `}
  ${PostContentCss}
`;

export default { MdPreview };
