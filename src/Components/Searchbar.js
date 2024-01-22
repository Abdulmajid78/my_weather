import React, {Component} from 'react';

class Searchbar extends Component {
    render() {
        return (
            <div className="searchbar">
                <div className="logo">
                    <img src="/assets/images/sun.png" alt=""/>
                    <h3>The Weather</h3>
                </div>
                
                <div className="search">
                    <input type="search" placeholder="search city"/>
                    <button><img width='27' src="/assets/images/search.png" alt=""/></button>
                </div>
            </div>

        );
    }
}

export default Searchbar;