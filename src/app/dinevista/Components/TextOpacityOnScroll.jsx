'use client';
import { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';


export default function TextOpacityOnScroll({contain , phrase}) {

  let refs = useRef([]);
  const body = useRef(null);

  useEffect( () => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, [])

  const createAnimation = () => {
      gsap.to(refs.current, {
        scrollTrigger: {
            trigger: contain.current,
            scrub: true,
            start: `top`,
            end: `+=${window.innerHeight / 1.5}`,
        },
        opacity: 1,
        ease: "none",
        stagger: 0.1
    })
  }

  const splitWords = (phrase) => {
    let body = [];
    phrase.split(" ").forEach( (word, i) => {
      const letters = splitLetters(word);
      body.push(<p key={word + "_" + i} className=" m-0 mr-1 ">{letters}</p>)
    })
    return body
  }

  const splitLetters = (word) => {
    let letters = []
    word.split("").forEach( (letter, i) => {
      letters.push(<span key={letter + "_" + i} ref={el => {refs.current.push(el)}} className="opacity-20">{letter}</span>)
    })
    return letters;
  }

  return (
    <main className="flex flex-col h-full  items-end justify-center   text-gray-200 ">
      <div ref={body} className="flex flex-wrap ">
        {
          splitWords(phrase)
        }
      </div>
      {/* <div className="h-screen bg-green-200">hello</div> */}
    </main>
  )
}

//mb-screen h-screen