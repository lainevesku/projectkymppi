import { render, screen } from '@testing-library/react';
import { FirebaseAppProvider } from 'reactfire';
import 'firebase/auth';
import Startup from './startup';

test('renders Startup page', () => {
    const firebaseConfig = {
        apiKey: process.env.REACT_APP_APIKEY ,
        authDomain: process.env.REACT_APP_AUTHDOMAIN ,
        projectId: process.env.REACT_APP_PROJECTID ,
        storageBucket: process.env.REACT_APP_STORAGEBUCKET ,
        messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID ,
        appId: process.env.REACT_APP_APPID ,
        measurementId: process.env.REACT_APP_MEASUREMENTID
      };

  render(<FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Startup />
    </FirebaseAppProvider>);
    const startuptext = screen.getByText(/Tervetuloa käyttämään La'Pete -sovellusta./i);
    expect(startuptext).toBeInTheDocument();
    const kirjaudu = screen.getByText(/Kirjaudu sisään/i);
    expect(kirjaudu).toBeInTheDocument();
});