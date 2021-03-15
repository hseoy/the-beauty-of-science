import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';

const Result = ({
  isRight,
  signed,
  signedButtonStr,
  signedButtonClickHandler,
}) => {
  const signInStr = isRight ? signedButtonStr.toLowerCase() : 'try again';

  const buttonClickHandler = event => {
    if (signedButtonClickHandler) {
      signedButtonClickHandler(event);
    }
  };

  return (
    <S.Wrap>
      <S.Title>{isRight ? "That's right!" : 'That’s a wrong answer'}</S.Title>
      <S.Content>
        {signed && (
          <S.SignedButton onClick={buttonClickHandler}>
            {isRight ? signedButtonStr : 'Try again'}
          </S.SignedButton>
        )}
        {!signed && (
          <S.SignInLink to="/signin">{`Sign in and ${signInStr}`}</S.SignInLink>
        )}
      </S.Content>
    </S.Wrap>
  );
};

Result.propTypes = {
  isRight: PropTypes.bool,
  signed: PropTypes.bool,
  signedButtonStr: PropTypes.string,
  signedButtonClickHandler: PropTypes.func,
};

Result.defaultProps = {
  isRight: false,
  signed: false,
  signedButtonStr: 'Good job!',
  signedButtonClickHandler: null,
};

export default Result;
