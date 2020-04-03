import React from 'react';
import './styles.scss';
import ContactButtons from '../contactButtons/ContactButtons';

export default class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
                <section className={`header`}>
                    <nav className={`header__nav`}>
                        <div className={`container`}>
                            <h1>Brandon<span>Desselle</span></h1>
                            {/* <ul className={`nav-links`}>
                                <li><a href={`#about-me`}>About Me</a></li>
                                <li><a href={`#projects`}>Projects</a></li>
                            </ul> */}
                        </div>
                    </nav>
                    <div className={`container`}>
                        <div className={`header__name-tag`}>
                            <h1>Full-Stack Developer</h1>
                            <p>
                            Coding alone is hard and progress is slow.<br/>Working with a team is a two way relationship where<br/>I can provide <span className={`highlight`}>value</span> to you , while you <span className={`highlight`}>invest</span> in me!
                            </p>
                        </div>
                        <div className={`header__actions`}>
                            <ContactButtons />
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}
