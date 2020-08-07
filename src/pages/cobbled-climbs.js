import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, graphql } from 'gatsby';
import Img from "gatsby-image"
import Layout from 'components/Layout';

export const query = graphql`
query {
    img_cc_homepage: file(relativePath: {eq: "jpg/cc-homepage.jpg"}) {
      childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    img_cc_theming_01: file(relativePath: {eq: "jpg/cc-theming-01.jpg"}) {
        childImageSharp {
          fluid {
              ...GatsbyImageSharpFluid_withWebp
          }
        }
    }
    img_cc_theming_02: file(relativePath: {eq: "jpg/cc-theming-02.jpg"}) {
        childImageSharp {
          fluid {
              ...GatsbyImageSharpFluid_withWebp
          }
        }
    }
  }
`

const CobbledClimbsPage = ({ data }) => {
    return (
        <Layout pageName="cobbled-climbs">
            <Helmet>
                <title>Cobbled Climbs - Dries Standaert - Design & Front-end</title>
                <meta name="description" content="Overview on my personal React/Redux project for Cobbled Climbs"/>
            </Helmet>
            <main id="main-content">
                <section className="c-row c-row--alpha c-row-hero">
                    <div className="f-grid">
                        <div className="f-col-bp1-4 f-col-bp2-10 f-col-bp3-8 c-hero" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" data-aos-anchor="hero">
                            <h1>Cobbled Climbs is a personal project to explore React/Redux, SVG graphs and theming.</h1>
                            <ul className="o-list o-list--horizontal c-tags--hero">
                                <li className="o-list__item c-tag">UI design</li>
                                <li className="o-list__item c-tag">HTML/CSS/JS</li>
                                <li className="o-list__item c-tag">React</li>
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
                                        <Img fluid={data.img_cc_homepage.childImageSharp.fluid} alt="Cobbled Climbs homepage" />
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
                                <h2 className="u-mb-gamma">Lifecycling with React</h2>
                                <p>As a fan of <a href="https://www.youtube.com/watch?v=PUenwjIYy4s" target="_blank" rel="noreferrer" className="c-link">Cobbled Classic</a> races I have created a side project to learn and explore React-related challenges.
                        I've set up a React environment with Redux to pass states along components and route urls via a select dropdown.</p>
                                <p>Visit <a href="https://cobbled-climbs.herokuapp.com/" target="_blank" rel="noreferrer" className="c-link">cobbled-climbs.herokuapp.com</a><br /> or <a href="https://github.com/driesstandaert/cobbled-climbs" target="_blank" rel="noreferrer" className="c-link">View on Github</a></p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="c-row c-row--beta c-row-normal u-bgcolor-cc-base">
                    <div className="f-grid">
                        <div className="f-col-bp1-4 f-col-bp1-shift-0 f-col-bp3-8 f-col-bp3-shift-2" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" data-aos-anchor="hero">
                            <div>
                                <svg viewBox="0 0 900 300" overflow="visible" className="c-profile__svg">
                                    <style>

                                        {`.c-profile__path { fill:#D9292B; box-shadow: 0px -10px 30px 0px rgba(0,0,0,0.75); }`}
                                        {`.c-profile__shadow-path { stroke - width: 0; fill: #000; opacity: .1; }`}
                                    </style>
                                    <g><path className="c-profile__path" d="M 0 300 L 0 300  L 128.57142857142856 250  L 257.1428571428571 231.25  L 385.71428571428567 187.5  L 514.2857142857142 125  L 642.8571428571429 62.5  L 771.4285714285713 37.5  L 900 0 L 900 300"></path><path className="c-profile__shadow-path" d="M 0 300 L 0 300 L 0 300 L 128.57142857142856 250 L 128.57142857142856 300 L 257.1428571428571 231.25 L 257.1428571428571 300 L 385.71428571428567 187.5 L 385.71428571428567 300 L 514.2857142857142 125 L 514.2857142857142 300 L 642.8571428571429 62.5 L 642.8571428571429 300 L 771.4285714285713 37.5 L 771.4285714285713 300 L 900 0 L 900 300L 900 300"></path></g></svg>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="c-row c-row--alpha">
                    <div className="f-grid">
                        <div className="f-col-bp1-4 f-col-bp2-10 f-col-bp3-6">
                            <div className="c-tile__content c-tile__content--text">
                                <h2 className="u-mb-gamma">SVG</h2>
                                <p>I am injecting JSON data to create an SVG path calculating the coordinates based on the altitude and length values of a climb. The graph is fully responsive and text labels are rendered outside of the SVG to be able to style/resize them. </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="c-row c-row--beta">
                    <div className="f-grid">
                        <div className="f-col-bp1-4 f-col-bp2-10 f-col-bp3-6 u-ver-center">
                            <div className="c-tile__content c-tile__content--text">
                                <h2 className="u-mb-gamma">Theming</h2>
                                <p>With a data-theme attribute I control different themes through css variables. Every theme change is passed into a reducer state.</p>
                            </div>
                        </div>
                        <div className="f-col-bp1-4 f-col-bp2-10 f-col-bp3-6">
                            <div className="c-tile__content c-tile__content--full">
                                <div className="c-browser c-browser--white u-break-right">
                                    <div className="u-crossfade">
                                        <Img fluid={data.img_cc_theming_01.childImageSharp.fluid} alt="Cobbled Climbs theme Raleigh-Panasonic" />
                                        <Img fluid={data.img_cc_theming_02.childImageSharp.fluid} alt="Cobbled Climbs theme Raleigh-Molteni" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="c-row c-row--alpha">
                    <div className="f-grid">
                        <div className="f-col-bp1-4 f-col-bp2-10 f-col-bp3-6" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" data-aos-anchor="hero">
                            <div className="c-tile__content">
                                <h2>Any ideas?</h2>
                                <p>If you have any feedback or ideas, <a href="#contact">drop me a line</a>.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="c-row u-nomargin u-bgcolor-neutral-x-light">
                    <div className="f-grid u-no-max-width">
                        <Link to="/sp/" className="f-col-bp1-4 f-col-bp1-shift-0 f-col-bp3-6 f-col-bp3-shift-6 c-tile c-tile--link">
                            <div className="c-tile__content c-tile__content--link">
                                <p className="c-tile__link-text c-tile__link-text--next"><span>S&P Global</span></p>
                            </div>
                        </Link>
                    </div>
                </section>
            </main>
        </Layout>
    )
};

export default CobbledClimbsPage;