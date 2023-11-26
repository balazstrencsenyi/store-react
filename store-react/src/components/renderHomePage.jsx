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
      <div className="firstSlide">first slide..</div>
      <div className="secondSlide">second slide..</div>
      <div className="thirdSlide">third slide..</div>
    </div>
  );
}

export default RenderHomePage;
