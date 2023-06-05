import Navbar from '@components/Navbar';
import { AuthContexntProvider } from '@components/context/AuthContext';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <AuthContexntProvider>
        <Navbar />
      </AuthContexntProvider>
      <Outlet />
    </>
  );
}

export default App;
