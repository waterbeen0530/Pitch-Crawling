import styled from "@emotion/styled";
import { theme } from "../../styles/theme";

export default function Header() {
  return (
    <Container>
      <Wrapper>
        <Logo>PITCH</Logo>
        <Nav>
          <NavItem>SPRING</NavItem>
          <NavItem>AUTUMN</NavItem>
          <NavItem>SUMMER</NavItem>
          <NavItem>WINTER</NavItem>
          <NavItem>BEST</NavItem>
        </Nav>
        <Button>참고사항</Button>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Inter;
`;

const Wrapper = styled.div`
  width: 70vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h2`
  font-size: 32px;
  color: ${theme.mainColor};
`;

const Nav = styled.div`
  gap: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavItem = styled.p`
  font-size: 16px;
  color: ${theme.blackColor};
`;

const Button = styled.button`
  padding: 8px 34px;
  border: none;
  border-radius: 17px;
  font-size: 14px;
  font-weight: 600;
  color: ${theme.whiteColor};
  background-color: ${theme.mainColor};
`;
