import Head from "next/head";
import React from "react";

import Layout from "../components/layout";
import Login from "../components/login";

export default function Home() {
  // const inputFields = [
  //   {
  //     type: "text",
  //     props: {
  //       required: true,
  //       label: "Email",
  //       key: "email",
  //     },
  //   },
  //   {
  //     type: "text",
  //     props: {
  //       required: true,
  //       label: "Password",
  //       type: "password",
  //       autoComplete: "current-password",
  //       key: "password",
  //     },
  //   },
  //   {
  //     type: "button",
  //     props: {
  //       variant: "contained",
  //       color: "primary",
  //       children: "Disable elevation",
  //       key: "submit",
  //     },
  //   },
  // ];

  return (
    <Layout>
      <Head>
        <title>Top Exercise</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="container-index">
        {/* <Form inputFields={inputFields} /> */}
        <Login />
      </section>
    </Layout>
  );
}
