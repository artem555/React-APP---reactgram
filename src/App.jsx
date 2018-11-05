import React, { Component } from 'react';

import './App.css';
import Header from './components/Header';
import Filter from './components/Filter';
import Settings from './components/Settings';
import FilterList from './components/FilterList';
import Image from './components/Image';

//root component
class App extends Component {
    state = {
        image: 'https://www.ubackground.com/_ph/8/281830035.jpg',
        selectedFilter: '',
        settings: {
            contrast: 100,
            hue: 0,
            brightness: 100,
            saturate: 100,
            sepia: 0
    }
}

handleChange = event => {
    const setting = event.target.id;
    const value = event.target.value;
    const settings = { ...this.state.settings, [setting]: value };

    this.setState({ selectedFilter: '', settings});
}

updateSettings = (selectedFilter, settings) => {
    this.setState({ selectedFilter, settings });
}

render() {
        const { image, selectedFilter, settings } = this.state;//с помощью реструктуризации получаем значение из состояния
        return (
            //define a wrapper of app component
            <div className="app"> 
                <Header title="Reactgram"/>

                <section className="content">
                    <Settings settings={settings} handleChange={this.handleChange} />

                    <main className="main">
                        <Filter settings={settings}>
                            <Image src={image}/>
                        </Filter>

                        <FilterList 
                            image={image}
                            settings={settings}
                            selectedFilter={selectedFilter}
                            updateSettings={this.updateSettings}/>
                    </main>

                </section>
            </div>
        )
    }
}

export default App;




