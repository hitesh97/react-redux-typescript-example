import * as React from 'react';
import { NavLink } from 'react-router-dom';
import styled from '../../utils/styled';
import Container from './Container';

interface HeaderProps {
  title: string;
}

const Wrapper = styled('header')`
  padding: 0.5rem 1.5rem;
  background-color: ${props => props.theme.colors.footerBackground};
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.headings};
`;

const FooterInner = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    flex-direction: row;
  }
`;

const FooterLeft = styled('div')`
  padding-right: 1rem;
`;

const FooterNav = styled('nav')`
  flex: 1 1 auto;
  margin: 1rem 0;

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    margin: 0;
  }
`;

const FooterNavLink = styled(NavLink)`
  margin: 0 1rem;

  &.is-active {
    text-decoration: underline;
  }
`;

const FooterRight = styled('div')`
  padding-left: 1rem;
`;

const Title = styled('h2')`
  margin: 0;
  font-weight: 500;
`;

const Footer: React.SFC<HeaderProps> = ({ title }) => (
  <Wrapper>
    <FooterInner>
      <FooterLeft>
        <Title>{title}</Title>
      </FooterLeft>
      <FooterNav>
        <FooterNavLink to="/aboutus" activeClassName="is-active">
          About Us
        </FooterNavLink>
        <FooterNavLink exact to="/contactus" activeClassName="is-active">
          Contact Us
        </FooterNavLink>
        <FooterNavLink to="/privacypolicy" activeClassName="is-active">
          Privacy Policy
        </FooterNavLink>
      </FooterNav>
      <FooterRight>Right content here</FooterRight>
    </FooterInner>
  </Wrapper>
);

export default Footer;
