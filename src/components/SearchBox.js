import React, { Component } from 'react'

export default class SearchBox extends Component {
    render() {
        return (
            <div className="ui vertical menu">
                <a className="item">
                    Bugatti
                    <div class="ui label">1</div>
                </a>
                <a className="item">
                    Gucci
                    <div class="ui label">51</div>
                </a>
                <a className="item">
                    Matyi
                    <div class="ui label">1</div>
                </a>
            </div>
        )
    }
}
