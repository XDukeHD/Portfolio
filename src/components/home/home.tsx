import React from "react";
import { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import Bear from "../../public/img/chocolatebear.png";
import { 
    FaStar,
    FaStarHalfAlt,
 } from 'react-icons/fa'

export function Home() {
    return (
    <section id="page-top" className="text-center text-white masthead bg-black"> 
      <div className="container">
        <Image
          className="rounded-circle img-fluid d-block mx-auto mb-5"
          src={Bear}
          width={302}
          height={302}
          alt="Chocolate Bear"
        />
        <h1 style={{font: "normal normal bold 5rem/3.5rem Borel", color: "#fff"}}>
            xDUKE</h1>
        <hr className="star-light"/>
        <div className="rating color-purple font-weight-bold">
        <small className="color-purple" style={{fontSize: "1.3rem", color: "#fff"}}>
         Software Developer - Cloud Engineer
        </small>
        </div>

      </div>
    </section>
    );
}