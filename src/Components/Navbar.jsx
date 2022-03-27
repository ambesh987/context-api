import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { AuthContext } from "../Contexts/AuthContext";

let Head = styled.div`
  color: red;
  font-size:20px;
  font-weight:700;
`;
let AuthWrapper = styled.div`
display: flex
flex-direction: row-reverse;

`;


let Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px; ;
`;
const Navbar = () => {
  let dataFromContext = React.useContext(AuthContext);
  const { login, isAuth, token, logOut } = dataFromContext;

  return (
    <>
      <Nav>
        <Head>Context API</Head>
        <AuthWrapper>
          {!isAuth && <Button>Log In</Button>}
          {isAuth && <Button onClick={logOut}>Log Out</Button>}
        </AuthWrapper>
      </Nav>
      
    </>
  );
};

export default Navbar;