import styles from './Menu.module.scss';
import styleTheme from 'styles/theme.module.scss';
import Searcher from './Searcher';
import { useState } from 'react';
import Filters, { OrderOptions } from './Filters/intex';
import Sorter from './Sorter';
import Items from './Items';

export default function Menu(){

    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState<number | null>(null);
    const [sorter, setSorter] = useState<OrderOptions>('');

    return (
        <section className={styles.submenu}>
            <h3 className={styleTheme.title}>Cardápio</h3>
            <Searcher search={search} setSearch={setSearch} />
            <div className={styles.submenu__filters}>
                <Filters filter={filter} setFilter={setFilter} />
                <Sorter sorter={sorter} setSorter={setSorter} />
            </div>
            <Items search={search} filter={filter} sorter={sorter} />
        </section>
    );
}