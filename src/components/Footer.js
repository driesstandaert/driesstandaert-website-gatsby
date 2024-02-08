import React from 'react';

const Footer = () => {
  return (
    <footer className="c-row c-row--alpha c-row-footer u-bgcolor-neutral-x-light" id="contact">
      <div className="o-container o-container--sm">
        <div>
          <p className="u-text-center">
            <a href="mailto:dries.standaert@gmail.com" className="c-link">dries.standaert@gmail.com</a>
          </p>
          <ul className="o-list c-social__list u-text-center">
            {/*<li className="o-list__item c-social__list-item">
              <a href="http://twitter.com/driesstandaert" target="_blank" rel="noreferrer" className="c-social__link c-social__link--twitter">Twitter</a>
            </li>*/}
            <li className="o-list__item c-social__list-item">
              <a href="https://www.linkedin.com/in/dries-standaert-67635383/" target="_blank" rel="noreferrer" className="c-social__link c-social__link--linkedin">LinkedIn</a>
            </li>
            {/*<li className="o-list__item c-social__list-item">
              <a href="https://dribbble.com/driesstandaert" target="_blank" rel="noreferrer" className="c-social__link c-social__link--dribbble">dribbble</a>
            </li>*/}
            <li className="o-list__item c-social__list-item">
              <a href="http://codepen.io/driesstandaert/" target="_blank" rel="noreferrer" className="c-social__link c-social__link--codepen">Codepen</a>
            </li>
            {/*<li className="o-list__item c-social__list-item">
              <a href="https://github.com/driesstandaert" target="_blank" rel="noreferrer" className="c-social__link c-social__link--github">Github</a>
            </li>*/}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;