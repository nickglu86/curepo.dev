import Image from "next/image";
import { Header, Inner, Brand, BrandIcon, Nav, NavLink } from "./TopNav.styles";

export default function TopNav() {
  return (
    <Header>
      <Inner>
        <Brand href="/">
          <BrandIcon>
            <Image src="/assets/repo.png" alt="Repository icon" width={24} height={24} />
          </BrandIcon>
          curepo.dev
        </Brand>
        <Nav>
          <NavLink href="/" $active>
            Browse
          </NavLink>
          <NavLink href="/about">About</NavLink>
        </Nav>
      </Inner>
    </Header>
  );
}
