import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { SET_URL } from '../../constants/appUrl';

import { getSet } from '../../actions/setActions';

export const Tile = props => {
    const [blockState]  = useState(props)
    /*console.log(blockState)
    const dispatch = useDispatch();

    const handleChange = () => {
        getSet(blockState.props);
    };*/

    return (
        <Link className='stretched-link'
              key={blockState.props.code}
              to={`${SET_URL}/${blockState.props.code}`}
              //onClick={dispatch(handleChange())}
        >
            <div className='container setDescription'>
                <div className='blockIcon'>
                    <img className='setIcon' src={blockState.props.icon_svg_uri} alt={blockState.props.name}/>
                </div>
                <p className='setName' key={blockState.props.name}>{blockState.props.name}</p>
            </div>
        </Link>
    )
}
