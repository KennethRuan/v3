import { TailwindString } from "../types";

type CylinderProps = {
  className?: TailwindString;
};

const Cylinder = ({ className: s }: CylinderProps) => {
  return (
    <svg
      width="841"
      height="415"
      viewBox="0 0 841 415"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={s}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M89.8774 14.0328L39.041 169.955L746.776 400.703C746.794 400.708 746.812 400.714 746.83 400.72C746.848 400.726 746.866 400.732 746.884 400.738L748.743 401.344L748.767 401.268C772.242 406.916 801.63 378.688 815.289 336.792C828.949 294.897 821.847 254.771 799.554 245.497L799.579 245.422L89.8774 14.0328Z"
        fill="url(#paint0_linear_57_136)"
      />
      <ellipse
        cx="64.4595"
        cy="91.994"
        rx="45.2711"
        ry="82"
        transform="rotate(18.0579 64.4595 91.994)"
        fill="url(#paint1_linear_57_136)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_57_136"
          x1="112.816"
          y1="-56.3221"
          x2="696.885"
          y2="439.63"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A18276" />
          <stop offset="1" stopColor="#3B302B" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_57_136"
          x1="46.3511"
          y1="40.994"
          x2="211.681"
          y2="503.382"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A18276" />
          <stop offset="1" stopColor="#362C28" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Cylinder;
