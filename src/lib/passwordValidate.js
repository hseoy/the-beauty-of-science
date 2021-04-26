import PasswordValidator from 'password-validator';

const passwordSchema = new PasswordValidator();

passwordSchema
  .is()
  .min(8) // Minimum length 8
  .is()
  .max(100) // Maximum length 100
  .has()
  .uppercase() // Must have uppercase letters
  .has()
  .lowercase() // Must have lowercase letters
  .has()
  .symbols(2) // Must have at least 2 symbols
  .has()
  .not()
  .spaces(); // Should not have spaces

const passwordValidate = pw => {
  return passwordSchema.validate(pw);
};

export default passwordValidate;
