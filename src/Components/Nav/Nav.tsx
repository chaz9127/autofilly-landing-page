import { Link } from 'react-router-dom';
import './Nav.scss';

type NavProps = {
    active: string,
}

const Nav: React.FC<NavProps> = ({active}) => {

  return (
    <nav className="nav-container">
        <Link className={`${active === 'home' ? 'active' : ''} nav-link`} to='/'>Home</Link>
        <Link className={`${active === 'feedback' ? 'active' : ''} nav-link`} to='/feedback'>Send Feedback</Link>
        <Link className={`${active === 'test' ? 'active' : ''} nav-link`} to='/test'>Test Form</Link>
    </nav>
  );
};

export default Nav;
