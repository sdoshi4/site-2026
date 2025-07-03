import { Doppio_One, Montserrat } from "next/font/google";
import { Fragment } from "react";
import "../styles/globals.css";
import BasicApp from "../layouts/BasicApp";
import "../styles/animations.css";
import "../styles/index.css";
import NextAdapterApp from "next-query-params/app";
import { QueryParamProvider } from "use-query-params";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const doppioOne = Doppio_One({
  weight: "400",
  variable: "--font-doppio",
  subsets: ["latin"],
});

function EOHApp(props) {
  return (
    <Fragment>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
      {/* <link
        href="https://fonts.googleapis.com/css2?family=Tourney:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Tourney:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      ></link>

      <link
      href="https://fonts.googleapis.com/css2?family=Lovelo:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
      rel="stylesheet"
    ></link> */}
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet"
      ></link>
      <main
        className={`${montserrat.variable} ${doppioOne.variable} font-sans`}
      >
        <QueryParamProvider adapter={NextAdapterApp}>
          <BasicApp {...props} />
        </QueryParamProvider>
      </main>
    </Fragment>
  );
}

export default EOHApp;
