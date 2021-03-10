import React from 'react';
import PropTypes from 'prop-types';
import S from './style';

const PostCard = ({ thumbnailImage, date, title, author }) => {
  return (
    <S.Wrap>
      <S.ThumbnailWrap>
        <S.ThumbnailImage bgImage={thumbnailImage} />
        <S.Info>
          <p>{date}</p>
          <S.InfoTitle>{title}</S.InfoTitle>
        </S.Info>
      </S.ThumbnailWrap>
      <S.Author>
        <S.AuthorLevel>{author.level}</S.AuthorLevel>
        <S.AuthorName>{author.name}</S.AuthorName>
      </S.Author>
    </S.Wrap>
  );
};

PostCard.propTypes = {
  thumbnailImage: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.shape({
    name: PropTypes.string,
    level: PropTypes.string,
  }),
};

PostCard.defaultProps = {
  thumbnailImage: '',
  date: '',
  title: '',
  author: {
    name: '',
    level: '',
  },
};

export default PostCard;
