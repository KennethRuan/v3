import { TailwindString } from "../types";

type ConeProps = {
  className?: TailwindString;
};

const Cone = ({ className: s }: ConeProps) => {
  return (
    <svg
      width="483"
      height="720"
      viewBox="0 0 483 720"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={s}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M386.664 701.365L482.418 0.551229L2.61698 520.263C-11.7711 554.327 60.957 621.572 166.154 671.179C271.35 720.786 369.501 734.121 386.63 701.349L386.664 701.365Z"
        fill="url(#paint0_linear_57_131)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_57_131"
          x1="162.622"
          y1="187.445"
          x2="455.749"
          y2="584.856"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C4A35A" />
          <stop offset="1" stopColor="#362C28" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Cone;
