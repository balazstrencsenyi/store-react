import './App.css';
import Header from './components/Header';
import renderHomePage from './components/renderHomePage';

function App() {
  return (
    <div className="App" style={{ fontFamily: 'Roboto, sans-serif' }}>
      <Header />
      {renderHomePage()}
    </div>
  );
}

export default App;
