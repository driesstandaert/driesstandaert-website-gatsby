import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';

import Layout from 'components/Layout';

const NotFoundPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>404 - Page not found - Dries Standaert - Design & Front-end</title>
      </Helmet>
      <main id="main-content">
      <section className="c-row c-row--alpha c-row-hero">
        <div className="f-grid">
            <div className="f-col-bp1-4 f-col-bp2-10 f-col-bp3-8 c-hero" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" data-aos-anchor="hero">
                <h1>Page Not Found</h1>
                <p>Go back to <Link to="/">Homepage</Link></p>
            </div>
        </div>
      </section>
     </main>
    </Layout>
  );
;}

export default NotFoundPage
