import type { Metadata } from 'next';
import { Red_Hat_Display } from 'next/font/google';
import './globals.css';
import { Gradient } from '@/components/svgs/gradient';
import { Overlay } from '@/components/shared/overlay';

const red_hat_display = Red_Hat_Display({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Builder | Elora',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <link rel="shortcut icon" sizes="any" href="/favicon.svg" type="image/svg+xml" />
      <body className={red_hat_display.className}>
        <div className="__gradient fixed inset-0 inset-x-0 inset-y-0 pointer-events-none">
          <div className="animate-gradient-move absolute inset-0">
            <Gradient className="transform-gpu -translate-y-[5%] -translate-x-[5%] scale-110"></Gradient>
          </div>
        </div>
        <Overlay></Overlay>
        {children}
      </body>
    </html>
  );
}
