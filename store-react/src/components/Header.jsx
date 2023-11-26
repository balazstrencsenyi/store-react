import { useState } from "react";
import SignIn from "./handleSignIn";
import SignUp from "./handleSignUp";
import AuthDetails from "./AuthDetails";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

function Header() {
  const [openItem, setOpenItem] = useState(null);

  const handleItemClick = (item) => {
    if (item === "sign-in" || item === "sign-up") {
      setOpenItem(item);
    } else {
      setOpenItem((prevItem) =>
        prevItem === item && item !== "apple" ? null : item
      );
    }
  };

  const renderContent = () => {
    if (openItem === "bag") {
      return (
        <div className="rolledStoreContainer">
          <div className="moveMenu">
            <h1>Your Bag is empty.</h1>
            <div className="goodOrder">
              <div className="signIn">Your current status is</div>
              <div className="statusRolled">
                <AuthDetails />
              </div>
            </div>
            <div className="listTitleContainer">
              <div className="listTitle">My Profile</div>
              <ul>
                <li className="bagItems">Orders</li>
                <li className="bagItems">Account</li>
                <li
                  className="bagItems"
                  onClick={() => handleItemClick("sign-in")}
                >
                  Sign in
                </li>
                <li
                  className="bagItems"
                  onClick={() => handleItemClick("sign-up")}
                >
                  Sign up
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    } else if (openItem === "mac") {
      return (
        <div className="rolledStoreContainer">
          <ul className="moveMenu">
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="MacBook Air" className="rolledLists" />
            </ListItemButton>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="MacBook Pro" className="rolledLists" />
            </ListItemButton>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="iMac" className="rolledLists" />
            </ListItemButton>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Mac Mini" className="rolledLists" />
            </ListItemButton>
          </ul>
        </div>
      );
    } else if (openItem === "ipad") {
      return (
        <div className="rolledStoreContainer">
          <ul className="moveMenu">
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="iPad Pro 2022" className="rolledLists" />
            </ListItemButton>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="iPad 2022" className="rolledLists" />
            </ListItemButton>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="iPad Air 2022" className="rolledLists" />
            </ListItemButton>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="iPad Pro 2021" className="rolledLists" />
            </ListItemButton>
          </ul>
        </div>
      );
    } else if (openItem === "iphone") {
      return (
        <div className="rolledStoreContainer">
          <ul className="moveMenu">
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="iPhone 15 Pro" className="rolledLists" />
            </ListItemButton>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="iPhone 15 " className="rolledLists" />
            </ListItemButton>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="iPhone 14 Pro" className="rolledLists" />
            </ListItemButton>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="iPhone 14" className="rolledLists" />
            </ListItemButton>
          </ul>
        </div>
      );
    } else if (openItem === "watch") {
      return (
        <div className="rolledStoreContainer">
          <ul className="moveMenu">
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Apple Watch Series 9" className="rolledLists" />
            </ListItemButton>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Apple Watch Series 8" className="rolledLists" />
            </ListItemButton>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Apple Watch Series SE 2022" className="rolledLists" />
            </ListItemButton>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Apple Watch Series SE 2023" className="rolledLists" />
            </ListItemButton>
          </ul>
        </div>
      );
    } else if (openItem === "airpods") {
      return (
        <div className="rolledStoreContainer">
          <ul className="moveMenu">
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="AirPods 2" className="rolledLists" />
            </ListItemButton>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="AirPods 3" className="rolledLists" />
            </ListItemButton>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="AirPods Pro" className="rolledLists" />
            </ListItemButton>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="AirPods 2" className="rolledLists" />
            </ListItemButton>
          </ul>
        </div>
      );
    } else if (openItem === "accessories") {
      return (
        <div className="rolledStoreContainer">
          <ul className="moveMenu">
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="iPhone Accessories" className="rolledLists" />
            </ListItemButton>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="iPad Accessories" className="rolledLists" />
            </ListItemButton>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Mac Accessories" className="rolledLists" />
            </ListItemButton>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Apple Watch Accessories" className="rolledLists" />
            </ListItemButton>
          </ul>
        </div>
      );
    } else if (openItem === "support") {
      return (
        <div className="rolledStoreContainer">
          <div className="moveMenu" id="supportContainer">
            <form>
              <h1>How can we help you?</h1>
              <input type="text" placeholder="Your Email" id="supportEmail" />
              <input
                type="text"
                placeholder="Please write your quesiton here"
              />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      );
    } else if (openItem === "search") {
      return (
        <div className="rolledStoreContainer">
          <div className="moveMenu" id="searchContainer">
            <h1>What are you looking for?</h1>
            <input type="text" placeholder="Search.." />
            <button type="submit">Go</button>
          </div>
        </div>
      );
    } else if (openItem === "store") {
      return (
        <div className="rolledStoreContainer">
          <div className="moveMenu">
            <h1>Store content goes here..</h1>
          </div>
        </div>
      );
    }

    return null; // Return null if no item is open
  };

  return (
    <div className={`headerContainer ${openItem ? "open" : ""}`}>
      <div className="menuContainer">
        <ul>
          <img
            src="./src/assets/apple.svg"
            className="appleLogo"
            onClick={() => handleItemClick("apple")}
          />
          <li onClick={() => handleItemClick("store")}>Store</li>
          <li onClick={() => handleItemClick("mac")}>Mac</li>
          <li onClick={() => handleItemClick("ipad")}>iPad</li>
          <li onClick={() => handleItemClick("iphone")}>iPhone</li>
          <li onClick={() => handleItemClick("watch")}>Watch</li>
          <li onClick={() => handleItemClick("airpods")}>AirPods</li>
          <li onClick={() => handleItemClick("accessories")}>Accessories</li>
          <li onClick={() => handleItemClick("support")}>Support</li>
          <img
            src="./src/assets/search.svg"
            className="search"
            onClick={() => handleItemClick("search")}
          />
          <img
            src="./src/assets/store.svg"
            className="store"
            onClick={() => handleItemClick("bag")}
            alt="Store Icon"
          />
        </ul>
      </div>

      {openItem === "sign-in" && <SignIn />}
      {openItem === "sign-up" && <SignUp />}
      {renderContent()}
    </div>
  );
}

export default Header;
