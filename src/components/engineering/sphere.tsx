import { TailwindString } from "../types";

type SphereProps = {
  className?: TailwindString;
};

const Sphere = ({ className: s }: SphereProps) => {
  return (
    <svg
      width="412"
      height="466"
      viewBox="0 0 412 466"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={s}
    >
      <circle cx="233" cy="233" r="233" fill="url(#paint0_radial_57_122)" />
      <defs>
        <radialGradient
          id="paint0_radial_57_122"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(185.5 163) rotate(47.2083) scale(412.903)"
        >
          <stop stopColor="#E5E9E5" />
          <stop offset="1" stopColor="#26495C" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default Sphere;
