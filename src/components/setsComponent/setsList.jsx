import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import { Tile } from '../genericComponent/tile'

import { getAllSets } from '../../actions/setsActions'

export const SetsList = () => {
    const dispatch = useDispatch();
    const sets = useSelector(state => state.sets.sets);

    useEffect(() => {
        dispatch(getAllSets());
    }, [dispatch]);

    const renderCoreSets = sets.setsList
        .filter(set => set.block_code === 'lea')
        .map(set => {
            return (
                <Tile {...set} key={set.id}/>
            );
        });

    const renderBlockSets = sets.setsList
        .filter(set => set.block_code !== 'lea' && set.block_code !== undefined)
        .map(set => {
            return (
                <Tile {...set} key={set.id}/>
            );
        });

    const renderOtherSets = sets.setsList
        .filter(set => set.block_code === undefined)
        .map(set => {
            return (
                <Tile {...set} key={set.id}/>
            );
        });

    return (
        <div className='container wrapper'>
            <div className='col-sm setBlock'>
                <h3 className='titleBlock'>Core Set</h3>
                {renderCoreSets}
            </div>
            <div className='col-sm setBlock'>
                <h3 className='titleBlock'>Block Set</h3>
                {renderBlockSets}
            </div>
            <div className='col-sm setBlock'>
                <h3 className='titleBlock'>Other Set</h3>
                {renderOtherSets}
            </div>
        </div>
    );
}
