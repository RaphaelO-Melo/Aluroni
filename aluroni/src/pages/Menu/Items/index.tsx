import items from './items.json';
import Item from './Item';
import style from './Items.module.scss';
import { useEffect, useState } from 'react';

interface Props {
    search: string,
    filter: number | null,
    sorter: string
}

export default function Items(props : Props){

    const [list, setList] = useState(items);
    const {search, filter } = props;

    
    useEffect(() => {

        const newList = items.filter(item => testSearch(item.title) && testFilter(item.category.id));
        setList(newList);

    }, [search, filter]);
    

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
            {list.map(item => (
                <div className={style.items}>
                    <Item key={item.id} {...item}/>
                </div>
            ))}
        </div>
    )
}