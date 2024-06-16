import soldierDesktop from './soldierDesktop.png';
import soldierDesktop2x from './soldierDesktop@2x.png';
import soldierDesktopWebp from './soldierDesktop.webp';
import soldierDesktopWebp2x from './soldierDesktop@2x.webp';
import soldierMobile from './soldierMobile.png';
import soldierMobile2x from './soldierMobile@2x.png';
import soldierMobileWebp from './soldierMobile.webp';
import soldierMobileWebp2x from './soldierMobile@2x.webp';

const soldierImages = {
  desktop: {
    png: {
      src: soldierDesktop,
      src2x: soldierDesktop2x,
    },
    webp: {
      src: soldierDesktopWebp,
      src2x: soldierDesktopWebp2x,
    },
  },
  mobile: {
    png: {
      src: soldierMobile,
      src2x: soldierMobile2x,
    },
    webp: {
      src: soldierMobileWebp,
      src2x: soldierMobileWebp2x,
    },
  },
};

export default soldierImages;
