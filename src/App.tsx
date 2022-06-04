import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './route/Routes';
import { UserProvider } from './context/UserContext';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
const queryClient = new QueryClient();
function App() {
  return (
    <Router>
      <UserProvider>
        <QueryClientProvider client={queryClient}>
          <Routes></Routes>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </UserProvider>
    </Router>
  );
}

export default App;
