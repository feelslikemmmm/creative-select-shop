import Navbar from '@components/Navbar';
import { AuthContexntProvider } from '@components/context/AuthContext';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <AuthContexntProvider>
        <Navbar />
        <Outlet />
      </AuthContexntProvider>
    </>
  );
}

export default App;
