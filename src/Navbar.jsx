import React from 'react'
import './App.css'

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-md navbar-dark bg-dark" aria-label="Fourth navbar example">
        <div class="container-fluid px-3">
        <a class="navbar-brand textbox" href="/">WEBthemer</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExample04">
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li class="nav-item">
                <a class="nav-link active textbox" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link textbox" href="/about">About Us</a>
            </li>
            <li class="nav-item">
                <a class="nav-link textbox" href="/contact">Contact Us</a>
            </li>
            </ul>
        </div>
        </div>
    </nav>
    </div>
  )
}

export default Navbar
