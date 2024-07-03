// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={process.env.PUBLIC_URL + '/collegeLogo.png'} alt="Decorative" className="App-logo" />

        <p className="title">
          react לומדת
        </p>
      </header>
    </div>
  );
}

export default App;
