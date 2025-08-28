import { Outlet } from 'react-router-dom';
import Header from '@/shared/components/organisms/Header';
import Footer from '@/shared/components/organisms/Footer';

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}