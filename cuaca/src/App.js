/** @format */
import './App.css';
import { useState, useEffect } from 'react';
import InputForm from './components/Input';
import Prediction from './components/reusables/Predictions';

function App() {
    const [weatherPrediction, setWeatherPrediction] = useState([]);
    return (
        <div className='App'>
            <InputForm setter={setWeatherPrediction}></InputForm>
            <div className='grid justify-items-center gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5'>
                {weatherPrediction.map((object) => {
                    return <Prediction object={object}></Prediction>;
                })}
            </div>
        </div>
    );
}

export default App;
