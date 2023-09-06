import React, {useEffect} from 'react';
import './App.css';
import {useAppDispatch} from "./store/store";
import {todolistThunk} from "./reducers/todoReducer";
import {Todolists} from "./components/todolists/todolists";

function App() {

    const dispatch = useAppDispatch()


    useEffect(() => {
        dispatch(todolistThunk.getTodo())
    }, [])




    return (
        <div className="App">
             <Todolists />

        </div>
    );
}

export default App;
