import Navbar from '@components/Navbar';
import { AuthContexntProvider } from '@context/AuthContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Outlet } from 'react-router-dom';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContexntProvider>
        <Navbar />
        <Outlet />
      </AuthContexntProvider>
    </QueryClientProvider>
  );
}

export default App;
