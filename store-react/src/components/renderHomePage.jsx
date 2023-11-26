import  { useEffect } from 'react';

function RenderHomePage() {
  useEffect(() => {
    const handleAppleLogoClick = () => {
      // Reload the whole page
      window.location.reload();
    };

    const appleLogo = document.querySelector('.appleLogo');
    appleLogo.addEventListener('click', handleAppleLogoClick);

    return () => {
      appleLogo.removeEventListener('click', handleAppleLogoClick);
    };
  }, []); 

  return (
    <div className='homePageContainer'>
      <div className="firstSlide">
        <img src="./src/assets/slide1.png" className='slide1' />
      </div>
      <div className="secondSlide">
        <img src="./src/assets/slide2.png" className='slide2' />
      </div>
      <div className="thirdSlide">
        <img src="./src/assets/slide3.png" className='slide3' />
      </div>
    </div>
  );
}

export default RenderHomePage;
