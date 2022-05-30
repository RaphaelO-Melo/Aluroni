import styles from './Menu.module.scss';
import {ReactComponent as Logo} from 'assets/logo.svg';
import Searcher from './Searcher';
import { useState } from 'react';
import Filters from './Filters/intex';
import Sorter from './Sorter';

export default function Menu(){

    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState<number | null>(null);
    const [sorter, setSorter] = useState('');

    return (
        <main>
            <nav className={styles.menu}>
                <Logo/>
            </nav>

            <header className={styles.header}>
                <div className={styles.header__text}>A casa do código e da massa</div>
            </header>

            <section className={styles.submenu}>
                <h3 className={styles.submenu__title}>Cardápio</h3>
                <Searcher search={search} setSearch={setSearch} />

                <div className={styles.sub_menu__filters}>
                    <Filters filter={filter} setFilter={setFilter} />
                    <Sorter sorter={sorter} setSorter={setSorter} />
                </div>
            </section>
        </main>
    )
}