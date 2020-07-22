import Head from "next/head";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      {children}
    </div>
  );
}

export default Layout;
