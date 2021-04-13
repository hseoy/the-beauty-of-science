import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PostCard = ({ thumbnailImage, date, title, author }) => {
  return (
    <PostCardBlock>
      <div className="thumbnail">
        <img src={thumbnailImage} alt="thumbnail" />
        <div className="info">
          <p className="info-date">{date}</p>
          <h3 className="info-title">{title}</h3>
        </div>
      </div>
      <div className="author">
        <div className="author-level">{author.level}</div>
        <div className="author-name">{author.name}</div>
      </div>
    </PostCardBlock>
  );
};

PostCard.propTypes = {
  thumbnailImage: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
  }).isRequired,
};

PostCard.defaultProps = {
  thumbnailImage: '',
  date: '',
  title: '',
};

const PostCardBlock = styled.div`
  display: inline-block;
  width: 250px;
  padding: 15px;
  margin: 10px;
  background-color: ${({ theme }) => theme.colors.primaryColor || '#fff'};
  overflow: hidden;

  > .thumbnail {
    position: relative;
    width: 220px;
    height: 220px;

    > img {
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
    }

    > .info {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      background-color: rgba(0, 0, 0, 0.7);
      color: #fff;

      > .info-title {
        word-break: break-all;
        padding: 0 20px;
        text-align: center;
      }
    }
  }

  > .author {
    padding-top: 10px;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;

    > .author-level {
      box-sizing: border-box;
      width: 100%;
      text-align: center;
      border: 3px solid ${({ theme }) => theme.colors.accentColor || '#000'};
      font-family: ${({ theme }) => theme.font.family.special || 'sans-seif'};
    }

    > .author-name {
      width: 100%;
      padding: 3px 0;
      text-align: center;
      font-family: ${({ theme }) => theme.font.family.accent || 'sans-seif'};
    }
  }
`;
