import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import BottomMenu from '../uselayouts/BottomMenu';
import { FollowCursor } from '../creative/FollowCursor';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <FollowCursor />
      {/* <Header /> */}

      <main className="flex-1">
        {children}
      </main>

      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <BottomMenu />
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
