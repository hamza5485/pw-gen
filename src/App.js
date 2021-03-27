import React from 'react';
import './App.css';
const MainView = React.lazy(() => import('./views/MainView'));


const App = () => {

    return (
        <React.Suspense fallback={
            <div>
                Loading...
            </div>
        }>
            <div className="App">
                <MainView />
            </div>
        </React.Suspense >
    );
};

export default App;
