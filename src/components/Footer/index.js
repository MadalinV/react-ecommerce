import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import {
	FooterContainer,
	FooterWrapper,
	FooterLinkContainer,
	FooterLinkWrapper,
	FooterLinkItems,
	FooterLinkTitle,
	FooterLink,
	SocialIcons,
	SocialMediaWrapper,
	SocialMedia,
	SocialLogo,
	WebsiteRights,
	SocialIconLink,
} from "./FooterElements";
import { animateScroll as scroll } from "react-scroll";

function Footer() {
	const toggleHome = () => {
		scroll.scrollToTop();
	};

	return (
		<FooterContainer>
			<FooterWrapper>
				<FooterLinkContainer>
					<FooterLinkWrapper>
						<FooterLinkItems>
							<FooterLinkTitle>About Us</FooterLinkTitle>
							<FooterLink to="/">How it works</FooterLink>
							<FooterLink to="/">Testimonial</FooterLink>
							<FooterLink to="/">Careers</FooterLink>
							<FooterLink to="/">Investors</FooterLink>
							<FooterLink to="/">Terms of Services</FooterLink>
						</FooterLinkItems>
						<FooterLinkItems>
							<FooterLinkTitle>Contact Us</FooterLinkTitle>
							<FooterLink to="/">Contact</FooterLink>
							<FooterLink to="/">Support</FooterLink>
							<FooterLink to="/">Locations</FooterLink>
							<FooterLink to="/">Sponsorhips</FooterLink>
						</FooterLinkItems>
					</FooterLinkWrapper>
					<FooterLinkWrapper>
						<FooterLinkItems>
							<FooterLinkTitle>Social Media</FooterLinkTitle>
							<FooterLink to="/">Instagram</FooterLink>
							<FooterLink to="/">Facebook</FooterLink>
							<FooterLink to="/">Twitter</FooterLink>
							<FooterLink to="/">Linkedin</FooterLink>
						</FooterLinkItems>
						<FooterLinkItems>
							<FooterLinkTitle>Videos</FooterLinkTitle>
							<FooterLink to="/">Submit Video</FooterLink>
							<FooterLink to="/">Ambassadors</FooterLink>
							<FooterLink to="/">Agency</FooterLink>
							<FooterLink to="/">Influencer</FooterLink>
						</FooterLinkItems>
					</FooterLinkWrapper>
				</FooterLinkContainer>
				<SocialMedia>
					<SocialMediaWrapper>
						<SocialLogo to="/" onClick={toggleHome}>
							Logo
						</SocialLogo>
						<WebsiteRights>
							Company © {new Date().getFullYear()} All rights
							reserved.
						</WebsiteRights>
						<SocialIcons>
							<SocialIconLink
								href="/"
								target="_blank"
								aria-label="Facebook"
							>
								<FaInstagram />
							</SocialIconLink>
							<SocialIconLink
								href="/"
								target="_blank"
								aria-label="Instagram"
							>
								<FaFacebook />
							</SocialIconLink>
							<SocialIconLink
								href="/"
								target="_blank"
								aria-label="Twitter"
							>
								<FaTwitter />
							</SocialIconLink>
							<SocialIconLink
								href="/"
								target="_blank"
								aria-label="Linkedin"
							>
								<FaLinkedin />
							</SocialIconLink>
						</SocialIcons>
					</SocialMediaWrapper>
				</SocialMedia>
			</FooterWrapper>
		</FooterContainer>
	);
}

export default Footer;
