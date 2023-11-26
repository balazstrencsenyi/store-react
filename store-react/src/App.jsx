import './App.css';
import Header from './components/Header';
import renderHomePage from './components/renderHomePage';
import SignIn from './components/handleSignIn';
import SignUp from './components/handleSignUp';
import AuthDetails from './components/AuthDetails';

function App() {
  return (
    <div className="App" style={{ fontFamily: 'Roboto, sans-serif' }}>
      <Header />
      {renderHomePage()}
      <SignUp/>
      <SignIn/>
      <AuthDetails/>
    </div>
  );
}

export default App;
