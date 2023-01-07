import styled from "@emotion/styled";
import { theme } from "../../styles/theme";
import Link from "next/link";

export default function Header() {
  return (
    <Container>
      <Wrapper>
        <Link href="/">
          <Logo>PITCH</Logo>
        </Link>
        <Nav>
          <Link href="/spring">
            <NavItem>SPRING</NavItem>
          </Link>
          <Link href="/summer">
            <NavItem>SUMMER</NavItem>
          </Link>
          <Link href="/autumn">
            <NavItem>AUTUMN</NavItem>
          </Link>
          <Link href="/winter">
            <NavItem>WINTER</NavItem>
          </Link>
        </Nav>
        <Button>빅데이터 분석</Button>
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
