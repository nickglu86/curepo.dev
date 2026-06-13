import {
  FooterEl,
  Inner,
  TopGrid,
  BrandCol,
  BrandRow,
  BrandMark,
  Tagline,
  SocialRow,
  SocialLink,
  SocialIcon,
  Column,
  ColTitle,
  LinkList,
  FootLink,
  FootAnchor,
  UpdateCol,
  BottomBar,
} from "./Footer.styles";
import NewsletterForm from "./NewsletterForm";

// TODO: point these at the real curepo GitHub repo / docs once they exist.
const GITHUB_URL = "https://github.com";

export default function Footer() {
  return (
    <FooterEl>
      <Inner>
        <TopGrid>
          {/* Brand */}
          <BrandCol>
            <BrandRow>
              <BrandMark>hub</BrandMark>
              <span>curepo</span>
            </BrandRow>
            <Tagline>
              Discover the next star for your developer toolkit.
            </Tagline>
            <SocialRow>
              <SocialLink
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="curepo on GitHub"
              >
                <SocialIcon>terminal</SocialIcon>
              </SocialLink>
              <SocialLink href="/" aria-label="curepo home">
                <SocialIcon>public</SocialIcon>
              </SocialLink>
            </SocialRow>
          </BrandCol>

          {/* Product */}
          <Column>
            <ColTitle>Product</ColTitle>
            <LinkList>
              <li>
                <FootLink href="/">Browse</FootLink>
              </li>
              <li>
                <FootLink href="/about">About</FootLink>
              </li>
              <li>
                <FootLink href="/">Topics</FootLink>
              </li>
              <li>
                <FootLink href="/">Featured</FootLink>
              </li>
            </LinkList>
          </Column>

          {/* Resources */}
          <Column>
            <ColTitle>Resources</ColTitle>
            <LinkList>
              <li>
                <FootAnchor
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Documentation
                </FootAnchor>
              </li>
              <li>
                <FootAnchor
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  API
                </FootAnchor>
              </li>
              <li>
                <FootLink href="/terms">Guidelines</FootLink>
              </li>
              <li>
                <FootLink href="/terms">Privacy</FootLink>
              </li>
            </LinkList>
          </Column>

          {/* Stay Updated — emails you a notification via /api/subscribe */}
          <UpdateCol>
            <ColTitle>Stay Updated</ColTitle>
            <NewsletterForm />
          </UpdateCol>
        </TopGrid>

        <BottomBar>
          <p>© {new Date().getFullYear()} curepo. All rights reserved.</p>
    
        </BottomBar>
      </Inner>
    </FooterEl>
  );
}
