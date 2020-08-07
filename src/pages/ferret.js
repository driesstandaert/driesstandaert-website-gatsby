import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link, graphql } from 'gatsby';
import Img from "gatsby-image"
import Layout from 'components/Layout';

import img_dave_01_scientist_scatter_nopaper from 'assets/images/svg/dave-01-scientist-scatter-nopaper.svg';
import img_ferret_animation from 'assets/images/gif/ferret-animation.gif';
import video_flow_ferret_webm from 'assets/images/video/flow-ferret.webm';
import video_flow_ferret_mp4 from 'assets/images/video/flow-ferret.mp4';

export const query = graphql`
query {
    img_ferret_logo: file(relativePath: {eq: "jpg/ferret-logo.jpg"}) {
      childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    img_ferret_screen_team: file(relativePath: {eq: "jpg/ferret-screen-team.jpg"}) {
        childImageSharp {
          fluid {
              ...GatsbyImageSharpFluid_withWebp
          }
        }
    }
  }
`

const FerretPage = ({ data }) => {
    useEffect(() => {
        // Wobble animation
        const paperstack = document.querySelector(".js-paperstack")

        if (paperstack) {
            function wobblePaperstack() {
                paperstack.classList.add('animated', 'wobble');
            };
            paperstack.addEventListener('mouseover', wobblePaperstack);

            paperstack.addEventListener('mouseout', () => {
                setTimeout(() => {
                    paperstack.classList.remove('animated', 'wobble');
                }, 500);
            });
        }
    });
    return (
        <Layout pageName="ferret">
            <Helmet>
                <title>Ferret.ai - Dries Standaert - Design & Front-end</title>
                <meta name="description" content="Overview on my Design and Front-end work for Ferret.ai"/>
            </Helmet>
            <main id="main-content">
                <section className="c-row c-row--alpha c-row-hero">
                    <div className="f-grid">
                        <div className="f-col-bp1-4 f-col-bp2-10 f-col-bp3-8 c-hero" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" data-aos-anchor="hero">
                            <h1>Ferret.ai is a Chrome extension that summarizes/enriches articles and provides full-text search on your reading history.</h1>
                            <span className="c-hero__tags">Identity design, illustration, UI design, HTML/CSS/JS</span>
                        </div>
                    </div>
                </section>
                <section className="c-row c-row--beta c-row-normal u-bgcolor-ferret-x-light">
                    <div className="f-grid">
                        <div className="f-col-bp1-4 f-col-bp1-shift-0 f-col-bp3-8 f-col-bp3-shift-2">
                            <div className="c-tile__content">
                                <div className="c-scatter__animation">
                                    <div className="c-papersheet-wrapper">
                                        <span href="#story" className="c-papersheet bounce"></span>
                                        <span href="#story" className="c-papersheet c-papersheet2 bounce2"></span>
                                        <span href="#story" className="c-papersheet bounce3"></span>
                                    </div>
                                    <div className="c-paperstack js-paperstack"></div>
                                    <img src={img_dave_01_scientist_scatter_nopaper} alt="Ferret animation" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="c-row c-row--alpha">
                    <div className="f-grid">
                        <div className="f-col-bp1-4 f-col-bp2-8 f-col-bp3-6">
                            <div className="c-tile__content c-tile__content--text">
                                <h2>A digital identity that differs from the competition</h2>
                                <p>In order to stand out amongst other scientific tools we came up with a superhero storyline. The goal was to create an engaging identity to attract and delight new users.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="c-row c-row--beta c-row-normal">
                    <div className="f-grid">
                        <div className="f-col-bp1-4 f-col-bp1-shift-0 f-col-bp3-6 f-col-bp3-shift-3">
                            <div>
                                <figure className="u-ratio u-ratio-4x3">
                                    <Img fluid={data.img_ferret_logo.childImageSharp.fluid} alt="Ferret logo" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="c-row c-row--alpha">
                    <div className="f-grid">
                        <div className="f-col-bp1-4 f-col-bp2-8 f-col-bp3-6">
                            <div className="c-tile__content c-tile__content--text">
                                <h2>Fresh & iconic style</h2>
                                <p>Based on our storyline I designed a scalable and stand-alone logo resembling a superhero shield. To enhance the storyline I created multiple characters that are used in different media, including the website, an instruction video and successful marketing campaigns.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="c-row c-row-normal u-bgcolor-ferret-x-light">
                    <div className="f-grid">
                        <div className="f-col-bp1-4 f-col-bp1-shift-0 f-col-bp3-6 f-col-bp3-shift-3">
                            <div>
                                <figure className="u-ratio u-ratio-4x3">
                                    <img src={img_ferret_animation} alt="Ferret animation" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="c-row c-row--alpha">
                    <div className="f-grid">
                        <div className="f-col-bp1-4 f-col-bp2-8 f-col-bp3-6">
                            <div className="c-tile__content c-tile__content--text">
                                <h2>Micro-interactions</h2>
                                <p>All assets are easy to animate to enhance the user experience and surprise and delight new customers.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="c-row c-row-normal c-row--beta">
                    <div className="f-grid">
                        <div className="f-col-bp1-4 f-col-bp1-shift-0 f-col-bp3-8 f-col-bp3-shift-2">
                            <div className="c-browser c-browser--white">
                                <div className="c-browser__content">
                                    <div>
                                        <video autoPlay loop muted width="100%" height="100%">
                                            <source src={video_flow_ferret_webm} type="video/webm" />
                                            <source src={video_flow_ferret_mp4} type="video/mp4" />
                                                    Sorry, your browser doesn't support embedded videos.
                                                </video>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="f-col-bp1-4 f-col-bp1-shift-0 f-col-bp3-6 f-col-bp3-shift-3 u-pt-zeta">
                            <figure className="u-ratio u-ratio-1x1 c-browser c-browser--white">
                                <Img fluid={data.img_ferret_screen_team.childImageSharp.fluid} alt="Ferret screen team" />
                            </figure>
                        </div>
                    </div>
                </section>
                <section className="c-row u-nomargin u-bgcolor-neutral-x-light">
                    <div className="f-grid u-no-max-width">
                        <Link to="/cobbled-climbs/" className="f-col-bp1-4 f-col-bp1-shift-0 f-col-bp3-6 f-col-bp3-shift-6 c-tile c-tile--link">
                            <div className="c-tile__content c-tile__content--link">
                                <p className="c-tile__link-text c-tile__link-text--next"><span>Cobbled Climbs</span></p>
                            </div>
                        </Link>
                    </div>
                </section>
            </main>
        </Layout>
    )
}
export default FerretPage;