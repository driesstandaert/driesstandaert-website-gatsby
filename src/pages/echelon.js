import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, graphql } from 'gatsby';
import Layout from 'components/Layout';

export const query = graphql`
query {
    img_echelon_cover: file(relativePath: {eq: "jpg/echelon-cover.jpg"}) {
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
                <title>Echelon - Dries Standaert - Design & Front-end</title>
                <meta name="description" content="Overview on my Design and Front-end work for S$P Global"/>
            </Helmet>
            <main id="main-content">
                <section className="c-row c-row--alpha c-row-hero">
                    <div className="f-grid">
                        <div className="f-col-bp1-4 f-col-bp2-10 f-col-bp3-8 c-hero" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" data-aos-anchor="hero">
                            <h1>Echelon is a boilerplate UI kit for software interfaces</h1>
                            <ul className="o-list o-list--horizontal c-tags--hero">
                                <li className="o-list__item c-tag">UI design</li>
                                <li className="o-list__item c-tag">Figma</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="c-row c-row-normal u-bgcolor-echelon-dark">
                    <div className="f-grid">
                        <div className="f-col-bp1-4 f-col-bp1-shift-0 f-col-bp3-12">
                        <iframe className="c-iframe" title="figma" width="100%" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FrpTxBh3FuUG9LFFpQA2TlC%2FEchelon-UI-Kit-Boilerplate-MASTER%3Fnode-id%3D470%253A34162&chrome=DOCUMENTATION" allowFullScreen></iframe>
                        </div>
                    </div>
                </section>
                <section className="c-row c-row--alpha">
                    <div className="f-grid">
                        <div className="f-col-bp1-4 f-col-bp2-10 f-col-bp3-6" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" data-aos-anchor="hero">
                            <div className="c-tile__content c-tile__content--text">
                                <h2>Atomic design</h2>
                                <p>I have created this UI kit as a solid starting point for many design projects.
                                Most necessary elements and styles that are commonly used in digital interfaces are included.
                                All components are set up in an atomic structure and can easily be customized to fit any purpose or identity.</p>
                                <p>Visit <a href="https://www.figma.com/file/rpTxBh3FuUG9LFFpQA2TlC/Echelon-UI-Kit-Boilerplate-MASTER" target="_blank" rel="noreferrer" className="c-link">Echelon UI kit</a></p>
                            </div>
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
};

export default SPPage;

