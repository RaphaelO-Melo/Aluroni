import React from 'react';
import filters from './filters.json';
import style from './Filters.module.scss';

type IOption = typeof filters[0];

interface Props{
    filter: number | null,
    setFilter: React.Dispatch<React.SetStateAction<number | null>>
}

export default function Filters({filter, setFilter} : Props){
    
    function selectFilter(option: IOption){

        if(filter === option.id)
            return setFilter(null);
        else
            return setFilter(option.id);
    
    }

    return (
        <div className={style.filters}>
            {filters.map((option) => (
                <button 
                    className={`${style.filters__filter} ${filter === option.id ? style["filters__filter--active"] : ''}`}
                    key={option.id}
                    onClick={() => selectFilter(option)}>
                    {option.label}
                </button>
            ))}
        </div>
    )
}