import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import 'assets/stylesheets/global.scss';

import HeaderHome from 'components/HeaderHome';

const LayoutHome = ({ children, pageName }) => {

  let className = '';

  if ( pageName ) {
    className = `${className} page-${pageName}`;
  }

  return (
    <>
      <Helmet bodyAttributes={{ class: className}}>
        <title>Gatsby Site</title>
      </Helmet>
      <HeaderHome />
      <main>{ children }</main>
    </>
  );
};

LayoutHome.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutHome;