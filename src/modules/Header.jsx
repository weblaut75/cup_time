
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {

  const location = useLocation();
  const getActiveClass = (category) =>{
    const curentCategory = new URLSearchParams (location.search).get('category');
    return curentCategory == category ? "active": "";
  }
  return (
    <header className="header">
      <div className="header__container container">
        <Link to ="/" className="header__logo-link">
          <img
            className="header__logo"
            src="./img/logo.svg"
            alt="Логотип cup time"
          />
        </Link>
        <nav className="header__nav">
          <ul className="header__menu">
            <li className="header__menu-item">
              <Link className={`header__menu--link ${getActiveClass("tea")}`} to="/products?category=tea">
                Чай
              </Link>
            </li>
            <li className="header__menu-item">
              <Link className={`header__menu--link ${getActiveClass("coffee")}`} to="/products?category=coffee">
                Кофе
              </Link>
            </li>
            <li className="header__menu-item">
              <Link className={`header__menu--link ${getActiveClass("teapots")}`} to="/products?category=teapots">
                Чайники
              </Link>
            </li>
            <li className="header__menu-item">
              <Link className={`header__menu--link ${getActiveClass("cezves")}`} to="/products?category=cezves">
                Турки
              </Link>
            </li>
            <li className="header__menu-item">
              <Link className={`header__menu--link ${getActiveClass("other")}`} to="/products?category=other"> 
                Прочее
              </Link>
            </li>
          </ul>
        </nav>

        <Link className="header__cart-link" to="cart">
          6
        </Link>
        <div className="header__burger burger__icon"></div>
      </div>
    </header>
  );
};
