import './css/App.css';
import Navbar from './components/Navbar.tsx';
import {lazy, Suspense} from 'react';
import Loading from './components/Loading.tsx';
import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient();
const ProfileArea = lazy(()=>import('./components/ProfileArea.tsx'));

function App() {

  return (
    <div>
      <Navbar title={'프로필 목록'} />
      <QueryClientProvider client={queryClient}>
        <div className='profile'>
          <Suspense fallback={<Loading />}>
            <ProfileArea />
          </Suspense>
        </div>
      </QueryClientProvider>
    </div>
  );
}

export default App;
