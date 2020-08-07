import React from 'react';
import { Link } from 'gatsby';
import AOS from 'aos';

import audio_sound_dries from 'assets/images/audio/sound-dries.mp3';
import captions_sound_dries from 'file-loader!assets/images/audio/sound-dries.vtt';

class HeaderHome extends React.Component {
    componentDidMount() {
        // AOS animate on scroll
        AOS.init();

        // Mobile nav
        const nav = document.querySelector(".js-nav");
        const navSocial = document.querySelector(".js-nav-social");
        const navTrigger = document.querySelector(".js-nav-trigger");
        const navLink = document.querySelectorAll('.js-nav-link');
        const body = document.body;
        const scrollY = body.style.top;

        function toggleMobileNav() {
            nav.classList.toggle('is-visible');
            navSocial.classList.toggle('is-hidden');
            navTrigger.classList.toggle('is-active');
            if (navTrigger.classList.contains('is-active')) {
                body.style.position = 'fixed';
                body.style.top = `-${scrollY}`;
            } else {
                stopFixedBody();
            }
        };

        function closeMobileNav() {
            nav.classList.remove('is-visible');
            navTrigger.classList.remove('is-active');
            stopFixedBody();
        };

        function stopFixedBody() {
            body.style.position = '';
            body.style.top = '';
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
        }

        navTrigger.addEventListener('click', toggleMobileNav);

        navLink.forEach(el => {
            el.addEventListener('click', event => {
                closeMobileNav();
            })
        })

        // Sound scape
        const sound = document.getElementById("js-sound");
        const soundTrigger = document.querySelector(".js-sound-trigger");

        if(soundTrigger){
            soundTrigger.addEventListener('mousedown', () => {
                sound.play();
            });
        }
    }
    render() {
        return (
            <header>
                <div className="f-grid u-space-between">
                    <p className="c-logo c-logo--text" data-aos="fade-zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="600">
                        <span>Hello,</span>
                        my name is <span className="c-sound js-sound-trigger">Dries</span>
                        <audio id="js-sound">
                            <source src={audio_sound_dries} />
                            <track src={captions_sound_dries} kind="captions" srcLang="en" label="english_captions"></track>
                        </audio>    
                    </p>
                    <div className="c-nav" data-aos="fade-zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="300" data-aos-delay="1000">
                        <nav className="c-nav-main js-nav">
                            <div className="c-nav-main__inner">
                                <ul className="o-list c-nav-main__list">
                                    <li className="c-nav-main__item">
                                        <Link to="/" className="c-nav-main__link js-nav-link">Work</Link>
                                    </li>
                                    <li className="c-nav-main__item">
                                        <Link to="/#about" className="c-nav-main__link js-nav-link">About</Link>
                                    </li>
                                    <li className="c-nav-main__item">
                                        <Link to="#contact" className="c-nav-main__link js-nav-link is-highlighted">Hire me</Link>
                                    </li>
                                </ul>
                                <ul className="o-list c-social__list js-nav-social u-text-center is-hidden">
                                    <li className="o-list__item c-social__list-item">
                                        <a href="http://twitter.com/driesstandaert" target="_blank" rel="noreferrer" className="c-social__link c-social__link--white c-social__link--twitter">Twitter</a>
                                    </li>
                                    <li className="o-list__item c-social__list-item">
                                        <a href="https://www.linkedin.com/in/dries-standaert-67635383/" target="_blank" rel="noreferrer" className="c-social__link c-social__link--white c-social__link--linkedin">LinkedIn</a>
                                    </li>
                                    <li className="o-list__item c-social__list-item">
                                        <a href="https://dribbble.com/driesstandaert" target="_blank" rel="noreferrer" className="c-social__link c-social__link--white c-social__link--dribbble">dribbble</a>
                                    </li>
                                    <li className="o-list__item c-social__list-item">
                                        <a href="http://codepen.io/driesstandaert/" target="_blank" rel="noreferrer" className="c-social__link c-social__link--white c-social__link--codepen">Codepen</a>
                                    </li>
                                    <li className="o-list__item c-social__list-item">
                                        <a href="/img/pdf/driesstandaert-cv.pdf" target="_blank" rel="noreferrer" className="c-social__link c-social__link--white c-social__link--cv">cv</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>

                        <div className="c-nav-main-trigger js-nav-trigger">
                            <button aria-label="Trigger navigation"></button>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
};

export default HeaderHome;