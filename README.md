# PasswordValidator Component

The `PasswordValidator` component is a React utility for password validation that allows you to check if a password meets certain requirements, such as containing numbers, special characters, uppercase letters, and not having consecutive letters.

## Installation

**yarn install**

**yarn start**

## Usage

```javascript
import React from 'react';
import PasswordValidator from 'password-validator-component';

function App() {
  return (
    <div>
      <h1>User Registration</h1>
      <PasswordValidator
        options={[
          'number',
          'specialChar',
          'uppercaseLetter',
          'noConsecutiveLetters',
        ]}
        customStyle={{}}
      />
    </div>
  );
}

export default App;
```

## Props

The **PasswordValidator** component accepts the following props:

- options (array): An array of options specifying which requirements the password must meet. Available options are 'number', 'specialChar', 'uppercaseLetter', 'noConsecutiveLetters'. For example, options={['number', 'specialChar']} will require the password to have at least one number and one special character.

- customStyle (object): An object that allows you to customize the component's styles. You can customize the font, font size, and error color.

## Test

Run the test with:

**yarn test**
