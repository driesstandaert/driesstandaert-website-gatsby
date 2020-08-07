import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, graphql } from 'gatsby';
import Img from "gatsby-image"
import Layout from 'components/Layout';

export const query = graphql`
query {
    img_sp_template: file(relativePath: {eq: "jpg/sp-template.jpg"}) {
      childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    img_sp_uikit: file(relativePath: {eq: "jpg/sp-uikit.jpg"}) {
        childImageSharp {
          fluid {
              ...GatsbyImageSharpFluid_withWebp
          }
        }
    }
  }
`


const SPPage = ({ data }) => {
    return (
        <Layout pageName="sp">
            <Helmet>
                <title>S&P Global - Dries Standaert - Design & Front-end</title>
                <meta name="description" content="Overview on my Design and Front-end work for S$P Global"/>
            </Helmet>
            <main id="main-content">
                <section className="c-row c-row--alpha c-row-hero">
                    <div className="f-grid">
                        <div className="f-col-bp1-4 f-col-bp2-10 f-col-bp3-8 c-hero" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" data-aos-anchor="hero">
                            <h1>S&P Global Marketplace provides real-time datasets and solutions to investors.</h1>
                            <span className="c-hero__tags">UI design, Figma, React</span>
                        </div>
                    </div>
                </section>
                <section className="c-row c-row-normal u-bgcolor-sp-dark">
                    <div className="f-grid">
                        <div className="f-col-bp1-4 f-col-bp1-shift-0 f-col-bp3-8 f-col-bp3-shift-2">
                            <div className="c-browser c-browser--white" data-aos="fade-up">
                                <div className="c-browser__content c-browser__content--scrollable">
                                    <div>
                                        <Img fluid={data.img_sp_template.childImageSharp.fluid} alt="S&P global template" />
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
                                <h2>Remote teamwork</h2>
                                <p>A close, yet remote relationship with our client was vital to understand, design and develop a functional marketplace where investors, advisors, and wealth managers can explore a wide variety of datasets and applications.</p>
                                <p>Visit <a href="https://www.marketplace.spglobal.com/" target="_blank" rel="noreferrer" className="c-link">marketplace.spglobal.com</a></p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="c-row c-row--beta">
                    <div className="f-grid u-reverse">
                        <div className="f-col-bp1-4 f-col-bp3-6 u-ver-center">
                            <div className="c-tile__content">
                                <h2>UI kit</h2>
                                <p>We used Figma to explore, design and to communicate with the client remotely. The ultimate result was a webplatform built with React and a UI kit to be used by an inhouse design team to build on.</p>
                            </div>
                        </div>
                        <div className="f-col-bp1-4 f-col-bp3-6">
                            <div className="c-tile__content c-tile__content--img">
                                <figure>
                                    <Img fluid={data.img_sp_uikit.childImageSharp.fluid} alt="S&P Global UI kit figma" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="c-row c-row--beta">
                    <div className="f-grid">
                        <div className="f-col-bp1-4 f-col-bp1-shift-0 f-col-bp3-12" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" data-aos-anchor="hero">
                            <div className="c-sp__graph">
                                <div className="c-sp__bars">
                                    <span className="c-sp__bar"><span></span></span>
                                    <span className="c-sp__bar"><span></span></span>
                                    <span className="c-sp__bar"><span></span></span>
                                    <span className="c-sp__bar"><span></span></span>
                                    <span className="c-sp__bar"><span></span></span>
                                    <span className="c-sp__bar"><span></span></span>
                                    <span className="c-sp__bar"><span></span></span>
                                    <span className="c-sp__bar"><span></span></span>
                                    <span className="c-sp__bar"><span></span></span>
                                    <span className="c-sp__bar"><span></span></span>
                                    <span className="c-sp__bar"><span></span></span>
                                    <span className="c-sp__bar"><span></span></span>
                                    <span className="c-sp__bar"><span></span></span>
                                    <span className="c-sp__bar"><span></span></span>
                                    <span className="c-sp__bar"><span></span></span>
                                    <span className="c-sp__bar"><span></span></span>
                                    <span className="c-sp__bar"><span></span></span>
                                    <span className="c-sp__bar"><span></span></span>
                                    <span className="c-sp__bar"><span></span></span>
                                    <span className="c-sp__bar"><span></span></span>
                                    <span className="c-sp__bar"><span></span></span>
                                    <span className="c-sp__bar"><span></span></span>
                                    <span className="c-sp__bar"><span></span></span>
                                    <span className="c-sp__bar"><span></span></span>
                                    <span className="c-sp__bar"><span></span></span>
                                    <span className="c-sp__bar"><span></span></span>
                                    <span className="c-sp__bar"><span></span></span>
                                    <span className="c-sp__bar"><span></span></span>
                                    <span className="c-sp__bar"><span></span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="c-row c-row--alpha">
                    <div className="f-grid">
                        <div className="f-col-bp1-4 f-col-bp2-10 f-col-bp3-6">
                            <div className="c-tile__content c-tile__content--text">
                                <h2>Animation</h2>
                                <p>To enhance user experience and secure the marketplace platform within the overall brand we added some coded animation. I have used  <a href="http://codepen.io/driesstandaert/" target="_blank" rel="noreferrer">Codepen</a> to explore interaction patterns and ideas to feed our team developers.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="c-row u-nomargin u-bgcolor-neutral-x-light">
                    <div className="f-grid u-no-max-width">
                        <Link to="/atlascopco/" className="f-col-bp1-4 f-col-bp1-shift-0 f-col-bp3-6 f-col-bp3-shift-6 c-tile c-tile--link">
                            <div className="c-tile__content c-tile__content--link">
                                <p className="c-tile__link-text c-tile__link-text--next"><span>Atlas Copco</span></p>
                            </div>
                        </Link>
                    </div>
                </section>
            </main>
        </Layout>
    )
};

export default SPPage;

