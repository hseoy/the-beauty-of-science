import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import QuizItemAnswers from './QuizItemAnswers';

const QuizItemTemplate = ({ children, quiz, selected, onSelectAnswer }) => {
  const { author, title, answers } = quiz;

  return (
    <QuizItemTemplateBlock>
      <div className="author">{author}</div>
      <div className="content">
        <h3 className="title">{title}</h3>
        <div className="body">
          {selected ? (
            children
          ) : (
            <QuizItemAnswers
              answerList={answers}
              onAnswerClick={onSelectAnswer}
            />
          )}
        </div>
      </div>
    </QuizItemTemplateBlock>
  );
};

QuizItemTemplate.propTypes = {
  children: PropTypes.node,
  quiz: PropTypes.shape({
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  selected: PropTypes.bool,
  onSelectAnswer: PropTypes.func,
};

QuizItemTemplate.defaultProps = {
  children: null,
  selected: false,
  onSelectAnswer: null,
};

const QuizItemTemplateBlock = styled.div`
  width: 100%;
  height: 14.75rem;
  text-align: center;
  position: relative;

  > .author {
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: ${({ theme }) => theme.font.family.accent || 'sans-seif'};
  }

  > .content {
    height: 90%;
    display: flex;
    flex-direction: column;
    position: relative;

    > .title {
      padding: 10px 0;
      font-size: 20px;
      background-color: ${({ theme }) => theme.colors.primaryColor || '#fff'};
      border: 3px solid ${({ theme }) => theme.colors.accentColor || '#000'};
      border-radius: 10px;
      font-family: ${({ theme }) => theme.font.family.accent || 'sans-seif'};
    }

    > .body {
      width: 100%;
      height: 100%;
      overflow-y: auto;
      position: relative;
    }
  }
`;

export default QuizItemTemplate;
