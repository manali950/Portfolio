import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer className="main-footer">
                <strong>Copyright &copy; 2017-2022 <a href="https://appletsoftech.business.site/">AppletSoftech</a>.</strong>
                All rights reserved.
                <div className="float-right d-none d-sm-inline-block">
                    <b>Version</b> 1.0.0-beta
                </div>
            </footer>
        )
    }
}
