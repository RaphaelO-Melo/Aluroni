import React from "react"
import styles from "./Searcher.module.scss";

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
        </div>
    )
}