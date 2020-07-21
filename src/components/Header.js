import React from "react";
import { Link } from 'react-router-dom'

import logo from '../assets/logo.svg'

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Vintage Tech Logo" className='logo' />
    </header>
    );
}
