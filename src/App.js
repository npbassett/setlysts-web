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
        <p style={{ maxWidth: '600px', fontSize: '16px', textAlign: 'justify', margin: '10px 10px' }}>
          The data presented in the app (show details, set lists, etc.) is obtained
          via elgoose.net's API. We'd like to thank the entire elgoose.net team
          for their work curating the data and for making this information publicly available.
        </p>
        <p style={{ marginBottom: '0px', fontSize: '20px' }}>
          Privacy policy:
        </p>
        <p style={{ maxWidth: '600px', fontSize: '16px', textAlign: 'justify', margin: '10px 10px' }}>
          Setlysts uses third-party advertising services provided by Applovin.
          Applovin may collect certain information about your device, such
          as your unique device identifier, IP address, and usage information
          to provide you with interest-based ads. These ads are tailored to your
           interests based on your activity and may be displayed 
          to you within the App. If you prefer that this information not be collected,
           please select "ask app not to track" when prompted or turn off tracking
           in System Settings > Setlysts.<br/>
          <br/>
          If you choose to create a friends account, the shows you have attended
           will be stored in a remote database. If you do NOT create an account,
           your attended shows will only be stored locally on your device. If you have
           any questions or concerns please contact the email address above.
        </p>
      </header>
    </div>
  );
}

export default App;
