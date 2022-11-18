import React, { useState } from "react";
import {
  CountryImg,
  DropDown,
  Flex,
  Logo,
  Nav,
  NavMobile,
  Span,
  StyledHeader,
} from "./header.styles";
import country from "../../assets/Flags.png";
import downArrow from "../../assets/arrow-down.png";
import menu from "../../assets/menu.png";

const Header = () => {
  const [show, setShow] = useState(false);

  const clicked = () => {
    setShow(!show);
  };

  return (
    <StyledHeader>
      <Nav>
        <Logo>Street Rate</Logo>
        <Flex>
          <div>
            <CountryImg width="24" height="17" src={country} alt="" />
            <DropDown src={downArrow} alt="" />
          </div>
          <Flex>
            <Span>Home</Span>
            <Span>Convert</Span>
            <Span>Currency Profile</Span>
            <Span>News</Span>
            <Span>Contact</Span>
          </Flex>

          <img onClick={clicked} src={menu} alt="" />
          {show && (
            <NavMobile>
              <span>Home</span>
              <span>Convert</span>
              <span>Currency Profile</span>
              <span>News</span>
              <span>Contact</span>
            </NavMobile>
          )}
        </Flex>
      </Nav>
    </StyledHeader>
  );
};

export default Header;
