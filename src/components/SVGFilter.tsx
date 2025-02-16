// function SVGFilter() {
//   return (
//     <svg className="w-0 h-0">
//       <defs>
//         {Array.from({ length: 5 }).map((_, i) => (
//           <filter key={i} id={`squiggle-${i}`}>
//             <feTurbulence
//               type="turbulence"
//               // baseFrequency={0.1}
//               seed={i}
//               // numOctaves={5}
//               result="noise"
//               baseFrequency="0.05"
//               id="turbulence"
//               numOctaves="2"
//               // result="noise"
//               // seed={index}
//             ></feTurbulence>
//             <feDisplacementMap
//               // in="SourceGraphic"
//               // in2="noise"
//               // scale={5}
//               id="displacement"
//               in2="noise"
//               in="SourceGraphic"
//               scale="4"
//             ></feDisplacementMap>
//           </filter>
//         ))}
//       </defs>
//     </svg>
//   );
// }

export function SVGFilters() {
  return (
    <svg className="h-0 w-0">
      <defs>
        {Array.from({ length: 5 }).map((_, index) => (
          <filter id={`squiggle-${index}`} key={index}>
            <feTurbulence
              baseFrequency="0.05"
              id="turbulence"
              numOctaves="2"
              result="noise"
              seed={index}
            ></feTurbulence>
            <feDisplacementMap
              id="displacement"
              in2="noise"
              in="SourceGraphic"
              scale="4"
            ></feDisplacementMap>
          </filter>
        ))}
      </defs>
    </svg>
  );
}

// export default SVGFilter;
