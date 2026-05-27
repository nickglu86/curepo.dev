import { FooterEl, Inner, Brand, Nav, FootLink } from "./Footer.styles";

export default function Footer() {
  return (
    <FooterEl>
      <Inner>
        <Brand>© {new Date().getFullYear()} curepo.dev </Brand>
        <Nav>
          <FootLink
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </FootLink>
          <FootLink href="/about">About</FootLink>
          <FootLink href="/terms">Terms</FootLink>
        </Nav>
      </Inner>
    </FooterEl>
  );
}
