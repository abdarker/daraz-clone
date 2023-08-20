/* eslint-disable react/prop-types */
const NavigationButton = ({ buttonText, image }) => {
  return (
    <div className="flex items-center justify-between bg-white hover:shadow-lg w-[240px] h-10 rounded-full pl-1 pr-1.5 group cursor-pointer">
      <div className="flex items-center gap-2">
        <img src={image} alt="" className="rounded-full h-8 w-8" />
        <h1 className="font-medium text-xl">{buttonText}</h1>
      </div>
      <div className="invisible group-hover:visible">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </div>
  );
};

export default NavigationButton;
