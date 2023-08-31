import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { HomeBio } from "../components/bio/home";

export default function Bio() {
  return (
    <div>
      <Head>
        <title>xDuke</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width, shrink-to-fit=no"
        />
        <meta name="language" content="EN-US" />
        <meta name="author" content="XDukeHD" />
        <meta name="robots" content="index,follow,noodp,noydir" />
        <meta name="revisit-after" content="1 week" />
        <meta
          name="keywords"
          content="Buy discord bot, duke, xduke, xdukehd, xduke_br, tulio, tulio_zanella, tuliozanella, tuliozanella.com, tul, mr duke, mrduke, mrdukehd, mrduke_br"
        />
        <meta property="og:url" content="https://xduke.tech/" />
        <meta
          property="og:title"
          content="Welcome to my portfolio, view my projects and contact me."
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_br" />
        <meta
          property="og:site_name"
          content="Welcome to my portfolio, view my projects and contact me."
        />
        <meta property="og:image" content="assets/img/chocolatebear.png" />
        <meta
          property="og:description"
          content="Contact me for buy applications."
        />
        <meta
          property="og:keywords"
          content="duke, xduke, xdukehd, xduke_br, tulio, tulio_zanella, tuliozanella, tuliozanella.com, tul, mr duke, mrduke, mrdukehd, mrduke_br,"
        />
        <meta name="description" content="Contact me for buy applications." />
      </Head>
      <HomeBio />
      <script>feather.replace()</script>
      <script src="https://kit.fontawesome.com/ec2d57ba14.js"></script>
    </div>
  );
}
