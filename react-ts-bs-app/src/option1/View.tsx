import React, { useState } from 'react'
import Page1 from './Page1';
import Page2 from './Page2';

function View() {

    const [activePage, setActivePage] = useState("page1");

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-3'>
                    <nav className="navbar navbar-expand-lg bg-body-tertiary">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">Navbar</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#" onClick={()=>{setActivePage("page1")}} >Page 1</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#" onClick={()=>{setActivePage("page2")}}>Page 2</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className='col-lg-9'>
                    {activePage === "page1" && <Page1 /> }
                    {activePage === "page2" && <Page2 /> }
                </div>
            </div>
        </div>
    );
}



export default View