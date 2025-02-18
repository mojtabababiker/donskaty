export const WaveShape: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    // width="100%"
    height="100%"
    preserveAspectRatio="none"
    viewBox="0 -300 800 800"
    {...props}
  >
    <path
      // width={800}
      className="origin-center opacity-60 transition-[stroke-dashoffset] duration-500 ease-in [stroke-dasharray:1700] [stroke-dashoffset:1700] group-hover:[stroke-dashoffset:0]"
      filter="url(#squiggle-0)"
      stroke={props.color}
      strokeLinecap="round"
      // strokeLinejoin="round"
      strokeWidth="50"
      d="M152.2 119.12c14.35-9.93 117.74-89.63 126.68-87.65 8.94 2-60.36 95.88-47.8 105.18 12.55 9.3 154.95-26.26 158.56-23.1s-107.28 35.1-126.7 51c-19.4 15.89-48.23 82.28-44.61 89.23 3.6 6.96 56.8-22.65 76.5-27.88 19.68-5.24 77.52-14.99 97.2-18.33 19.69-3.34 76.4-19.37 76.5-11.16.09 8.22-54.3 73.37-75.7 83.67s-100.42.49-113.15 7.17-5.88 45.56.8 51.8c6.68 6.22 46.6.2 58.17 3.18 11.55 2.98 37.4 18.05 43.82 23.1 6.41 5.07 10.4 24.32 12.75 21.52s7.06-40.97 7.97-46.21"
      // transform="matrix(1.05 .18514 0 1.05 74.12 -77.2)"
    />
  </svg>
);

export const TieShape: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    preserveAspectRatio="none"
    viewBox="170 140 360 280"
    {...props}
    // className="w-full h-full"
  >
    <path
      className=" opacity-50 transition-[stroke-dashoffset] duration-500 ease-in [stroke-dasharray:3000] [stroke-dashoffset:3000] group-hover:[stroke-dashoffset:0]"
      filter="url(#squiggle-0)"
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="64"
      d="M164.94 350.2C142.497 318.99 44.356 207.303 30.28 162.947s20.053-63.08 50.2-78.884c30.145-15.804 80.743-67.73 130.676-15.937C261.09 119.92 363.081 373.572 380.08 394.821c16.998 21.248-57.105-140.77-66.933-199.203-9.827-58.433-7.702-158.699 7.969-151.395s54.05 137.982 86.055 195.22 91.9 137.051 105.976 148.206c14.077 11.156-12.616-36.786-21.514-81.274-8.897-44.49-25.232-136.388-31.872-185.658s-18.592-115.405-7.968-109.96 42.098 86.189 71.713 142.63c29.615 56.44 72.244 156.44 105.976 196.015s86.189 47.81 96.414 41.435-21.646-49.137-35.06-79.682c-13.412-30.544-37.051-58.167-45.418-103.585-8.366-45.419-14.342-156.308-4.78-168.925 9.561-12.616 45.02 67.597 62.15 93.228 17.132 25.63 32.139 62.55 40.638 60.557 8.5-1.992 5.976-52.722 10.359-72.51 4.382-19.787 13.28-38.512 15.936-46.215"
      transform="matrix(.46916 -.53215 .46597 .09383 116.603 396.473)"
    />
  </svg>
);

export const LineShape: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="160 120 300 200"
    {...props}
    // className="w-full h-full"
  >
    <path
      className="opacity-60 transition-[stroke-dashoffset] duration-500 ease-in [stroke-dasharray:3000] [stroke-dashoffset:3000] group-hover:[stroke-dashoffset:0]"
      filter="url(#squiggle-0)"
      fill="none"
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth="40"
      d="M68.526 52.191C67.79 54.19 4.304 224.101 5.578 223.506S177.513-.236 177.689 1.196c.177 1.43-158.18 344.796-156.972 345.02 1.209.222 258.531-324.42 260.558-325.897 2.026-1.478-87.56 198.143-86.853 199.203s148.015-110.254 147.41-108.367S142.9 379.24 142.63 381.275s174.441-95.562 176.096-95.618-36.568 92.38-34.263 90.837c2.306-1.543 229.167-220.505 231.873-223.108"
      transform="matrix(.81345 .52898 -.35265 1 255.167 -129.27)"
    ></path>
  </svg>
);

export const MonsterShape: React.FC<React.SVGProps<SVGSVGElement>> = (
  props
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-160 60 580 600"
    {...props}
    // className="w-full h-full"
  >
    <path
      className="opacity-60 transition-[stroke-dashoffset] duration-500 ease-in [stroke-dasharray:5000] [stroke-dashoffset:5000] group-hover:[stroke-dashoffset:0]"
      filter="url(#squiggle-0)"
      fill="none"
      strokeWidth="70"
      stroke={props.color}
      d="M8.569 247.066c1.16-57.414 64.805-56.196 88.003-98.647S8.787 73.048-125.763 55.164 71.083 66.072 83.494 59.345C95.905 52.617 50.487-199.7 3.405-86.504-29.4-7.633 148.471-4.643 272.207-30.933 326.608-42.491 376.361 4.746 392.61 3.058c53.587-5.567 124.251-47.901 43.749-127.019S457.564 5.494 456.636 51.078s20.638 126.792 20.754 177.479-35.533 77.206-56.527 108.407-.668 252.722-30.941 236.831c-30.273-15.89-92.538-302.456-114.228-313.938-21.69-11.483 9.94 369.327-7.806 368.631s-79.425-287.658-94.619-285.686-17.591 164.26-33.018 163.796-33.204-107.568-63.593-89.59C46.269 434.987-50.319 710.327-72.473 711.719S7.41 304.481 8.569 247.066Z"
    />
  </svg>
);

export const ShaggyShape: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-110 100 580 600"
    {...props}
    // className="w-full h-full"
  >
    <path
      className="origin-center opacity-60 transition-[stroke-dashoffset] duration-500 ease-in [stroke-dasharray:5000] [stroke-dashoffset:5000] group-hover:[stroke-dashoffset:0]"
      filter="url(#squiggle-0)"
      fill="none"
      strokeWidth="70"
      stroke={props.color}
      d="M187.363 183.912C170.27 189.609-37.411-82.266-48.2-101.913-72.95-146.986 71.665 116.354 63.177 132.284c-8.489 15.93-206.614-206.01-144.074-114.302S8.991 166.354 12.944 232.749c3.954 66.395-183.999 505.595-106.589 333.534S75.153 376.819 112.712 367.4s73.372 43.023 108.139 59.302c34.768 16.279 100.208-167.623 132.882-160.182s99.345 123.444 63.165 204.833 110.697-203.139 117.209-246.279-137.765-23.358-139.742-38.009S540.851 83.447 548.758 44.377s9.419-96.628-7.674-101.861c-17.093-5.232-63.954 72.093-94.884 70.465-30.93-1.627-129.686-176.839-90.698-80.232 8.561 21.212-6.86 147.442-27.907 149.302-21.046 1.861-153.206-261.035-98.372-138.139s55.698 217.209 38.372 219.069c-17.325 1.861-62.093-53.363-142.325-207.907s79.186 223.14 62.093 228.838Z"
    />
  </svg>
);
