import PasswordValidator from './components/PasswordValidator';

/*
Custom style example
<PasswordValidator
      options={[
        'specialChar',
        'number',
        'uppercaseLetter',
        'noConsecutiveLetters',
      ]}
      customStyle={{
        errorColor: 'blue',
        circleSize: 50,
        fontFamily: 'arial'
      }}
    />

*/

function App() {
  return (
    <div style={styles.main}>
     <PasswordValidator
      options={[
        'specialChar',
        'number',
        'uppercaseLetter',
        'noConsecutiveLetters',
      ]}
    />
    </div>
  );
}


const styles = {
  main: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh'
  }
}

export default App;
