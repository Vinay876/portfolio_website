import React from 'react'
import './scroll.css'
import css from "../../assets/Skills/css-3.png"
import react from "../../assets/Skills/atom.png"
import html from "../../assets/Skills/html-5.png"
import express from "../../assets/Skills/express.png"
import js from "../../assets/Skills/js.png"
import sass from "../../assets/Skills/sass.png"
const images = [
  js,
  css,
  react,
  html,
  express,
  sass,
];

const Scroll = () => {

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        // minHeight: '100vh',
        alignItems: 'center',
      }}
      className="FirstDiv"
    >
      {/* 1. */}
      <div
        className="SecondDiv"
        style={{
          width: '40%',
          height: '12rem',
          // marginTop: '23%',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {/* 2. */}
        <div
          style={{
            marginTop: '25px',
            width: '100%',
            height: '5rem',
            position: 'absolute',
            boxShadow: '10px 10px 10px 0.5',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            left: 0,
            gap: '10rem',
          }}
          className=" animate"
        >
          {/* 3 */}
          {images.map((i) => {
            return (
              <div
                style={{
                  width: '20rem',
                }}
              >
                <img src={i} style={{ width: '80px', height: '10rem' }} />
              </div>
            );
          })}
          {images.map((i) => {
            return (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  width: '20rem',
                }}
                className="flex justify-center items-start w-[20rem]"
              >
                <img src={i} style={{ width: '80px', height: '10rem' }} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Scroll
