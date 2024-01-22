import React, {Component} from 'react';
import Searchbar from "./Components/Searchbar";
import MainSec from "./Components/Main-sec";

class App extends Component {
    render() {
        return (
            <div>
                <Searchbar/>
                <MainSec/>
            </div>
        );
    }
}

export default App;