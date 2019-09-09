import React, { useState, useContext } from "react";
import Menu from "react-burger-menu/lib/menus/slide";
import Link from "next/link";
import Links from "./links";
import Button from "../button/button";

const styles = {
  bmBurgerButton: {
    position: 'absolute',
    width: '36px',
    height: '30px',
    right: '3rem',
    top: '24px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: '#2b4365',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#f2f2f2',
    padding: '0.8em'
  },
  bmItem: {
    fontSize: '24px',
    margin: '8px 1px 1px 1px'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

const MenuContext = React.createContext();

// create the provider
const MenuProvider = props => {
  const [menuOpenState, setMenuOpenState] = useState(false);

  return (
    <MenuContext.Provider
      value={{
        isMenuOpen: menuOpenState,
        toggleMenu: () => setMenuOpenState(!menuOpenState),
        stateChangeHandler: newState => setMenuOpenState(newState.isOpen),
        closeMenu: () => setMenuOpenState(false)
      }}
    >
      {props.children}
    </MenuContext.Provider>
  );
};

const Navigation = () => {
  const ctx = useContext(MenuContext);

  return (
    <>
    <Menu
      width={"45%"}
      styles={styles}
      isOpen={ctx.isMenuOpen}
      onStateChange={state => ctx.stateChangeHandler(state)}
    >
    <ul>
      {Links.map(({ key, href, label }) => (
        <li key={key} className="ml-4 pt-3 menu-item">
          <Link href={href}>
            <a onClick={() => ctx.closeMenu()}>{label}</a>
          </Link>
        </li>
      ))}
    </ul>
    <div className="ml-4 pt-3" >
      <Button text="Start Now" link="/" />
    </div>
    </Menu>
    {/* <style jsx>
      {`
        ul {
          display: flex;
          flex-direction: column;
        }
      `}
    </style> */}
    </>
  );
};

const Sidebar = props => {
  return (
    <MenuProvider>
      <div>
        <Navigation />
      </div>
    </MenuProvider>
  );
};

export default Sidebar;
