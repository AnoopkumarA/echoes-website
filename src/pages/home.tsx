import Gallery from "../components/Gallery";
import PhotoGallery from "../components/photogallery";
import UniqueProcess from "../components/Typography"

const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="pt-20">
        <Gallery />
        <UniqueProcess />
        <PhotoGallery/>
      </div>
    </div>
  );
};


export default Home;