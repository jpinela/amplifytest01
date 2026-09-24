
import AuthProvider from "@/app/lib/AuthProvider";


export default async function RootLayout({ children, params }) {
  const { locale } = await params;

  return (
    <html lang={locale}>
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}