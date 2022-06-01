import React from 'react';
import filters from './filters.json';
import style from './Filters.module.scss';
import classNames from 'classnames';

export type OrderOptions = '' | 'porcao' | 'qtd_pessoas' | 'preco';
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
                    className={classNames({
                        [style.filters__filter]: true,
                        [style['filters__filter--active']]: filter === option.id 
                    })}
                    key={option.id}
                    onClick={() => selectFilter(option)}>
                    {option.label}
                </button>
            ))}
        </div>
    )
}