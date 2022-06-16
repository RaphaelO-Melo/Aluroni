import styles from './StandardPage.module.scss';
import styleTheme from 'styles/theme.module.scss';
import { Outlet } from 'react-router-dom';

export default function StandardPage(){
    return(
        <>
            <header className={styles.header}>
                <div className={styles.header__text}>A casa do código e da massa</div>
            </header>
            <div className={styleTheme.container}>
                <Outlet />
            </div>
        </>
    );
}