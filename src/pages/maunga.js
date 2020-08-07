import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, graphql } from 'gatsby';
import Img from "gatsby-image"
import Layout from 'components/Layout';

export const query = graphql`
query {
    img_maunga_logo: file(relativePath: {eq: "jpg/maunga-logo.jpg"}) {
      childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    img_maunga_app: file(relativePath: {eq: "jpg/maunga-app.jpg"}) {
        childImageSharp {
          fluid {
              ...GatsbyImageSharpFluid_withWebp
          }
        }
    }
  }
`

const MaungaPage = ({ data }) => {
    return (
        <Layout pageName="maunga">
            <Helmet>
                <title>Maunga - Dries Standaert - Design & Front-end</title>
                <meta name="description" content="Overview on personal project design work for Maunga"/>
            </Helmet>
            <main id="main-content">
                <section className="c-row c-row--alpha c-row-hero">
                    <div className="f-grid">
                        <div className="f-col-bp1-4 f-col-bp2-10 f-col-bp3-8 c-hero" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" data-aos-anchor="hero">
                            <h1>Maunga will enable you to plan a hike beforehand, track it during and share it afterwards.</h1>
                            <span className="c-hero__tags">Identity design, UI design</span>
                        </div>
                    </div>
                </section>
                <section className="c-row c-row--beta c-row-normal">
                    <div className="f-grid">
                        <div className="f-col-bp1-4 f-col-bp1-shift-0 f-col-bp3-6 f-col-bp3-shift-3 u-mb-zeta">
                            <div>
                                <figure className="u-ratio u-ratio-4x3">
                                    <Img fluid={data.img_maunga_logo.childImageSharp.fluid} alt="Maunga logo" />
                                </figure>
                            </div>
                        </div>
                        <div className="f-col-bp1-4 f-col-bp1-shift-0 f-col-bp3-6 f-col-bp3-shift-3">
                            <div>
                                <figure className="u-ratio u-ratio-4x3">
                                    <Img fluid={data.img_maunga_app.childImageSharp.fluid} alt="Maunga app" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="c-row c-row--alpha">
                    <div className="f-grid">
                        <div className="f-col-bp1-4 f-col-bp2-10 f-col-bp3-6" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" data-aos-anchor="hero">
                            <div className="c-tile__content">
                                <h2>Personal project</h2>
                                <p>I <span className="u-heart">&#9829;</span> the outdoors and I feel there is a need for a hiking application that focuses more on altitude and distance than your location on a map.</p>
                                <p>If you have any feedback or ideas, <a href="#contact">drop me a line</a>.</p>
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
}

export default MaungaPage;

