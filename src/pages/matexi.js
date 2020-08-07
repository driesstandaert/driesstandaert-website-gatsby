import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, graphql } from 'gatsby';
import Img from "gatsby-image"
import Layout from 'components/Layout';

import video_flow_matexi_webm from 'assets/images/video/flow-matexi.webm';
import video_flow_matexi_mp4 from 'assets/images/video/flow-matexi.mp4';

export const query = graphql`
query {
  img_matexi_styletile: file(relativePath: {eq: "jpg/matexi-styletile.jpg"}) {
      childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    img_matexi_screen_results_map: file(relativePath: {eq: "jpg/matexi-screen-results-map.jpg"}) {
        childImageSharp {
          fluid {
              ...GatsbyImageSharpFluid_withWebp
          }
        }
    }
    img_matexi_components: file(relativePath: {eq: "jpg/matexi-components.jpg"}) {
      childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid_withWebp
        }
      }
  }
  }
`


const MatexiPage = ({ data }) => {
    return (
      <Layout pageName="matexi">
        <Helmet>
          <title>Matexi - Dries Standaert - Design & Front-end</title>
          <meta name="description" content="Overview on my Design and Front-end work for Matexi"/>
        </Helmet>
        <main id="main-content">
          <section className="c-row c-row--alpha c-row-hero">
            <div className="f-grid">
              <div className="f-col-bp1-4 f-col-bp2-10 f-col-bp3-8 c-hero" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" data-aos-anchor="hero">
                <h1>Matexi is a property developer that creates sustainable and ecological neighbourhoods.</h1>
                <ul className="o-list o-list--horizontal c-tags--hero">
                  <li className="o-list__item c-tag">UI design</li>
                  <li className="o-list__item c-tag">HTML/CSS/JS</li>
                </ul>
              </div>
            </div>
          </section>
          <section className="c-row c-row-video c-row--beta" data-aos="fade-up">
            <div className="f-grid">
              <div className="f-col-bp1-4 f-col-bp1-shift-0 f-col-bp3-8 f-col-bp3-shift-2">
                <div className="c-browser c-browser--white" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" data-aos-delay="600">
                  <div className="c-browser__content">
                    <div>
                      <video autoPlay loop muted width="100%" height="100%">
                        <source src={video_flow_matexi_webm} type="video/webm" />
                        <source src={video_flow_matexi_mp4} type="video/mp4" />
                          Sorry, your browser doesn't support embedded videos.
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="c-row c-row--alpha">
            <div className="f-grid">
              <div className="f-col-bp1-4 f-col-bp2-10 f-col-bp3-6" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" data-aos-anchor="hero">
                <div className="c-tile__content c-tile__content--text">
                  <h2 className="u-mb-gamma">A user-centric and mobile-friendly platform</h2>
                  <p>The online platform provides a tailored catalogue that shows projects in multiple locations using one search. Through in-depth interviews, workshops and a close collaboration with the client we created user experience maps. Whilst being involved in all these steps, my main focus was to agree on a digital design language and also design Low-fi and High-fi prototypes.</p>
                  <p>Visit <a href="http://www.matexi.be" target="_blank" rel="noreferrer" className="c-link">matexi.be</a></p>
                </div>
              </div>
            </div>
          </section>
          <section className="c-row c-row--beta c-row-normal">
            <div className="f-grid">
              <div className="f-col-bp1-4 f-col-bp1-shift-0 f-col-bp3-8 f-col-bp3-shift-2" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" data-aos-anchor="hero">
                <div>
                  <figure className="u-ratio u-ratio-4x3">
                    <Img fluid={data.img_matexi_styletile.childImageSharp.fluid} alt="Matexi style" />
                  </figure>
                </div>
              </div>
            </div>
          </section>
          <section className="c-row c-row--alpha">
            <div className="f-grid">
              <div className="f-col-bp1-4 f-col-bp2-10 f-col-bp3-6">
                <div className="c-tile__content c-tile__content--text">
                  <h2 className="u-mb-gamma">Style tile</h2>
                  <p>Matexi had an existing identity that merely focussed on print and advertising. In order to avoid design and branding discussions later on in the process we created a digital style tile to agree on colour, font, icons, etc. </p>
                </div>
              </div>
            </div>
          </section>
          <section className="c-row u-bgcolor-matexi-base">
            <div className="f-grid">
              <div className="f-col-bp1-4 f-col-bp2-10 f-col-bp3-6 u-ver-center">
                <div className="c-tile__content c-tile__content--text">
                  <h2 className="u-mb-gamma u-color-neutral-x-light">Low-fi to High-fi prototyping</h2>
                  <p className="u-color-neutral-x-light">We worked in 2 week design sprints, each sprint focussing on specific features instead of templates. This way we were able to create those features from sketching over low-fi prototyping into a high-Fi design in html/css.</p>
                </div>
              </div>
              <div className="f-col-bp1-4 f-col-bp2-10 f-col-bp3-6">
                <div className="c-tile__content c-tile__content--full">
                  <figure className="c-browser c-browser--white u-break-right">
                    <Img fluid={data.img_matexi_screen_results_map.childImageSharp.fluid} alt="Matexi screen results" />
                  </figure>
                </div>
              </div>
            </div>
          </section>
          <section className="c-row c-row--alpha">
            <div className="f-grid u-reverse">
              <div className="f-col-bp1-4 f-col-bp2-10 f-col-bp3-6 u-ver-center">
                <div className="c-tile__content">
                  <h2 className="u-mb-gamma">A flexible component library</h2>
                  <p>From start to finish we reduced the amount of components as much as possible, whilst ensuring they could be used for different content. It kept the codebase easy to maintain and made it more flexible for content managers to build templates.</p>
                </div>
              </div>
              <div className="f-col-bp1-4 f-col-bp2-12 f-col-bp3-6">
                <div className="c-tile__content c-tile__content--img">
                  <figure>
                    <Img fluid={data.img_matexi_components.childImageSharp.fluid} alt="Matexi components" />
                  </figure>
                </div>
              </div>
            </div>
          </section>
          <section className="c-row u-nomargin u-bgcolor-neutral-x-light">
            <div className="f-grid u-no-max-width">
              <Link to="/maunga/" className="f-col-bp1-4 f-col-bp1-shift-0 f-col-bp3-6 f-col-bp3-shift-6 c-tile c-tile--link">
                <div className="c-tile__content c-tile__content--link">
                  <p className="c-tile__link-text c-tile__link-text--next"><span>Maunga</span></p>
                </div>
              </Link>
            </div>
          </section>
        </main>
      </Layout>
    )
  };

export default MatexiPage;

