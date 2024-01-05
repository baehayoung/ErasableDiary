import { Link } from 'react-router-dom';
import { IoMdHome } from 'react-icons/io';
import { IoPencilOutline, IoReader } from 'react-icons/io5';

import css from './Header.module.scss';

const Header = () => {
    return (
        <header>
            <h2>The king's ears are donkey ears</h2>

            <nav className={css.menuBar}>
                <ul>
                    <li><Link to="/"><IoMdHome /> Home</Link></li>
                    <li><Link to="/write"><IoPencilOutline /> Write Diary</Link></li>
                    <li><Link to="/read"><IoReader /> Read Diary</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;