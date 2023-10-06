import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MenuComponent } from './layout/MenuComponent';
import { PageContainer } from './layout/PageContainer';
import { RoutesComponent } from './routes/routes';
import { Toaster } from './shared/components/ui/toaster';
import { AuthProvider } from './shared/context/AuthContext';
import { useEffect } from 'react';
import { service } from './shared/service/service';

const queryClient = new QueryClient();

export default function App() {
  useEffect(() => {
    async function fetchData() {
      await service.auth.reload();
      await service.arbitrage.reload();
    }
    
    return () => {
      fetchData();
    }
  }, [])
  
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <MenuComponent />
        <PageContainer>
          <RoutesComponent />
        </PageContainer>
        <Toaster />
      </AuthProvider>
    </QueryClientProvider>
  );
}
