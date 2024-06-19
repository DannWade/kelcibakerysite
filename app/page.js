'use client'; //all components are server components on Next 13. Must use this to convert to client component
import Image from 'next/image'
import macaron from "../public/images/1.JPG"
import kelci from "../public/images/2.JPG"
import Gallery from './gallery'
import Counter from '../public/images/5.JPG'
import flowerMacs from '../public/images/6.JPG'
import { useState } from 'react';
import { ContactUs } from './ContactUs';
import {Parallax, ParallaxLayer} from '@react-spring/parallax'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheese, faCircleArrowRight, faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";


export default function Page({
  params,
  searchParams,
}) {
    const [index, setIndex] = useState(0);
    function handleIncrement(e){
    e.preventDefault();
    setIndex(index+1)
    }
    function handleDecrement(e){
    e.preventDefault();
    setIndex(index-1)
    }
  return( 
  <>
  <section>
    <div class="lg:mt-5 mb-0 lg:mb-20 flex flex-col lg:flex-row p-10">
      <Image class="self-center w-3/4 lg:w-1/2 ml-5 p-2 lg:p-10 origin-bottom -rotate-6 bg-gradient-to-tr from-amber-100 to-miamiOrange" src={macaron} alt='macaron' />
      <h1 class="text-6xl lg:text-9xl font-serif mt-10 lg:mt-0">Welcome to Kelci&apos;s Bakery</h1>
    </div>
    <ol class="mb-20 flex flex-row justify-center space-x-5">
        <FontAwesomeIcon icon={faCheese} size="2xl" style={{color: '#0f4953',opacity: 0.2}}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faCheese} size="2xl" style={{color: '#CBF5EF',opacity: 1}}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faCheese} size="2xl" style={{color: '#FFCFD2',opacity: 1}}></FontAwesomeIcon>
        {/* <i class="fa-solid fa-cheese fa-2x opacity-20" style={{color: '#0f4953',}} ></i>
        <i class="fa-solid fa-cheese fa-2x opacity-100" style={{color: '#CBF5EF',}} ></i>
        <i class="fa-solid fa-cheese fa-2x opacity-100" style={{color: '#FFCFD2',}} ></i> */}
    </ol>
    {/* <div class="flex justify-center m-3 lg:h-20">
      <button onClick={() => {
        const element = document.getElementById("portfolio");
        element.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
      }}>
        <i class="fa-solid fa-circle-arrow-down fa-2x lg:fa-3x animate-bounce" style={{color: '#0F4953',}} ></i>
      </button>
    </div> */}
  </section>
  <section class="h-2000">
    <Image class="opacity-50" src={window.innerWidth < 400 ? flowerMacs : Counter} alt='counter'/>
  </section>
  <ParallaxLayer offset={window.innerWidth < 400 ? 1 : 1.9} speed={1} factor={1} style={{opacity:1}}>
  <section class="flex flex-col p-10 lg:p-20 bg-miamiGreen" id="kelcibio">
    <Image class="self-center w-9/12 lg:w-1/2 p-2 lg:p-10 bg-miamiOrange" src={kelci} alt='kelci'></Image>
      <div class="lg:flex lg:flex-col justify-center">
        <h2 class="m-2 text-base lg:text-2xl text-center text-miamiWhite">About The Baker</h2>
        <p class="m-2 text-sm lg:text-xl text-miamiWhite">Hello, my name is Kelci! I am a professional baker with 5 years experience. I love seeing the excitement that comes from great tasting, beutiful pastries but more than that is knowing it is an experience shared with others. </p>
        <p class="m-2 text-sm lg:text-xl text-miamiWhite">I believe food brings people and is a source of happiness. I aspire to share good food and good memories with as many people as possible. I love to make cakes and pastries that are simple but elegant - something you want to go back or more of. Baking is a small way to make people smile.</p>
      </div>
  </section>
  </ParallaxLayer>
  <ParallaxLayer offset={window.innerWidth < 400 ? 2.7 : 2.5} factor={1/12} speed={2.5}>
    <section>
      <i class="fa-solid fa-cheese fa-3x ml-80 opacity-30" style={{color: '#0f4953',}} ></i>
    </section>
  </ParallaxLayer>
  <ParallaxLayer offset={window.innerWidth < 400 ? 2.7 : 2.5} factor={1/12} speed={1.5}>
    <section>
      <i class="fa-solid fa-cheese fa-3x ml-20 opacity-30" style={{color: '#F98E6E',}} ></i>
    </section>
  </ParallaxLayer>
  <section class="flex justify-center mt-20 mb-20 lg:m-20" id="portfolio">
    <div>
      <div class="flex justify-center">
          <button onClick={handleDecrement} class="m-2">
          <FontAwesomeIcon icon={faCircleArrowLeft} size="3x" style={{color: '#0F4953',}}></FontAwesomeIcon>
            {/* <i class="fa-solid fa-circle-arrow-left fa-3x" style={{color: '#0F4953',}} ></i> */}
          </button>
        <Gallery position={index}></Gallery>
        <button onClick={handleIncrement} class="m-2">
        <FontAwesomeIcon icon={faCircleArrowRight} size="3x" style={{color: '#0F4953',}}></FontAwesomeIcon>
          {/* <i class="fa-solid fa-circle-arrow-right fa-3x" style={{color: '#0F4953',}} ></i> */}
        </button>
      </div>
    </div>
  </section>
  <section class="mt-20 mb-20 p-2 lg:p-20 flex justify-center" id="contact">
    <div class="bg-miamiOrange w-11/12 lg:w-1/2 p-10">
      <h2 class="flex justify-center text-3xl">Contact Me!</h2>
      <ContactUs></ContactUs>
    </div>
  </section>
  </>
  )
}