import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link, graphql } from 'gatsby';
import Img from "gatsby-image"

import LayoutHome from 'components/LayoutHome';

export const query = graphql`
query {
    img_ferret_teaser: file(relativePath: {eq: "jpg/ferret-teaser.jpg"}) {
      childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    img_cc_teaser: file(relativePath: {eq: "jpg/cc-teaser.jpg"}) {
        childImageSharp {
          fluid {
              ...GatsbyImageSharpFluid_withWebp
          }
        }
    }
    img_sp_teaser: file(relativePath: {eq: "jpg/sp-teaser.jpg"}) {
        childImageSharp {
          fluid {
              ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      img_ac_teaser: file(relativePath: {eq: "jpg/ac-teaser-1x2.jpg"}) {
        childImageSharp {
          fluid {
              ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      img_bene_teaser: file(relativePath: {eq: "jpg/bene-teaser.jpg"}) {
        childImageSharp {
          fluid {
              ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      img_werchter_teaser: file(relativePath: {eq: "jpg/werchter-teaser.jpg"}) {
        childImageSharp {
          fluid {
              ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      img_matexi_teaser: file(relativePath: {eq: "jpg/matexi-teaser.jpg"}) {
        childImageSharp {
          fluid {
              ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      img_maunga_teaser: file(relativePath: {eq: "jpg/maunga-teaser.jpg"}) {
        childImageSharp {
          fluid {
              ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      img_about: file(relativePath: {eq: "jpg/about.jpg"}) {
        childImageSharp {
          fluid {
              ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
  }
`


const IndexPage = ({ data }) => {
    useEffect(() => {
        // Tooltip (not on mobile)
        if (window.matchMedia('(min-width:678px)').matches)
            document.querySelectorAll('.js-toolbox').forEach(el => {
                el.addEventListener('mousemove', event => {
                    const position = el.getBoundingClientRect();
                    const x = event.clientX - position.left - 70;
                    const y = event.clientY - position.top + 20;
                    el.getElementsByClassName('js-tooltip')[0].style.left = x + "px";
                    el.getElementsByClassName('js-tooltip')[0].style.top = y + "px";
                })
            })
    });
    return (
        <LayoutHome pageName="home">
            <Helmet>
                <title>Dries Standaert - Design & Front-end</title>
                <meta name="description" content="Designer and Front-end developer that handles projects in a mature way and enable design teams to achieve effective results."/>
            </Helmet>
            <section className="c-row c-row-intro" id="hero">
                <div className="f-grid">
                    <div className="f-col-bp1-4 f-col-bp1-shift-0 f-col-bp2-10 f-col-bp2-shift-1 f-col-bp3-10 f-col-bp3-shift-1 u-ver-center u-hor-center">
                        <div className="c-intro">
                            <h1 className="c-intro__title">
                                <span data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" data-aos-delay="800" data-aos-anchor="hero">I design user interfaces</span><br />
                                <span data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" data-aos-delay="1200" data-aos-anchor="hero">and digital identities.</span>
                            </h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className="c-row c-gallery u-mb-gamma" id="work" data-aos="fade-up" data-aos-anchor="hero" data-aos-delay="1800">
                <Link to="/ferret/" className="c-gallery__item c-gallery__item--1 u-bgcolor-ferret-light js-toolbox">
                    <Img fluid={data.img_ferret_teaser.childImageSharp.fluid} alt="Ferret.ai teaser" className="c-gallery__img" />
                    <h2 className="c-gallery__caption js-tooltip">Ferret.ai</h2>
                </Link>
                <Link to="/cobbled-climbs/" className="c-gallery__item c-gallery__item--2 u-bgcolor-cc-base js-toolbox">
                    <Img fluid={data.img_cc_teaser.childImageSharp.fluid} alt="Cobbled climbs teaser" className="c-gallery__img" />
                    <h2 className="c-gallery__caption js-tooltip">Cobbled Climbs</h2>
                </Link>
                <Link to="/sp/" className="c-gallery__item c-gallery__item--3 u-bgcolor-sp-dark js-toolbox">
                    <Img fluid={data.img_sp_teaser.childImageSharp.fluid} alt="S&P Global teaser" className="c-gallery__img" />
                    <h2 className="c-gallery__caption js-tooltip">S&P Global</h2>
                </Link>
                <Link to="/atlascopco/" className="c-gallery__item c-gallery__item--4 u-bgcolor-ac-base js-toolbox">
                    <Img fluid={data.img_ac_teaser.childImageSharp.fluid} alt="Atlas Copco teaser" className="c-gallery__img" />
                    <h2 className="c-gallery__caption js-tooltip">Atlas Copco</h2>
                </Link>
                <Link to="/bene/" className="c-gallery__item c-gallery__item--5 u-bgcolor-bene-base js-toolbox">
                    <Img fluid={data.img_bene_teaser.childImageSharp.fluid} alt="Benevolent.ai teaser" className="c-gallery__img" />
                    <h2 className="c-gallery__caption js-tooltip">Benevolent.ai</h2>
                </Link>
                <Link to="/werchter/" className="c-gallery__item c-gallery__item--6 u-bgcolor-werchter-base js-toolbox">
                    <Img fluid={data.img_werchter_teaser.childImageSharp.fluid} alt="Rock werchter teaser" className="c-gallery__img" />
                    <h2 className="c-gallery__caption js-tooltip">Rock Werchter</h2>
                </Link>
                <Link to="/matexi/" className="c-gallery__item c-gallery__item--7 u-bgcolor-matexi-base js-toolbox">
                    <Img fluid={data.img_matexi_teaser.childImageSharp.fluid} alt="Matexi teaser" className="c-gallery__img" />
                    <h2 className="c-gallery__caption js-tooltip">Matexi</h2>
                </Link>
                <Link to="/maunga/" className="c-gallery__item c-gallery__item--8 u-bgcolor-maunga-light js-toolbox">
                    <Img fluid={data.img_maunga_teaser.childImageSharp.fluid} alt="Maunga teaser" className="c-gallery__img" />
                    <h2 className="c-gallery__caption js-tooltip">Maunga</h2>
                </Link>
            </section>
            <section className="c-row c-row--alpha" id="about">
                <div className="f-grid u-grid-full">
                    <div className="f-col-bp1-4 f-col-bp2-10 f-col-bp3-6 u-ver-center">
                        <div className="c-tile__content">
                            <h2>Combining design and front-end development I handle projects in a mature way and enable design teams to achieve effective results.</h2>
                            <p>As a senior front-end designer I have worked at <a href="https://www.dukeandgrace.com/" className="c-link">Duke & Grace</a> (Wijs) and <a href="http://www.hugoandcat.com/" className="c-link">Hugo & Cat</a> working with motivated people in an open, innovative environment designing effective online platforms and digital identities.</p>
                            <p id="contact">I'm currently living <strong>London</strong>. Feel free to get in touch.</p>
                            <p className="u-mt-epsilon u-mb-beta">
                                <a href="mailto:dries.standaert@gmail.com" className="c-link">dries.standaert@gmail.com</a>
                            </p>
                            <p className="u-mb-beta">
                                <a href="tel:+44 7399 610062" className="c-link">+44 7399 610062</a>
                            </p>
                            <ul className="o-list c-social__list">
                                <li className="o-list__item c-social__list-item">
                                    <a href="http://twitter.com/driesstandaert" target="_blank" rel="noreferrer" className="c-social__link c-social__link--twitter">Twitter</a>
                                </li>
                                <li className="o-list__item c-social__list-item">
                                    <a href="https://www.linkedin.com/in/dries-standaert-67635383/" target="_blank" rel="noreferrer" className="c-social__link c-social__link--linkedin">LinkedIn</a>
                                </li>
                                <li className="o-list__item c-social__list-item">
                                    <a href="https://dribbble.com/driesstandaert" target="_blank" rel="noreferrer" className="c-social__link c-social__link--dribbble">dribbble</a>
                                </li>
                                <li className="o-list__item c-social__list-item">
                                    <a href="http://codepen.io/driesstandaert/" target="_blank" rel="noreferrer" className="c-social__link c-social__link--codepen">Codepen</a>
                                </li>
                                <li className="o-list__item c-social__list-item">
                                    <a href="https://github.com/driesstandaert" target="_blank" rel="noreferrer" className="c-social__link c-social__link--github">Github</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="f-col-bp1-4 f-col-bp2-12 f-col-bp3-6">
                        <div>
                            <figure className="u-ratio u-ratio-1x1">
                                <Img fluid={data.img_about.childImageSharp.fluid} alt="Dries Standaert"/>
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
        </LayoutHome>
    )
};

export default IndexPage;