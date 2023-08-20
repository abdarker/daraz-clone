import NavigationButton from "./NavigationButton";

const Banner = () => {
  const buttonProps = [
    {
      image:
        "https://icms-image.slatic.net/images/ims-web/6b396809-87e7-435d-ba7b-5d69699371ba.png",
      buttonText: "Mart",
    },
    {
      image:
        "https://icms-image.slatic.net/images/ims-web/466c2424-6c49-45ab-8dca-dd81b9cb97bd.png",
      buttonText: "Fashion",
    },
    {
      image:
        "https://icms-image.slatic.net/images/ims-web/6352f3d8-678c-4630-9eb3-75aae8c1b213.png",
      buttonText: "Beauty",
    },
    {
      image:
        "https://icms-image.slatic.net/images/ims-web/6b396809-87e7-435d-ba7b-5d69699371ba.png",
      buttonText: "Make Over",
    },
    {
      image:
        "https://icms-image.slatic.net/images/ims-web/6352f3d8-678c-4630-9eb3-75aae8c1b213.png",
      buttonText: "Low Price",
    },
  ];
  return (
    <div className="my-10 relative">
      <img
        src="https://icms-image.slatic.net/images/ims-web/81dfc55d-0989-47ef-8ffb-92ca15d761f3.gif"
        alt=""
      />

      <div className="absolute inset-0 flex items-center justify-center gap-10">
        {buttonProps.map((item, index) => (
          <NavigationButton
            key={index}
            buttonText={item.buttonText}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
