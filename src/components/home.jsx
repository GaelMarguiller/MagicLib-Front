import React, {useEffect} from "react";
//import {useSelector} from 'react-redux';

import {fetchTodos, getAllSets} from "../actions/setsActions";

export const Home = () => {
    useEffect(() => {
        fetchTodos()
        getAllSets();
    })
    /*const sets = useSelector(state => state.sets);
    const renderSet = sets => {
        console.log(sets)
        return sets.map(set =>
            <div>
                <p>{set.id}</p>
                <p>{set.name}</p>
                <img src={set.icon} alt=""/>
                <p>{set.setType}</p>
            </div>
        );
    };
    console.log(renderSet(sets));*/

    return (
        <div>
            toto
        </div>
    );
}
