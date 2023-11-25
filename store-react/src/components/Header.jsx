import { useState } from 'react';

function Header() {
  const [isStoreOpen, setIsStoreOpen] = useState(false);

  const handleStoreClick = () => {
    setIsStoreOpen(!isStoreOpen);
  };

  return (
    <div className={`headerContainer ${isStoreOpen ? 'open' : ''}`}>
      <div className="menuContainer">
        <ul>
          <img src="./src/assets/apple.svg" className="appleLogo" alt="Apple Logo" />
          <li>Store</li>
          <li>Mac</li>
          <li>iPad</li>
          <li>iPhone</li>
          <li>Watch</li>
          <li>AirPods</li>
          <li>Accessories</li>
          <li>Support</li>
          <img src="./src/assets/search.svg" className="search" alt="Search Icon" />
          <img src="./src/assets/store.svg" className="store" onClick={handleStoreClick} alt="Store Icon" />
        </ul>
      </div>

      {isStoreOpen && (
        <div className='rolledStoreContainer'>
          <div className='moveMenu'>
            <h1>Your Bag is empty.</h1>
            <div className='signIn'>
              <a>Sign in</a> to see if you have any saved items
            </div>
            <div className='listTitleContainer'>
              <div className='listTitle'>My Profile</div>
              <ul>
                <li>Orders</li>
                <li>Your Saves</li>
                <li>Account</li>
                <li>Sign in</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
