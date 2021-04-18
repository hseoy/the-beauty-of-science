import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PostCard from 'components/post/PostCard';
import Slider from 'components/common/Slider';
import HomeElement from './HomeElement';

const PopularPosts = ({ posts }) => {
  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    pauseOnDotsHover: true,
    speed: 800,
    autoplaySpeed: 2500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  const postItems = posts.map(post => (
    <div className="popular-post" key={post.id}>
      <PostCardLink to={`/post/${post.title}`}>
        <PostCard
          thumbnailImage={post.thumbnailImage}
          date={post.date}
          title={post.title}
          author={post.author}
        />
      </PostCardLink>
    </div>
  ));

  return (
    <HomeElement
      maintitle="Popular Posts"
      subtitle="You are gonna love this"
      width="100%"
    >
      <PopularPostsBlock>
        <Slider {...sliderSettings}>{postItems}</Slider>
      </PopularPostsBlock>
    </HomeElement>
  );
};

PopularPosts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      thumbnailImage: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.shape({
        name: PropTypes.string.isRequired,
        level: PropTypes.string.isRequired,
      }).isRequired,
    }),
  ),
};

PopularPosts.defaultProps = {
  posts: [],
};

const PopularPostsBlock = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  .popular-post {
    width: 100%;
    height: 100%;
    position: relative;
    text-align: center;
  }
`;

const PostCardLink = styled(Link)`
  display: inline-block;
`;

export default PopularPosts;
