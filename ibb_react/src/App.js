import Banner from './components/banner/Banner';


const AppHead = {
  backgroundColor: '#000',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 'calc(10px + 2vmin)',
  color: 'white'
}

function App() {
  return (
    <div className="App">
      <header style={AppHead}>
        <Banner />
      </header>
    </div>
  );
}

export default App;
