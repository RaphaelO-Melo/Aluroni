import React, { useEffect, useRef, useState } from 'react'
import styles from './Searcher.module.scss';
import {CgSearch} from 'react-icons/cg';
import {TiDeleteOutline} from 'react-icons/ti';

interface Props {
    search: string,
    setSearch: React.Dispatch<React.SetStateAction<string>>
}

export default function Searcher(props: Props){

    const [focusing, setFocusing] = useState(false);

    function search(value: string){
        props.setSearch(value);
        value != '' ? setFocusing(true) : setFocusing(false);
    }

    function resetSearch(){
        props.setSearch('');
        setFocusing(false);
    }

    return(
        <div className={styles.searcher}>
            <input 
                value={props.search}
                onChange={event => search(event.target.value)}
                placeholder='Buscar'
            />

            {focusing ? <TiDeleteOutline size={20} color='#4C4D5E' onClick={() => resetSearch()}/> : <CgSearch size={20} color='#4C4D5E'/>}
            
        </div>
    )
}