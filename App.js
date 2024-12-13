
import img1 from './img/chit.jpg';
import img2 from './img/lum.jpg';
import img3 from './img/mukti.jpg';
import img4 from './img/pasu.jpg';
import img5 from './img/pokh.jpg';
import img6 from './img/sagar.jpg';
import ImageSlider from './Slider';

const App = () => {
  const images=[img1,img2,img3,img4,img5,img6];
  return (
    <div className='app'>
      <ImageSlider images={images}/>
    </div>
  )
}

export default App;
