import icon from './SetlystsIcon.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img style={{ width: 300, height: 300, borderRadius: 50, marginTop: '10px' }} src={icon} alt="icon" />
        <p style={{ marginBottom: '0px' }}>
          Setlysts App for iOS<br/>
          Created by Neil and Grace Bassett
        </p>
        <p>
          Contact: <a href="mailto:setlystsapp@gmail.com" style={{ color: '#E370E5' }}>
          setlystsapp@gmail.com
        </a>
        </p>
        <p style={{ marginBottom: '0px', fontSize: '20px' }}>
          Privacy policy:
        </p>
        <p style={{ maxWidth: '600px', fontSize: '16px', textAlign: 'justify', margin: '10px 10px' }}>
          Setlysts uses third-party advertising services provided by Google
          AdMob. AdMob may collect certain information about your device, such
          as your unique device identifier, IP address, and usage information,
          to provide you with interest-based ads. These ads are tailored to your
           interests based on your activity within the App and may be displayed 
          to you within the App.<br/>
          <br/>
          Beyond AdMob, Setlysts does not collect any further user information.
          Information about the shows you have attended is stored locally on
          your device and is not transmitted remotely in any way. If you have
          any questions or concerns please contact the email address above.
        </p>
      </header>
    </div>
  );
}

export default App;
