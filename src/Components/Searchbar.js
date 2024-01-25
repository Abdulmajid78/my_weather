import React, {Component, createRef} from 'react';


class Searchbar extends Component {

    // state = {
    //     inputVal: ''
    // }
    // handleChange = (e) => {
    //     this.setState({
    //         inputVal: e.target.value
    //     })
    // }



    render() {
        const {searchCity,searchInput} = this.props
        return (
            <div className="searchbar">
                <div className="logo">
                    <img src="/assets/images/logo.png" alt=""/>
                    <h3>The Weather</h3>
                </div>

                <div className="search">
                    <input type="search"
                           ref={searchInput}
                        // onChange={this.handleChange}
                           placeholder="search city"/>
                    <button onClick={searchCity}><img width='27' src="/assets/images/search.png" alt=""/></button>
                </div>
            </div>

        );
    }
}

export default Searchbar;