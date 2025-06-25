import { Fragment } from "react";
import Head from "next/head";

export default function Content({ title, metaTitle, children, wide }) {
  return (
    <Fragment>
      <Head>
        <title>{metaTitle || title}</title>
        <link rel="icon" href="/favicon_black_outline.ico" />
      </Head>
      <main className={`text-center flex flex-col justify-center w-10/12 ${wide ? "lg:max-w-7xl" : "lg:max-w-4xl"} mx-auto mt-36 lg:mt-32`}>
        {title &&
          <h1
            className="font-montserrat text-3xl md:text-4xl lg:text-5xl mb-5 md:mb-8 lg:mb-10 text-center text-white font-bold hero-text tracking-widest p-2"
            style={{ fontFamily: 'Glacial Indifference' }}
          >
            {title}
          </h1>}
        {children}
      </main>
    </Fragment>
  );
}
