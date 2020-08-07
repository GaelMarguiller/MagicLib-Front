import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import { SETS_URL } from '../../constants/url';

import {getAllSets} from '../../actions/setsActions'

export const SetLists = () => {
    const dispatch = useDispatch();
    const sets = useSelector(state => state.sets);

    useEffect(() => {
        dispatch(getAllSets());
    }, [dispatch]);

    const renderCoreSets = sets.setsList
        .filter(set => set.block_code === 'lea')
        .map(set => {
            return (
                <Link className='stretched-link' key={set.code} to={`${SETS_URL}/${set.code}`}>
                    <div className='container setDescription'>
                        <div className='blockIcon'>
                            <img className='setIcon' src={set.icon_svg_uri} alt={set.name}/>
                        </div>
                        <p className='setName' key={set.name}>{set.name}</p>
                    </div>
                </Link>
            );
        });

    const renderBlockSets = sets.setsList
        .filter(set => set.block_code !== 'lea' && set.block_code !== undefined)
        .map(set => {
            return (
                <Link className='stretched-link' key={set.code} to={`${SETS_URL}/${set.code}`}>
                    <div className='container setDescription'>
                        <div className='blockIcon'>
                            <img className='setIcon' src={set.icon_svg_uri} alt={set.name}/>
                        </div>
                        <p className='setName' key={set.name}>{set.name}</p>
                    </div>
                </Link>
            );
        });

    const renderOtherSets = sets.setsList
        .filter(set => set.block_code === undefined)
        .map(set => {
            return (
                <Link className='stretched-link' key={set.code} to={`${SETS_URL}/${set.code}`}>
                    <div className='container setDescription'>
                        <div className='blockIcon'>
                            <img className='setIcon' src={set.icon_svg_uri} alt={set.name}/>
                        </div>
                        <p className='setName' key={set.name}>{set.name}</p>
                    </div>
                </Link>
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
