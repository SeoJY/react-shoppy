import Navbar from './components/Navbar';
import { Outlet } from 'react-router';
import { AuthContextProvider } from './context/AuthContext';

function App() {
  return (
    <AuthContextProvider>
      <Navbar />
      <div id='container'>
        <Outlet />
      </div>
    </AuthContextProvider>
  );
}

export default App;
