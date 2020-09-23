import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, graphql } from 'gatsby';
import Img from "gatsby-image"
import Layout from 'components/Layout';

import video_flow_werchter_webm from 'assets/images/video/flow-werchter.webm';
import video_flow_werchter_mp4 from 'assets/images/video/flow-werchter.mp4';

export const query = graphql`
query {
    img_werchter_mobile: file(relativePath: {eq: "png/werchter-mobile.png"}) {
      childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    img_werchter_mobile_2: file(relativePath: {eq: "png/werchter-mobile-2.png"}) {
        childImageSharp {
          fluid {
              ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      img_werchter_mobile_3: file(relativePath: {eq: "png/werchter-mobile-3.png"}) {
        childImageSharp {
          fluid {
              ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      img_werchter_styletile: file(relativePath: {eq: "jpg/werchter-styletile.jpg"}) {
        childImageSharp {
          fluid {
              ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      img_werchter_grid: file(relativePath: {eq: "jpg/werchter-grid.jpg"}) {
        childImageSharp {
          fluid {
              ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      img_werchter_logo: file(relativePath: {eq: "png/werchter-logo.png"}) {
        childImageSharp {
          fluid {
              ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
  }
`

const WerchterPage = ({ data }) => {
        return (
            <Layout pageName="werchter">
                <Helmet>
                    <title>Rock Werchter - Dries Standaert - Design & Front-end</title>
                    <meta name="description" content="Overview on my Design and Front-end work for Rock Werchter"/>
                </Helmet>
                <main id="main-content">
                    <section className="c-row c-row--alpha c-row-hero">
                        <div className="f-grid">
                            <div className="f-col-bp1-4 f-col-bp2-10 f-col-bp3-8 c-hero" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" data-aos-anchor="hero">
                                <h1>Rock Werchter is an internationally acclaimed music festival. </h1>
                                <ul className="o-list o-list--horizontal c-tags--hero">
                                    <li className="o-list__item c-tag">UI design</li>
                                    <li className="o-list__item c-tag">HTML/CSS/JS</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section className="c-row c-row--padding u-bgcolor-gradient" data-aos="fade-up">
                        <div className="f-grid">
                            <div className="f-col-bp1-4 f-col-bp1-shift-0 f-col-bp3-8 f-col-bp3-shift-2">
                                <div className="c-mockup">
                                    <div className="c-mockup-mobile c-mockup-mobile--1 is-open">
                                        <Img fluid={data.img_werchter_mobile_2.childImageSharp.fluid} alt="Werchter mobile" />
                                    </div>
                                    <div className="c-mockup-mobile c-mockup-mobile--3 is-open">
                                        <Img fluid={data.img_werchter_mobile.childImageSharp.fluid} alt="Werchter mobile" />
                                    </div>
                                    <div className="c-mockup-mobile c-mockup-mobile--2 is-open">
                                        <Img fluid={data.img_werchter_mobile_3.childImageSharp.fluid} alt="Werchter mobile" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="c-row c-row--alpha">
                        <div className="f-grid">
                            <div className="f-col-bp1-4 f-col-bp2-8 f-col-bp3-6">
                                <div className="c-tile__content c-tile__content--text">
                                    <h2>Digital attitude</h2>
                                    <p>As a rock festival should be, Rock Werchter is well-known for its eclectic style. The objective was to align an existing print identity with a new online visibility and interact with frequent repeat visitors.</p>
                                    <p>Visit <a href="http://www.rockwerchter.be" target="_blank" rel="noreferrer" className="c-link">rockwerchter.be</a></p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="c-row c-row--beta c-row-normal">
                        <div className="f-grid">
                            <div className="f-col-bp1-4 f-col-bp1-shift-0 f-col-bp2-12 f-col-bp2-shift-0 f-col-bp3-8 f-col-bp3-shift-2">
                                <div className="c-tile__content c-tile__content--full">
                                    <figure className="u-ratio u-ratio-4x3">
                                        <Img fluid={data.img_werchter_styletile.childImageSharp.fluid} alt="Werchter style tile" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="c-row c-row--alpha">
                        <div className="f-grid">
                            <div className="f-col-bp1-4 f-col-bp2-8 f-col-bp3-6">
                                <div className="c-tile__content c-tile__content--text">
                                    <h2>Digital style tile</h2>
                                    <p>By creating a digital style tile and experimenting with CSS/JS animations we agreed on colour, font and graphical elements.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="c-row c-row--beta">
                        <div className="f-grid">
                            <div className="f-col-bp1-4 f-col-bp3-6 u-ver-center">
                                <div className="c-tile__content">
                                    <h2>Flexible grid system</h2>
                                    <p>Because new content is thrown at the website on a daily basis we used a flexible, cascading grid system to help us keep a consistent layout. This also makes it adaptive and mobile-friendly.</p>
                                </div>
                            </div>
                            <div className="f-col-bp1-4 f-col-bp3-6">
                                <div className="c-tile__content c-tile__content--full">
                                    <figure className="u-tablet u-break-right">
                                        <Img fluid={data.img_werchter_grid.childImageSharp.fluid} alt="Werchter grid" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="c-row c-row--beta">
                        <div className="f-grid u-reverse">
                            <div className="f-col-bp1-4 f-col-bp3-6 u-ver-center">
                                <div className="c-tile__content">
                                    <h2>Interactive design</h2>
                                    <p>By adding visually attractive 3D effects, gradient shifts and smooth page transitions users have a slick user experience that matches the style of the brand.</p>
                                </div>
                            </div>
                            <div className="f-col-bp1-4 f-col-bp3-6">
                                <div>
                                    <figure className="js-tilt">
                                        <Img fluid={data.img_werchter_logo.childImageSharp.fluid} alt="Werchter logo" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="c-row c-row-video c-row--beta u-mb-zeta" data-aos="fade-up">
                        <div className="f-grid">
                            <div className="f-col-bp1-4 f-col-bp1-shift-0 f-col-bp2-12 f-col-bp2-shift-0 f-col-bp3-8 f-col-bp3-shift-2">
                                <div className="c-browser c-browser--white">
                                    <div className="c-browser__content">
                                        <div>
                                            <video autoPlay loop muted width="100%" height="100%">
                                                <source src={video_flow_werchter_webm} type="video/webm" />
                                                <source src={video_flow_werchter_mp4} type="video/mp4" />
                                                    Sorry, your browser doesn't support embedded videos.
                                                </video>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="c-row u-nomargin u-bgcolor-neutral-x-light">
                        <div className="f-grid u-no-max-width">
                            <Link to="/" className="f-col-bp1-4 f-col-bp1-shift-0 f-col-bp3-6 f-col-bp3-shift-6 c-tile c-tile--link">
                                <div className="c-tile__content c-tile__content--link">
                                    <p className="c-tile__link-text c-tile__link-text--work"><span>All work</span></p>
                                </div>
                            </Link>
                        </div>
                    </section>
                </main>
            </Layout>
        )
    };

export default WerchterPage;

