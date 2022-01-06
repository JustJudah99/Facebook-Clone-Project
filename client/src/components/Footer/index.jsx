import { Link } from 'react-router-dom'
import { languages, links } from '../../constants'
import './styles.css'

const Footer = () => {
  return (
    <footer className="footer__wrapper">
      <div className="footer__container">
        <ul className="footer__list-languages">
          {languages.map((language) => (
            <li className="footer__list-languages-item" key={language}>
              {language}
            </li>
          ))}
          <li className="footer__list-languages-item">
            <Link to="/">
              <span className="footer__list-languages-btn"></span>
            </Link>
          </li>
        </ul>
        <div className="footer__separator" />
        <div>
          <ul className="footer__list-content">
            {links.map((link) => (
              <li key={link.children} className="footer__list-content-item">
                {link.target ? (
                  <a {...link} href={link.to} rel="noopener noreferrer" />
                ) : (
                  <Link {...link} />
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__copyright">
          <span>Meta © 2022</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
