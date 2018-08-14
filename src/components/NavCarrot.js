import React from 'react';

const NavCarrot = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">Mitrais - Carrot</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/managerreward/list">Manager Reward</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Stockies Reward</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/list">Manage Transaction</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavCarrot;