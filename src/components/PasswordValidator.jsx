import React, { useState } from 'react';

const PasswordValidator = ({ options, customStyle }) => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
    },
    passwordContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: 20,
    },
    field: {
      height: 15,
    },
    errorBox: {
      display: 'flex',
      gap: 10,
      margin: 5,
      alignItems: 'center',
      fontFamily: customStyle?.fontFamily || 'helvetica',
      fontSize: customStyle?.fontSize || 'inherit',
    },
    xmark: {
      height: 40,
      width: 40,
      borderRadius: 100,
      backgroundColor: customStyle?.errorColor || 'red',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  };

  const requirementData = {
    specialChar: {
      pattern: /[\s!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/,
      errorMessage: 'Must have one or more of these special characters: !@#$%^&*',
    },
    number: {
      pattern: /\d/,
      errorMessage: 'Must have a number (0-9)',
    },
    uppercaseLetter: {
      pattern: /[A-Z]/,
      errorMessage: 'Must contain at least one uppercase letter',
    },
    noConsecutiveLetters: {
      pattern: /[a-z]{3,}|[A-Z]{3,}|\d{3,}/,
      errorMessage: 'Must NOT have consecutive letters',
    },
  };

  const [validationErrors, setValidationErrors] = useState([]);

  const handleChange = (value) => {
    const additionalErrors = [];

    if (!value) {
      additionalErrors.push('Password is required');
    } else {
      if (options.includes('number') && !requirementData.number.pattern.test(value)) {
        additionalErrors.push(requirementData.number.errorMessage);
      }
      if (options.includes('specialChar') && !requirementData.specialChar.pattern.test(value)) {
        additionalErrors.push(requirementData.specialChar.errorMessage);
      }

      if (options.includes('uppercaseLetter') && !requirementData.uppercaseLetter.pattern.test(value)) {
        additionalErrors.push(requirementData.uppercaseLetter.errorMessage);
      }

      if (options.includes('noConsecutiveLetters') && requirementData.noConsecutiveLetters.pattern.test(value)) {
        additionalErrors.push(requirementData.noConsecutiveLetters.errorMessage);
      }
    }

    setValidationErrors(additionalErrors);
  };

  return (
    <div style={styles.container}>
      <h1>Password Component</h1>
      <div style={styles.passwordContainer}>
        <div style={styles.field}>
          <input
            type="password"
            placeholder="Enter your password"
            onChange={(e) => handleChange(e.target.value)}
            data-testid="password-input"
          />
        </div>
        <div>
          {validationErrors.map((error, index) => (
            <div key={index} style={styles.errorBox}>
              <div style={styles.xmark} data-testid="error-xmark">X</div>
              <span data-testid="error-message">{error}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PasswordValidator;
