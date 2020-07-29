import React, {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';

import {getAllSets} from '../../actions/setsActions'

export const Setlists = () => {
    const dispatch = useDispatch();
    const sets = useSelector(state => state.sets);

    useEffect(() => {
        dispatch(getAllSets());
    }, [dispatch]);

    const renderSet = sets.setsList.map(set => {
        if(set.set_type === 'core' || set.set_type === 'expansion') {
            return (
                <div className='container setBlock' key={set.id}>
                    <img className='setIcon' src={set.icon_svg_uri} alt={set.name}/>
                    <p className='setName' key={set.name}>{set.name}</p>
                    <p className='setType' key={set.type}>{set.set_type}</p>
                </div>
            );
        }
    });

    return (
        <div className='container wrapper'>
            {renderSet}
        </div>
    );
}
