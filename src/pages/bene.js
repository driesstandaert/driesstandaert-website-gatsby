import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, graphql } from 'gatsby';
import Img from "gatsby-image"
import Layout from 'components/Layout';

import img_bene_line2 from 'assets/images/svg/bene-line2.svg';
import img_bene_line from 'assets/images/svg/bene-line.svg';
import img_bene_brainstorm_1 from 'assets/images/jpg/bene-brainstorm-1.jpg';
import img_bene_brainstorm_2 from 'assets/images/jpg/bene-brainstorm-2.jpg';


export const query = graphql`
query {
    img_bene_logo: file(relativePath: {eq: "jpg/bene-logo.jpg"}) {
      childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    img_bene_explore: file(relativePath: {eq: "jpg/bene-explore.jpg"}) {
        childImageSharp {
          fluid {
              ...GatsbyImageSharpFluid_withWebp
          }
        }
    }
    img_bene_guidelines: file(relativePath: {eq: "jpg/bene-guidelines.jpg"}) {
        childImageSharp {
          fluid {
              ...GatsbyImageSharpFluid_withWebp
          }
        }
    }
  }
`


const BenePage = ({ data }) => {
        return (
            <Layout pageName="bene">
                <Helmet>
                    <title>Benevolent.ai - Dries Standaert - Design & Front-end</title>
                    <meta name="description" content="Overview on my Design work for Benevolent.ai"/>
                </Helmet>
                <main id="main-content">
                    <section className="c-row c-row--alpha c-row-hero">
                        <div className="f-grid">
                            <div className="f-col-bp1-4 f-col-bp2-10 f-col-bp3-8 c-hero" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" data-aos-anchor="hero">
                                <h1>Artificial intelligence and deep learning software for scientific purposes.</h1>
                                <ul className="o-list o-list--horizontal c-tags--hero">
                                    <li className="o-list__item c-tag">Identity design</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section className="c-row c-row--beta c-row-normal">
                        <div className="f-grid">
                            <div className="f-col-bp1-4 f-col-bp1-shift-0 f-col-bp3-8 f-col-bp3-shift-2">
                                <div>
                                    <Img fluid={data.img_bene_logo.childImageSharp.fluid} alt="Bene logo" />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="c-row c-row--alpha">
                        <div className="f-grid">
                            <div className="f-col-bp1-4 f-col-bp2-8 f-col-bp3-6">
                                <div className="c-tile__content c-tile__content--text">
                                    <h2>A new identity with meaning</h2>
                                    <p>Everything is data. We created a digital identity that is unique, personal and most of all different each time somebody encounters it. Based on current parameters the shape and colour changes, which creates a unique and meaningful experience.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="c-row c-row--beta">
                        <div className="f-grid">
                            <div className="f-col-bp1-4 f-col-bp3-6 c-tile" style={{ backgroundImage: "url(" + img_bene_brainstorm_2 + ")" }}>
                                <div className="c-tile__content c-tile__content--img">
                                    <figure className="u-ratio u-ratio-1x1">
                                        <img src={img_bene_line2} loading="lazy" alt="Bene reshape" />
                                    </figure>
                                </div>
                            </div>
                            <div className="f-col-bp1-4 f-col-bp3-6 c-tile" style={{ backgroundImage: "url(" + img_bene_brainstorm_1 + ")" }}>
                                <div className="c-tile__content c-tile__content--img">
                                    <figure className="u-ratio u-ratio-1x1">
                                        <img src={img_bene_line} loading="lazy" alt="Bene reshape" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="c-row c-row--alpha">
                        <div className="f-grid">
                            <div className="f-col-bp1-4 f-col-bp2-8 f-col-bp3-6">
                                <div className="c-tile__content c-tile__content--text">
                                    <h2>Brainstorm</h2>
                                    <p>Workshops gave us insight into what the company did, what it stands for and how it wanted to be perceived. Through brainstorm sessions and associative thinking we came up with a range of potential ideas.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="c-row c-row--beta c-row-normal">
                        <div className="f-grid">
                            <div className="f-col-bp1-4 f-col-bp1-shift-0 f-col-bp3-6 f-col-bp3-shift-3">
                                <div>
                                    <figure className="u-ratio u-ratio-1x2">
                                        <Img fluid={data.img_bene_explore.childImageSharp.fluid} alt="Bene explore" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="c-row c-row--alpha">
                        <div className="f-grid">
                            <div className="f-col-bp1-4 f-col-bp2-8 f-col-bp3-6">
                                <div className="c-tile__content c-tile__content--text">
                                    <h2>Exploration</h2>
                                    <p>Through sketching and illustrating, our ideas came alive and showed their dynamic potential. Eventually a selection of our proposals were presented to the client.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="c-row c-row-normal c-row--beta u-bg-bene-gradient">
                        <div className="f-grid">
                            <div className="f-col-bp1-4 f-col-bp1-shift-0 f-col-bp3-6 f-col-bp3-shift-3">
                                <div>
                                    <figure className="u-ratio u-ratio-4x3">
                                        <Img fluid={data.img_bene_guidelines.childImageSharp.fluid} alt="Bene guidelines" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="c-row u-nomargin u-bgcolor-neutral-x-light">
                        <div className="f-grid u-no-max-width">
                            <Link to="/ferret/" className="f-col-bp1-4 f-col-bp1-shift-0 f-col-bp3-6 f-col-bp3-shift-6 c-tile c-tile--link">
                                <div className="c-tile__content c-tile__content--link">
                                    <p className="c-tile__link-text c-tile__link-text--next"><span>Ferret.ai</span></p>
                                </div>
                            </Link>
                        </div>
                    </section>
                </main>
            </Layout>
        )
    }

export default BenePage;

