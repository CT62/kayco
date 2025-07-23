import { motion } from 'framer-motion';

const images = [
  'image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg',
  'image6.jpg', 'image7.jpg', 'image8.jpg', 'image9.jpg', 'image10.jpg',
  'image11.jpg', 'image12.jpg',
];

const AutoScrollGallery = () => {
  return (
    <div className="overflow-hidden w-full bg-white dark:bg-black py-4">
      <motion.div
        className="flex gap-4 w-max"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 100,
        }}
      >
        {[...images, ...images].map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Food image ${i}`}
            className="h-48 w-auto rounded-lg object-cover"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default AutoScrollGallery;

