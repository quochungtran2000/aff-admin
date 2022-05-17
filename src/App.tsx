import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './route/Routes';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <Router>
      <UserProvider>
        <Routes></Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
