import React from 'react'
import styles from './Searcher.module.scss';
import {CgSearch} from 'react-icons/cg';

interface Props {
    search: string,
    setSearch: React.Dispatch<React.SetStateAction<string>>
}

export default function Searcher(props: Props){
    return(
        <div className={styles.searcher}>
            <input 
                value={props.search}
                onChange={event => props.setSearch(event.target.value)}
            />
            <CgSearch
                size={20}
                color='#4C4D5E'
            />
        </div>
    )
}