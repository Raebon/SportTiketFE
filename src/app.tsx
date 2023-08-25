import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MenuComponent } from './layout/MenuComponent';
import { PageContainer } from './layout/PageContainer';
import { RoutesComponent } from './routes/routes';
import { Toaster } from './shared/components/ui/toaster';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MenuComponent />
      <PageContainer>
        <RoutesComponent />
      </PageContainer>
      <Toaster />
    </QueryClientProvider>
  );
}
