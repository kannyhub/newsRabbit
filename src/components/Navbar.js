import React from 'react'
import {
    Link
  } from "react-router-dom";

  const addActiveCls = (e) => {
    let links = document.querySelectorAll('.nav-link')
    Array.from(links).forEach((elem) => {
        if (elem.className.includes('active')) {
            elem.classList.remove('active')
        }
    })
    e.target.classList.add('active')
  }

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg fixed-top navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">News-Rabbit</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" onClick={addActiveCls} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" onClick={addActiveCls} to="/business">Business</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" onClick={addActiveCls} to="/entertainment">Entertainment</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" onClick={addActiveCls} to="/health">Health</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" onClick={addActiveCls} to="/science">Science</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" onClick={addActiveCls} to="/sports">Sports</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" onClick={addActiveCls} to="/technology">Technology</Link>
                        </li>
                    </ul>
                    <div className="form-check form-switch d-flex mx-3">
                        <input className="form-check-input" type="checkbox" onClick={props.toggleMode} id="mode"/>
                        <label className="form-check-label" htmlFor="dark_mode"> Dark</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}