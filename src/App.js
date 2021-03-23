import React, { useEffect } from 'react';
import PassphraseGenerator from './lib/PassphraseGenerator';

const passGen = new PassphraseGenerator();


const App = () => {
    const [password, setPassword] = React.useState('');

    useEffect(() => {
        const getPassword = async () => {
            const pass = await passGen.generatePassphrase();
            console.log(pass);
            setPassword(pass);
        };
        getPassword();
    }, []);

    return (
        <div className="App">
            <p>Your Secure Password is:</p>
            <br />
            <h3>{password}</h3>
        </div>
    );
};

export default App;
