import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, graphql } from 'gatsby';
import Img from "gatsby-image"

import Layout from 'components/Layout';

export const query = graphql`
query {
    img_ac_patterns: file(relativePath: {eq: "jpg/ac-patterns.jpg"}) {
      childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    img_ac_screen_styleguide: file(relativePath: {eq: "jpg/ac-screen-styleguide.jpg"}) {
        childImageSharp {
          fluid {
              ...GatsbyImageSharpFluid_withWebp
          }
        }
    }
    img_ac_template: file(relativePath: {eq: "jpg/ac-template.jpg"}) {
      childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    img_ac_screen_list: file(relativePath: {eq: "jpg/ac-screen-list.jpg"}) {
        childImageSharp {
          fluid {
              ...GatsbyImageSharpFluid_withWebp
          }
        }
    }
  }
`


const ACPage = ({data}) => {  
    return (
      <Layout pageName="atlas-copco">
        <Helmet>
          <title>Atlas Copco - Dries Standaert - Design & Front-end</title>
          <meta name="description" content="Overview on my Design and Front-end work for Atlas Copco"/>
        </Helmet>
        <main id="main-content">
          <section className="c-row c-row--alpha c-row-hero">
            <div className="f-grid">
              <div className="f-col-bp1-4 f-col-bp2-10 f-col-bp3-8 c-hero" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" data-aos-anchor="hero">
                <h1>An extensive pattern library with styleguide and templates.</h1>
                <ul className="o-list o-list--horizontal c-tags--hero">
                  <li className="o-list__item c-tag">UI design</li>
                  <li className="o-list__item c-tag">HTML/CSS/JS</li>
                </ul>
              </div>
            </div>
          </section>
          <section className="c-row c-row-normal u-bgcolor-ac-base">
            <div className="f-grid">
              <div className="f-col-bp1-4 f-col-bp1-shift-0 f-col-bp3-8 f-col-bp3-shift-2">
                <div className="c-browser c-browser--white" data-aos="fade-up">
                  <div className="c-browser__content c-browser__content--scrollable">
                    <div>
                      <Img fluid={data.img_ac_patterns.childImageSharp.fluid} alt="AC patterns" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="c-row c-row--alpha">
            <div className="f-grid u-reverse">
              <div className="f-col-bp1-4 f-col-bp3-6 u-ver-center">
                <div className="c-tile__content">
                  <h2>Digital brand guidelines</h2>
                  <p>The goal was to translate existing print-based brand guidelines into a digital styleguide which provided greater flexibility. The project contained a styleguide with guidelines, components and templates.</p>
                </div>
              </div>
              <div className="f-col-bp1-4 f-col-bp3-6">
                <div className="c-tile__content c-tile__content--img">
                  <figure>
                    <Img fluid={data.img_ac_screen_styleguide.childImageSharp.fluid} alt="AC screen styleguide" />
                  </figure>
                </div>
              </div>
            </div>
          </section>
          <section className="c-row c-row--beta c-row-normal">
            <div className="f-grid">
              <div className="f-col-bp1-4 f-col-bp1-shift-0 f-col-bp3-6 f-col-bp3-shift-3">
                <div className="c-browser c-browser--white" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                  <figure>
                    <Img fluid={data.img_ac_template.childImageSharp.fluid} alt="AC template" />
                  </figure>
                </div>
              </div>
            </div>
          </section>
          <section className="c-row c-row--alpha">
            <div className="f-grid">
              <div className="f-col-bp1-4 f-col-bp2-8 f-col-bp3-6">
                <div className="c-tile__content c-tile__content--text">
                  <h2>Components and template</h2>
                  <p>All components can be placed underneath each other without breaking the responsive layout. The entire pattern library is build in html/css and Jekyll.</p>
                </div>
              </div>
            </div>
          </section>
          <section className="c-row c-row--beta">
            <div className="f-grid u-reverse">
              <div className="f-col-bp1-4 f-col-bp3-6 u-ver-center">
                <div className="c-tile__content">
                  <h2>Pattern library</h2>
                  <p>Our pattern library is a collection of user interface elements that can appear multiple times across the website. The purpose is to have consistency in user experience and enhance maintainability. </p>
                </div>
              </div>
              <div className="f-col-bp1-4 f-col-bp3-6">
                <div className="c-tile__content c-tile__content--img">
                  <figure>
                    <Img fluid={data.img_ac_screen_list.childImageSharp.fluid} alt="AC screen list" />
                  </figure>
                </div>
              </div>
            </div>
          </section>
          <section className="c-row u-nomargin u-bgcolor-neutral-x-light">
            <div className="f-grid u-no-max-width">
              <Link to="/bene/" className="f-col-bp1-4 f-col-bp1-shift-0 f-col-bp3-6 f-col-bp3-shift-6 c-tile c-tile--link">
                <div className="c-tile__content c-tile__content--link">
                  <p className="c-tile__link-text c-tile__link-text--next"><span>Benevolent.ai</span></p>
                </div>
              </Link>
            </div>
          </section>
        </main>
      </Layout>
    )
  };

export default ACPage;

