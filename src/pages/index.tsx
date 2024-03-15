import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Home } from "../components/home/home";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { Projects } from "../components/home/projects";
import { About } from "../components/home/about";
import Head from "next/head";
import Bear from "../public/img/chocolatebear.png";


export default function Index() {
  return (
    <div>
      <Head>
        <title>xDuke</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width, shrink-to-fit=no" />
        <meta name="language" content="EN-US" />
        <meta name="author" content="XDuke" />
        <meta name="robots" content="index,follow,noodp,noydir" />
        <meta name="revisit-after" content="1 week" />
        <link rel="icon" href='/logo.ico' type="x-icon/icon" />
        <meta
          name="keywords"
          content="Buy discord bot, duke, xduke, xdukehd, xduke_br, tulio, tulio_zanella, tuliozanella, tuliozanella.com, tul, mr duke, mrduke, mrdukehd, mrduke_br"
        />
        <meta property="og:url" content="https://xduke.dev/" />
        <meta
          property="og:title"
          content="Hi! i'm XDuke!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_br" />
        <meta
          property="og:site_name"
          content="XDuke"
        />
        <meta property="og:image" content="../public/img/chocolatebear.png" />
        <meta
          property="og:description"
          content="This is my portfolio, feel free to browse some information about me and my projects."
        />
        <meta
          property="og:keywords"
          content="duke, xduke, xdukehd, xduke_br, tulio, tulio_zanella, tuliozanella, tuliozanella.com, tul, mr duke, mrduke, mrdukehd, mrduke_br,"
        />
        <meta name="description" content="This is my portfolio, feel free to browse some information about me and my projects." />
        <script src="../styles/bootstrap.min.js"/>
      </Head>
      <Navbar />
      <Home />
      <Projects />
      <About />
      <Footer />
      <script src="../styles/bootstrap.min.js"/>
    </div>
    
  );
}
