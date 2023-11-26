import { useState } from 'react';

function Header() {
  const [openItem, setOpenItem] = useState(null);

  const handleItemClick = (item) => {
     setOpenItem((prevItem) => (prevItem === item && item !== 'apple' ? null : item));
  };

  const renderContent = () => {
    if (openItem === 'bag') {
      return (
        <div className='rolledStoreContainer'>
          <div className='moveMenu'>
            <h1>Your Bag is empty.</h1>
            <div className='signIn'>
              <a>Sign in</a> to see if you have any saved items
            </div>
            <div className='listTitleContainer'>
              <div className='listTitle'>My Profile</div>
              <ul>
                <li className='bagItems'>Orders</li>
                <li className='bagItems'>Account</li>
                <li className='bagItems'>Sign in</li>
                <li className='bagItems'>Sign up</li>
              </ul>
            </div>
          </div>
        </div>
      );
    } else if (openItem === 'mac') {
      return (
        <div className='rolledStoreContainer'>
          <ul className='moveMenu'>
            <li>MacBook Air</li>
            <li>MacBook Pro</li>
            <li>iMac</li>
            <li>mac mini</li>
          </ul>
        </div>
      );
    } else if (openItem === 'ipad') {
      return (
        <div className='rolledStoreContainer'>
          <ul className='moveMenu'>
            <li>iPad Pro 2022</li>
            <li>iPad 2022</li>
            <li>iPad Air 2022</li>
            <li>iPad Pro 2021</li>
            <li>iPad 2021</li>
            <li>iPad mini 2021</li>
          </ul>
        </div>
      );
    } else if (openItem === 'iphone') {
      return (
        <div className='rolledStoreContainer'>
          <ul className='moveMenu'>
            <li>iPhone 15 Pro</li>
            <li>iPhone 15</li>
            <li>iPhone 14 Pro</li>
            <li>iPhone 14</li>
            <li>iPhone 13</li>
            <li>iPhone 12</li>
            <li>iPhone 11</li>
          </ul>
        </div>
      );
    } else if (openItem === 'watch') {
      return (
        <div className='rolledStoreContainer'>
          <ul className='moveMenu'>
            <li>Apple Watch Ultra 2</li>
            <li>Apple Watch Series 9</li>
            <li>Apple Watch Series 8</li>
            <li>Apple Watch Series SE 2023</li> 
            <li>Apple Watch Series SE 2022</li>
          </ul>
        </div>
      );
    } else if (openItem === 'airpods') {
      return (
        <div className='rolledStoreContainer'>
          <ul className='moveMenu'>
            <li>AirPods 2</li>
            <li>AirPods 3</li>
            <li>AirPods Pro</li>
            <li>AirPods Pro 2</li>
          </ul>
        </div>
      );
    }  else if (openItem === 'accessories') {
      return (
        <div className='rolledStoreContainer'>
          <ul className='moveMenu'>
            <li>iPhone Accessories</li>
            <li>iPad Accessories</li>
            <li>Mac Accessories</li>
            <li>Apple Watch Accessories</li>
          </ul>
        </div>
      );
    } else if (openItem === 'support') {
      return (
        <div className='rolledStoreContainer'>
          <div className='moveMenu' id='supportContainer'>
            <form>
              <h1>How can we help you?</h1>
              <input type='text' placeholder='Please write the issue..' />
              <button type='submit'>Send</button>           
            </form>
          </div>
        </div>
      );
    } else if (openItem === 'search') {
      return (
        <div className='rolledStoreContainer'>
          <div className='moveMenu' id='searchContainer'>
            <h1>What are you looking for?</h1>
            <input type='text' placeholder='Search..' />
            <button type='submit'>Go</button>
          </div>
        </div>
      );
    } else if (openItem === 'store') {
      return (
        <div className='rolledStoreContainer'>
          <div className='moveMenu'>
          <h1>Store content goes here..</h1>
          </div>
        </div>
      );
    } 
      
    return null; // Return null if no item is open
  };

  return (
    <div className={`headerContainer ${openItem ? 'open' : ''}`}>
      <div className="menuContainer">
        <ul>
          <img src="./src/assets/apple.svg" className="appleLogo" onClick={() => handleItemClick('apple')} />
          <li onClick={() => handleItemClick('store')}>Store</li>
          <li onClick={() => handleItemClick('mac')}>Mac</li>
          <li onClick={() => handleItemClick('ipad')}>iPad</li>
          <li onClick={() => handleItemClick('iphone')}>iPhone</li>
          <li onClick={() => handleItemClick('watch')}>Watch</li>
          <li onClick={() => handleItemClick('airpods')}>AirPods</li>
          <li onClick={() => handleItemClick('accessories')}>Accessories</li>
          <li onClick={() => handleItemClick('support')}>Support</li>
          <img src="./src/assets/search.svg" className="search" onClick={() => handleItemClick('search')} />
          <img src="./src/assets/store.svg" className="store" onClick={() => handleItemClick('bag')} alt="Store Icon" />
        </ul>
      </div>

      {renderContent()}
    </div>
  );
}

export default Header;
