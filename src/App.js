import React, { Component } from 'react';
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import Data from './data'

const options = {
    rangeSelector: {
        selected: 1
    },
    title: {
        text: 'AAPL'
    },
    series: [{
        type: 'candlestick',
        data: Data.data
    }]
}

class App extends Component {
    render() {
        return (
            <div className="App">
                <HighchartsReact
                    highcharts={Highcharts}
                    constructorType={'stockChart'}
                    options={options} />
            </div>
        );
    }
}

export default App;
