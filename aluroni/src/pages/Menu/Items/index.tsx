import items from './items.json';
import Item from './Item';
import style from './Items.module.scss';

export default function Items(){
    return (
        <div>
            {items.map(item => (
                <div className={style.items}>
                    <Item key={item.id} {...item}/>
                </div>
            ))}
        </div>
    )
}