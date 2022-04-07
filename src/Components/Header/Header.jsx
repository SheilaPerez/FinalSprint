import { Logo } from './Header.styles';
import { MdViewHeadline } from "react-icons/md";
import { IconContext } from 'react-icons';
import { Menu, MenuItemLink, MenuItem, HeaderMenu } from './Header.styles';
import { useState } from 'react';

const Header = () => {

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div>
      <IconContext.Provider value={{ style: { fontSize: "3em", color: "#39AEA9" } }}>
        <HeaderMenu>
          <Logo></Logo>
          <MdViewHeadline onClick={() => {setShowMobileMenu(!showMobileMenu)}}/>
        </HeaderMenu>
        <Menu open={showMobileMenu}>
          <MenuItem>
            <MenuItemLink to="/home">home</MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink to="villagers">villagers</MenuItemLink>
          </MenuItem> 
          <MenuItem>
            <MenuItemLink to="/animals">animals</MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink to="/art">art</MenuItemLink>
          </MenuItem> 
          <MenuItem>
            <MenuItemLink to="/fossils">fossils</MenuItemLink>
          </MenuItem>
        </Menu>
      </IconContext.Provider>
    </div>
  )
}

export default Header;
