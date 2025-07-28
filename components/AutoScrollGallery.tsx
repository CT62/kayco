import { motion } from 'framer-motion';

const images = [
  'image0.jpg','image1.png', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg',
  'image6.jpg', 'image7.jpg', 'image8.jpg',
];

const AutoScrollGallery = () => {
  return (
    <div className="overflow-hidden w-full bg-white py-4">
      <motion.div
        className="flex gap-4 w-max"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 20,
        }}
      >
        {[...images, ...images].map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`image ${i}`}
            className="h-48 w-auto rounded-lg object-cover"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default AutoScrollGallery;
