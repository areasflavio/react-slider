import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import './App.css';
import pictures from './assets/pictures/index';

function App() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(
      (carouselRef.current?.scrollWidth ?? 0) -
        (carouselRef.current?.offsetWidth ?? 0)
    );
  }, []);

  return (
    <div className="App">
      <motion.div
        className="carousel"
        ref={carouselRef}
        whileTap={{ cursor: 'grabbing' }}
      >
        <motion.div
          className="inner-carousel"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {pictures.map((pic) => (
            <motion.div key={pic} className="item">
              <img src={pic} alt="" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
