import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import variants from 'components/store/lib/variants';
import { SliderImage } from '../../common';
import { handleDragEnd } from '../../productInfo/images/helpers';
import { SWIPE_CONFIDENCE_THRESHOLD } from '../../constants';
import { devices } from 'components/store/lib/Devices';

type Props = {
  images: string[];
  isOpened?: boolean;
  selectedIndex: number;
  setSelectedIndex: any;
  direction: number;
  page: number;
  paginateImage: any;
};
const UserImagesSlider: React.FC<Props> = ({
  images,
  isOpened,
  selectedIndex,
  setSelectedIndex,
  direction,
  page,
  paginateImage,
}) => {
  return (
    <SliderWrapper
      key="slider-product-page"
      custom={0.3}
      initial="init"
      animate="animate"
      exit={{ y: -80, opacity: 0, transition: { delay: 0.1 } }}
      variants={variants.fadInSlideUp}
    >
      <AnimatePresence initial={false} custom={direction}>
        <SliderImage
          key={page}
          src={`/api/images/${images[selectedIndex]}`}
          custom={direction}
          variants={variants.slider}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.4 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={handleDragEnd(
            paginateImage,
            SWIPE_CONFIDENCE_THRESHOLD,
            images.length - 1,
            setSelectedIndex,
            selectedIndex,
          )}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = '/img_not_found.png';
          }}
          style={{ objectFit: isOpened ? 'contain' : 'cover' }}
        />
      </AnimatePresence>
    </SliderWrapper>
  );
};

const SliderWrapper = styled(motion.div)`
  width: 100vw;
  height: 75vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  overflow: hidden;
  .wishlist-btn-parrent {
    position: absolute;
    bottom: 30px;
  }
  .fullscreen-btn-parrent {
    position: absolute;
    bottom: 30px;
    left: 90px;
  }
  @media ${devices.mobileL} {
    width: 100%;
    height: 300px;
  }
  @media ${devices.mobileM} {
    width: 100%;
    height: 280px;
  }
  @media ${devices.mobileS} {
    width: 100%;
    height: 280px;
  }
`;

export default UserImagesSlider;
