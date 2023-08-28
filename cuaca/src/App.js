/** @format */
import './App.css';
import { useState, useEffect } from 'react';
import InputForm from './components/Input';
import Prediction from './components/reusables/Predictions';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    const [weatherPrediction, setWeatherPrediction] = useState([]);
    return (
        <BrowserRouter basename='/cuaca'>
            <Routes>
                <Route
                    path='/*'
                    element={
                        <div className='App'>
                            <InputForm
                                setter={setWeatherPrediction}
                            ></InputForm>
                            <div className='grid justify-items-center gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5'>
                                {weatherPrediction.map((object) => {
                                    return (
                                        <Prediction
                                            object={object}
                                        ></Prediction>
                                    );
                                })}
                            </div>
                        </div>
                    }
                ></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
