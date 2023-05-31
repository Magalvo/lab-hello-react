import logo from './logo.svg';
import './App.css';
import Lottie from 'lottie-react';
import animationData from './assets/imgs/reactJSON.json';

const ironLogo =
  'https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png';

const ironSandes =
  'https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-top-xs.png';

const ico1 =
  'https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png';
const ico2 =
  'https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png';
const ico3 =
  'https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png';
const ico4 =
  'https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png';

function App() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className="body">
      <nav className="nava">
        <img
          src={ironLogo}
          style={{ width: '50px', height: '50px', padding: '50px' }}
        ></img>

        <img
          src={ironSandes}
          style={{ width: '30px', height: '20px', padding: '30px' }}
        ></img>
      </nav>
      <div className="App">
        <div className="text">
          <h1 className="title">Say Hello to ReacJS</h1>
          <p>
            You Will learn how to use<br></br> the most popular front-end
            library, <br></br>and become a superninja developer
          </p>
        </div>

        <button className="button">Awesome!</button>

        <header className="App-header"></header>
      </div>

      <div className="animation" style={{ height: '600px', width: '600px' }}>
        <Lottie
          options={defaultOptions}
          animationData={animationData}
          height={600}
          width={600}
        />
      </div>

      <div className="out">
        <div className="imageCard">
          <img
            src={ico1}
            style={{ width: '100px', height: '100px', padding: '30px' }}
          ></img>
          <h1>Declarative</h1>
          <br />
          <p className="pees">
            React Makes It Painless to Create interative UIs
          </p>
        </div>

        <div className="imageCard">
          <img
            src={ico2}
            style={{ width: '100px', height: '100px', padding: '30px' }}
          ></img>
          <h1>Components</h1>
          <br />
          <p className="pees">
            {' '}
            Build Encapsulated Components that manage their state
          </p>
        </div>

        <div className="imageCard">
          <img
            src={ico3}
            style={{ width: '100px', height: '100px', padding: '30px' }}
          ></img>
          <h1>Single-Way</h1>
          <br />
          <p className="pees">
            A set of imutable values are set to the component's
          </p>
        </div>

        <div className="imageCard">
          <img
            src={ico4}
            style={{ width: '100px', height: '100px', padding: '30px' }}
          ></img>
          <h1>JSX</h1>
          <br />
          <p className="pees">
            Staticly-typed designed to run on modern browsers
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
