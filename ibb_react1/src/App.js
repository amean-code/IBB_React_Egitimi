import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          IBB React Eğitimi
        </p>
        <a
          className="App-link"
          href="https://www.ameandanismanlik.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          AMEAN DANIŞMANLIK
        </a>
      </header>

      <iframe title="Harita"  width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%C3%9Csk%C3%BCdar%20%C4%B0%C3%A7erenk%C3%B6y%20Yolu%20Cad.%20Bodur%20%C4%B0%C5%9F+(Platin%20Hukuk%20B%C3%BCrosu)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">measure distance on map</a></iframe>
    </div>
  );
}

export default App;
