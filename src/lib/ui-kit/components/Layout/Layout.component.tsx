import { ReactNode } from "react";

import { Seo, SeoMetadata } from "lib/shared";
import { Logo } from "../Logo/Logo.component";
import { Navigation } from "./components/Navigation/Navigation.component";
import {
  StyledFooter as Footer,
  StyledLayoutWrapper as Wrapper,
  StyledMain as Main,
} from "./Layout.styles";

interface LayoutProps extends SeoMetadata {
  children: ReactNode;
  hasFooter?: boolean;
}

export const Layout = ({
  children,
  metaDescription,
  metaTitle,
  metaRobots,
  hasFooter = true,
}: LayoutProps) => {
  return (
    <>
      <Seo
        metaTitle={metaTitle}
        metaDescription={metaDescription}
        metaRobots={metaRobots}
      />
      <Wrapper>
        <Navigation leftSide={<Logo />} center={<p>Center</p>} />
        <Main>{children}</Main>
        {hasFooter && <Footer>Footer</Footer>}
      </Wrapper>
    </>
  );
};
