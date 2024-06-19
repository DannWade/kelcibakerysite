'use client';
import emailjs from '@emailjs/browser';
import './globals.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import React, { useState, useEffect, useRef} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, } from "@fortawesome/free-solid-svg-icons";


export default function RootLayout({
  children,
  params,
}) {
  const [sitePages, setWidth] = useState(0);
  const pageRef= useRef({}); //useRef hook allows values to persist between renders
  pageRef.current = sitePages != 0 ? sitePages: ''; //prevents sitePages from resetting to 0 after several renders
  useEffect(() => { //this effect set the size of the page for the parallax component depending on screen size
    setWidth(window.innerWidth < 400 ? 4.2 : 5.2) //determines the state of sitePages depending on the width of the window
},[sitePages]);
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
        {/*below - synchronus scripts should not be used at production(import fontawsome instead */}
        {/* <script src="https://kit.fontawesome.com/6b8a3dd54a.js" crossOrigin="anonymous"></script> */} 
      </head>
      <body>
        <Parallax pages={pageRef}>
        <header class="h-15">
          <ol class="flex flex-row justify-around">
            <h2 class='font-medium text-2xl text-miamiTeal font-serif'>Cakes</h2>
            <h2 class='font-medium text-2xl text-miamiTeal font-serif'>Macarons</h2>
            <h2 class='font-medium text-2xl text-miamiTeal font-serif'>Custom</h2>
          </ol>
          {/* <ol class="flex flex-1 justify-between items-center"> // these are ribbon buttons for fast scolling (do not work well using parallax)
            <div class="m-3">
              <h1 class="font-serif text-3xl"></h1>
            </div>
            <div class="flex">
              <button onClick={() => {
                const element = document.getElementById("portfolio");
                element.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
                }}><h3 class="hover:bg-amber-100 border-2 rounded border-amber-200 m-3 p-1 text-xl">Portfolio</h3></button>
              <button onClick={() => {
                const element = document.getElementById("kelcibio");
                element.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
                }}><h3 class="hover:bg-amber-100 border-2 rounded border-amber-200 m-3 p-1 text-xl">About</h3></button>
              <button onClick={() => {
                const element = document.getElementById("contact");
                element.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
                }}><h3 class="hover:bg-amber-100 border-2 rounded border-amber-200 m-3 p-1 text-xl">Let's Bake!</h3></button>
            </div>
          </ol> */}
        </header>
        <main>
          {children}
        </main> 
        <footer class="bg-miamiGreen p-5">
          <div>
            <div class="flex flex-col m-5 font-serif">
              <h1 class="text-center my-1 text-white">Cakes By Kelci</h1>
              <h2 class="text-center text-white">Mixing Up Life</h2>
            </div>
            <div class="flex flex-row justify-center">
            <ul class="flex flex-col mx-8">
              <li class="text-center text-white"><i class="fa-regular"></i></li>
              <a href='https://www.instagram.com/kwade_17/'><li class="text-center text-white"><i class="fa-brands fa-instagram"></i> Instagram</li></a>
              <a href='https://github.com/DannWade'><li class="text-center text-white"><i class="fa-brands fa-github"></i> GitHub</li></a>
              <a href='https://www.linkedin.com/in/kelci-brizzee-wade-889736254/'><li class="text-center text-white"><i class="fa-brands fa-linkedin"></i> LinkdIn</li></a>
            </ul> 
            <ul class="mx-8">
              <li class="text-center text-white">Powered by:</li>
              <li class="text-center text-white">React</li>
              <li class="text-center text-white">Next.js</li>
              <li class="text-center text-white">TailwindCSS</li>
            </ul>
            </div>
          </div>
        </footer> 
        </Parallax>
      </body>
    </html>
  )
}
