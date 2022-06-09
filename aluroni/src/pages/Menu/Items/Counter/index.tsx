import style from './Counter.module.scss';
import items from 'data/menu.json';
import classNames from 'classnames';

interface Props{
    list: typeof items
    search: string,
    filter: number | null
}

export default function Counter({list, search, filter} : Props){
    return (
        <div className={classNames({
            [style.counter]: true,
            [style['counter--active']]: search != '' || (filter != null && filter > 0)
        })}>
            Produtos encontrados: {Object.keys(list).length}
        </div>
    );
}