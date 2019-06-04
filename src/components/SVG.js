import React from 'react';
import anime from 'animejs';
import '../sass/svg.scss';

const SVG = () => {
  let box = (
    <section>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </section>
  );
  //   const boxes = () => {
  //     let box = (
  //       <section>
  //         <div />
  //         <div />
  //         <div />
  //         <div />
  //         <div />
  //         <div />
  //         <div />
  //         <div />
  //         <div />
  //         <div />
  //       </section>
  //     );

  //   let tl = anime.timeline({
  //     easing: 'easeOutExpo',
  //     duration: 750
  //   });

  //     tl.add({
  //       targets: ' div',
  //       backgroundColor: 'rgb(197, 197, 255)'
  //     });
  //   };

  return (
    <div>
      <h1>Design for Grid</h1>
      <section>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </section>
    </div>
  );
};

export default SVG;
