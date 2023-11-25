import { useState } from "react";
import storeIcon from "../assets/store.svg";

function ClickStore() {
  const [isOpen, setIsOpen] = useState(false);

  const handleStoreClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <img
        src={storeIcon}
        className="store"
        onClick={handleStoreClick}
        alt="Store Icon"
      />

      {isOpen && (
        <div className="rolledStoreContainer">      
            <h1>Your Bag is empty.</h1>
            <div className="signIn">
              <a>Sign in</a> to see if you have any saved items
            </div>
            <div className="listTitleContainer">
              <div className="listTitle">My Profile</div>
              <ul>
                <li>Orders</li>
                <li>Your Saves</li>
                <li>Account</li>
                <li>Sign in</li>
              </ul>
            </div>         
        </div>
      )}
    </div>
  );
}

export default ClickStore;
