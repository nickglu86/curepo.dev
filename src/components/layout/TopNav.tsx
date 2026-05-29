"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { Header, Inner, Brand, BrandIcon, Nav, NavLink } from "./TopNav.styles";

export default function TopNav() {
  const pathname = usePathname();

  return (
    <Header>
      <Inner>
        <Brand href="/">
          <BrandIcon>
            <Image
              src="/assets/repo.png"
              alt="Repository icon"
              width={24}
              height={24}
            />
          </BrandIcon>
          curepo.dev
        </Brand>
        <Nav>
          <NavLink href="/" $active={pathname === "/"}>
            Browse
          </NavLink>
          <NavLink href="/about" $active={pathname === "/about"}>
            About
          </NavLink>
          <NavLink href="/terms" $active={pathname === "/terms"}>
            Terms
          </NavLink>
        </Nav>
      </Inner>
    </Header>
  );
}
