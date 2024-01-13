import './global.css';

export const metadata = {
  title: '날씨 앱',
  description: '날씨를 알려드립니다',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
