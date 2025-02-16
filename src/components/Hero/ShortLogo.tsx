import clsx from "clsx";

const ShortLogo: React.FC<React.SVGProps<SVGSVGElement>> = ({
  className,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // width="263.92"
    // height="155.14"
    viewBox="115.68 152.42 263.92 155.14"
    className={clsx(className, "animate-squiggle")}
    {...props}
  >
    <path
      fill="currentColor"
      d="M153.47 190.9c-2-1-.16-16.17-2.16-16.17 0 0-4.96-11.05-10.27-5.76-3.18 3.16-1.67 19.7-1.67 19.7l1 13.43c0 2-6.6 7.31-4.6 8.31 15 3 14.96-7.32 20.49-5.53m194.46-22.84-1 10c-3 4-3.6 18.89-3.6 23.89-2 8.4 18.58 5.4 33.49-9.04-1 5-1 12-5 15-1.2 9.68-25.2 4.82-27.02 8.07-3.8 6.84-15.5 10.5-15.84 9.1-1-2-.03-22.02.97-25.02l1-13v-11c0-3-4-4-1-8 0-4-2-7 0-10 2-4 5-3 7-4 3-1 6 1 9 2 2 4 3 8 2 12m-138.85 18.1c-2-1-4.44-9.27-6.44-9.27 0 0-7.28-6.43-12.58-1.14-8.85 8.8-5.95 29.9-3.95 30.9 15 3 21.47-4.55 21.47-4.55m15.23-5.2-1 12c-2 1-4 3-2 6-1 3-8 6-11 8-3 1-8-1-11 1-5 2-13-1-18-2a9 9 0 0 1-6 0c-1-2-4-2-4-4l-1-1-1-4c-1-8 7-36 6-42l1-12c-1-2-2-5-1-7 3-3 7-2 11-2 5-2 11-2 16-2 4 1 7-1 10 1 4 3 9 6 11 12 1 2-1 4-1 7 1 6 2 24 2 29m52.76 2.6-1 12c-2 1-4 3-2 6-1 3-8 6-11 8-3 1-8-1-11 1-2.23.9-2.7-25.49-5.59-25.96-1.86-.3-2.46 7.42-4.84 13.76-2.22 5.92-6.24 10.48-7.57 10.2a9 9 0 0 1-6 0c-1-2-4-2-4-4l-1-1-1-4c-1-8 6-6 7-11l-2-12c3-7 2-13 1-19l1-12c-1-2-2-5-1-7 11.07.89 18.27 12.06 17.1 18.2 3.3 8.13 12.58 25.69 15.53 25.69 1.73.43-3.88-9.1-3.64-19.36.13-5.57 4.04-6.73 5.4-11.6 1.94-6.94-.31-8.91 2.6-15.92 4 3 9 6 11 12 1 2-1 4-1 7 1 6-2.83 11.53-2.83 11.53l.84 5.47c1 5 4 7 4 12m47.45-19.97c1 6 2 12 0 17 0 2.75 3.4 14.39.82 18.47-2.33 3.68-8.57-1.42-11 2.23-5.05 7.53-13 5.67-15.98 5.56 0 0-7.32-1.04-12.41-1.91-8.92-1.53 1.2 4.5 1.11-14.15-.02-3.77 7.8-1.78 7.84-2.35.1-1.77 15.05 9.43 15.85-7.51.09-2.03-14.06 3.29-19.06 4.4-5.69 1.27-7.17-4.74-10.17-8.74v-7c1-4 0-7-1-10l-.18-10.64c0-3-3.42-8.51 6.73-7.14 32.12-12.31 28.37 7.78 6.45 11.78-1 7 0 13 1 19 0 0 6.86 2.6 10.86.6 3-3 1.14-1.6 2.14-6.6-1-6-4-6-3-13-1-6-4-17 5-15 15-4 12 17 15 25m-155.29 83.43c-1.05 9.5-1.05 8.45-8.44 14.78-4.22 4.22-10.55 1.05-15.83 0-5.27-2.11-2.1-4.22-6.33-7.39-1.05-1.05 1.06-2.1-1.05-3.16l-1.06-5.28c0-1.05 0-7.39 2.11-5.28 2.11 0 0-3.16 4.22-1.05 4.22 1.05 2.11 7.38 5.28 9.5 1.05 2.1 3.17 7.38 7.39 5.27l4.22-3.16c1.05-3.17-1.06-10.56-4.22-11.61-5.28-2.11-11.61-3.17-15.83-7.39-4.22-5.28 0-15.83 7.38-14.77 2.11-1.06 14.78-5.28 15.83-1.06l2.11 2.11 2.11 3.17c1.06 3.16-1.05 10.55-5.27 8.44-3.17-2.11-3.17-7.39-7.39-6.33-6.33 0-9.5 2.1-3.16 6.33 3.16 3.17 3.16 2.11 7.38 3.17 7.39 4.22 10.55 5.27 10.55 13.71m43.27-24.27c-1.05 5.28-13.72 4.22-10.55 10.56l2.1 4.22 6.34 11.6c-1.06 4.23-7.39 5.28-10.55 6.34-4.22 0-4.22-5.28-5.28-7.39l-3.16-8.44c0-2.11-1.06-5.28-3.17-3.17-2.11 1.06-2.11 2.11-2.11 4.22 0 5.28 3.16 12.67 0 16.89-4.22 2.1-11.6 3.16-12.66-3.17-1.06-5.27 2.1-9.5 2.1-14.77-1.05-4.22 0-8.44 1.06-11.61v-8.44l2.11-4.22c0-4.23 4.22-4.23 7.39-3.17 3.16 1.06-4.22 21.1 1.06 16.88l18.99-9.5c4.22-3.16 7.39-2.1 6.33 3.17m34.83 27.44c0 4.22-2.12 7.39-3.17 10.55-3.17 1.06-6.33-1.05-6.33-4.22 0-2.1 1.05-6.33-1.06-8.44h-2.1c-2.12 1.06-4.23 0-6.34-1.06-4.22-1.05-5.28 0-5.28 4.23 0 2.1-1.05 2.1-2.1 3.16l-3.17 6.33c-4.22 3.17-8.44-6.33-5.28-8.44l1.06-2.1c2.1-3.18 4.22-7.4 4.22-11.62 1.05-2.1 3.16-3.16 2.1-5.27l2.12-2.12 1.05-6.33c2.11-1.05 1.06-3.16 2.11-4.22l3.17-5.27c3.17-3.17 7.39-2.11 10.55 0h6.34c4.22 3.16 1.05 8.44 3.16 11.6v10.56l-1.05 6.33zm-10.56-9.5-1.05-4.22 1.05-3.16-2.1-3.17-1.06-4.22c-2.11 5.28-5.28 9.5-6.34 14.77zm51.71-10.55c1.06 12.66-11.6 4.22-19 6.33l-1.05 24.27c1.06 3.17-2.1 6.33-6.33 5.28l-3.17-2.11-2.1-7.39c-1.06-4.22 2.1-9.5 2.1-13.72 3.17-12.66-4.22-2.1-6.33-11.6-1.05-1.06 0-2.12 1.06-3.17 0-5.28 4.22-5.28 7.38-3.17 3.17 0 2.12-6.33 7.4-3.16 1.05 5.27 6.32 3.16 9.49 4.22 3.16 3.16 9.5-1.06 10.55 4.22m31.66 41.16-2.11 4.22h-6.33l-4.22 2.1-11.61-1.05-6.33-3.16c-2.11 0-3.17-2.11-3.17-4.22-1.05-1.06-3.16-2.12-2.11-4.23l3.17-1.05h2.1l3.17-22.16c1.06-1.06 0-2.11-1.05-2.11-4.22-5.28 4.22-8.44 8.44-7.39l9.5 2.11c2.1 0 5.27-1.05 6.33 1.06 3.16 4.22 10.55 3.16 6.33 9.5-6.33 4.22-14.77-1.06-21.1-1.06-3.17 5.28 0 6.33 5.27 7.39H313l1.05 3.16c0 5.28-4.22 4.22-8.44 3.17l-2.11 1.05c-1.06 2.11-2.11 4.22 0 5.28 5.28 4.22 23.22-4.22 17.94 7.39m-150.65-99.8-1 12c-2 1-4 3-2 6-1 3-8 6-11 8-3 1-8-1-11 1-5 2-13-1-18-2a9 9 0 0 1-6 0c-1-2-4-2-4-4l-1-1-1-4c-1-8 6-6 7-11l-2-12c3-7 2-13 1-19l1-12c-1-2-2-5-1-7 3-3 7-2 11-2 5-2 11-2 16-2 4 1 7-1 10 1 4 3 9 6 11 12 1 2-1 4-1 7 1 6 2 24 2 29"
    ></path>
  </svg>
);

export default ShortLogo;
