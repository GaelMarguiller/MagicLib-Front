import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import * as urlActions from '../../actions/urlActions'

export const Tile = props => {
    const [blockState]  = useState(props);
    return (
        <Link className='stretched-link card tile-set'
              key={blockState.code}
              to={urlActions.getSetUrl(blockState.code)}
        >
            <div className='container setDescription'>
                <div className='blockIcon'>
                    <img className='setIcon' src={blockState.icon_svg_uri} alt={blockState.name}/>
                </div>
                <p className='setName' key={blockState.name}>{blockState.name}</p>
            </div>
        </Link>
    )
}
