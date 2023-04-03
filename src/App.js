import Navbar from './components/Navbar';
import { Outlet } from 'react-router';
import { AuthContextProvider } from './context/AuthContext';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <Navbar />
        <div id='container'>
          <Outlet />
        </div>
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
