import { Logo } from './Header.styles';
import { MdViewHeadline } from "react-icons/md";
import { IconContext } from 'react-icons';
import { Menu, MenuItemLink, MenuItem, HeaderMenu, MenuMbl } from './Header.styles';
import { useState } from 'react';
import { Link } from 'react-router-dom'

const Header = () => {

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div>
      <IconContext.Provider value={{ style: { fontSize: "3em", color: "#39AEA9" } }}>
        <HeaderMenu>
          <Logo></Logo>
          <MenuMbl onClick={() => {setShowMobileMenu(!showMobileMenu)}}/>
        </HeaderMenu>
        <Menu open={showMobileMenu}>
        <Link to="" style={{ textDecoration: 'none' }}>
          <MenuItem>
            <MenuItemLink>home</MenuItemLink>
          </MenuItem>
        </Link>
        <Link to="villagers" style={{ textDecoration: 'none' }}>
          <MenuItem>
            <MenuItemLink>villagers</MenuItemLink>
          </MenuItem>
        </Link>
        <Link to="animals" style={{ textDecoration: 'none' }}>
          <MenuItem>
            <MenuItemLink>animals</MenuItemLink>
          </MenuItem>
        </Link>
        <Link to="art" style={{ textDecoration: 'none' }}>
          <MenuItem>
            <MenuItemLink>art</MenuItemLink> 
          </MenuItem> 
        </Link> 
        <Link to="fossils" style={{ textDecoration: 'none' }}>
          <MenuItem>
            <MenuItemLink>fossils</MenuItemLink> 
          </MenuItem>
        </Link>
        </Menu>
      </IconContext.Provider>
    </div>
  )
}

export default Header;
