import items from 'data/menu.json';
import Item from './Item';
import style from './Items.module.scss';
import { useEffect, useState } from 'react';
import Counter from './Counter';

interface Props {
    search: string,
    filter: number | null,
    sorter: string
}

export default function Items(props : Props){

    const [list, setList] = useState(items);
    const {search, filter, sorter} = props;

    
    useEffect(() => {

        const newList = items.filter(item => testSearch(item.title) && testFilter(item.category.id));
        setList(sortList(newList));

    }, [search, filter, sorter]);
    
    function sortList(newList: typeof items){
        switch(sorter){
        case 'porcao':
            return newList.sort((a, b) => a.size > b.size ? 1 : -1);
        case 'qtd_pessoas':
            return newList.sort((a, b) => a.serving > b.serving ? 1 : -1);
        case 'preco':
            return newList.sort((a, b) => a.price > b.price ? 1 : -1);
        default:
            return newList;
        }
    }

    function testSearch(title: string){
        const regex = new RegExp(search, 'i');
        return regex.test(title);
    }

    function testFilter(id: number){
        
        if(filter !== null){
            return filter === id;
        } else {
            return true;
        }

    }

    return (
        <div>
            <Counter list={list} search={search} filter={filter} />
            {list.map(item => (
                <div key={item.id} className={style.items}>
                    <Item key={item.id} {...item}/>
                </div>
            ))}
        </div>
    );
}