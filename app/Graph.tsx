import React from 'react';
import Graph from './Graph';

const sampleData = {
    labels: ['January', 'February', 'March', 'April'],
    values: [10, 20, 30, 40],
};

const App: React.FC = () => {
    return (
        <div>
            <h1>IT System Dashboard</h1>
            <Graph data={sampleData} />
        </div>
    );
};

export default App;
