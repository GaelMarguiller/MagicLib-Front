import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router';
import { getSet } from '../../actions/setActions';
import {getCardsList} from "../../actions/cardsListActions";


export const SetsCardList = () => {
    const {id} = useParams()
    const dispatch = useDispatch();
    const block = useSelector(state => state.sets.set);
    const cardList = useSelector(state => state.cardsList);

    useEffect(() => {
        dispatch(getSet(id));
        dispatch(getCardsList(block.set.setCard))
    }, [dispatch, id, block.set.setCard]);

    const renderCardsList =cardList.fetching !== true && cardList.cardsList.map(card => {
        return (
            <div className="card tile-card">
                <div className="container blockCardImg">
                    <img src={card.image_uris['normal']} alt={card.name}/>
                </div>
            </div>
        )
    })
    return (
        <div>
           <div className='blockSet'>
               <div className='titleBlock'>
                   <div className='blockIcon'>
                       <img src={block.set.setIcon} alt={block.set.setName}/>
                   </div>
                   <h3>{block.set.setName}</h3>
               </div>
               <div className="container cardsList">
                   {renderCardsList}
               </div>
           </div>
        </div>
    )
}
