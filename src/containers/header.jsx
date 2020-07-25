import React from 'react';
import { connect, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
    const isLoggedIn = useSelector(state => state.authentification.isLoggedIn)
    const renderAuthentificationLink = () => {
        if (isLoggedIn) {
            return (
                <li className='nav-item'>
                    <Link className='nav-link' to={'/signout'}>Déconnexion</Link>
                </li>
            );
        } else {
            return [
                <li key={1} className='nav-item'>
                    <Link className='nav-link' to={'/signin'}>Connexion</Link>
                </li>,
                <li key={2} className='nav-item'>
                    <Link className='nav-link' to={'/signup'}>Inscription</Link>
                </li>
            ];
        }
    };
    return (
        <ul className='nav nav-tabs bg-primary'>
            <li className='nav-item'>
                <Link className='nav-link' to={'/'}>Accueil</Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to={'/ressources'}>Ressources</Link>
            </li>
            {renderAuthentificationLink()}
        </ul>
    );
}

export default connect(null, null)(Header);
