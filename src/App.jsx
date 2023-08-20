import Banner from "./components/Banner";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Slider from "./components/Slider";

function App() {
  const images = [
    {
      src: "https://icms-image.slatic.net/images/ims-web/14b0310e-daac-45fd-9cf0-85fa94d23b13.jpg",
      alt: "Image 1",
      title: "one",
      description: "A stunning sunset over the mountains.",
    },
    {
      src: "https://icms-image.slatic.net/images/ims-web/eb3119e1-c34c-48a6-a730-09055f207ba7.jpg_1200x1200.jpg",
      alt: "Image 1",
      title: "two",
      description: "A stunning sunset over the mountains.",
    },
    {
      src: "https://icms-image.slatic.net/images/ims-web/72bd7e2d-beef-4f14-99aa-f735be118e03.jpg",
      alt: "Image 1",
      title: "three",
      description: "A stunning sunset over the mountains.",
    },
    {
      src: "https://icms-image.slatic.net/images/ims-web/d80ead98-52d4-47f9-b69a-b1beb20e62d7.jpg",
      alt: "Image 1",
      title: "four",
      description: "A stunning sunset over the mountains.",
    },
  ];
  return (
    <>
      <Header />
      <Nav />
      <Slider images={images} />
      <Banner />
    </>
  );
}

export default App;
