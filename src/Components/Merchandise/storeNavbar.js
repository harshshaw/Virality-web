import React from 'react';
import styled from 'styled-components';
import { FaSearch, FaUser, FaHeart, FaShoppingBag } from 'react-icons/fa';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 10px 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #ff3f6c;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
`;

const NavLink = styled.li`
  margin: 0 15px;
  cursor: pointer;
  font-weight: 500;
  position: relative;
  &:hover {
    color: #ff3f6c;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f5f5f6;
  padding: 5px 10px;
  border-radius: 20px;
`;

const SearchInput = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  padding-left: 10px;
  width: 200px;
  font-size: 16px;
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  margin-left: 20px;
  cursor: pointer;
  font-size: 1.2rem;
  color: #282c3f;
  position: relative;
`;

const StoreNavbar = () => {
  return (
    <NavbarContainer>
      <Logo>Virality</Logo>
      <NavLinks>
        <NavLink>Men</NavLink>
        <NavLink>Women</NavLink>
        <NavLink>Kids</NavLink>
        <NavLink>Home & Living</NavLink>
        <NavLink>Beauty</NavLink>
      </NavLinks>
      <SearchContainer>
        <FaSearch />
        <SearchInput type="text" placeholder="Search for products, brands and more" />
      </SearchContainer>
      <IconsContainer>
        <Icon><FaUser /></Icon>
        <Icon><FaHeart /></Icon>
        <Icon><FaShoppingBag /></Icon>
      </IconsContainer>
    </NavbarContainer>
  );
};

export default StoreNavbar;
