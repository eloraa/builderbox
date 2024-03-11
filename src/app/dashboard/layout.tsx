import { type Metadata } from 'next';
import { Header } from '../../components/shared/header';

export const metadata: Metadata = {
  title: 'Dashboard | Elora',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
