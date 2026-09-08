import { Outlet } from 'react-router-dom';
import Navbar from '../common/Navbar';
import Sidebar from '../common/Sidebar';

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Ambient Background Effect */}
      <div className="ambient-background" />

      {/* Navigation */}
      <Navbar />
      <Sidebar />

      {/* Main Content */}
      <main className="pt-16 lg:pt-16 lg:ml-64 min-h-screen relative z-10">
        <Outlet />
      </main>

      {/* Mobile Bottom Spacer */}
      <div className="md:hidden h-16" />
    </div>
  );
};

export default MainLayout;
