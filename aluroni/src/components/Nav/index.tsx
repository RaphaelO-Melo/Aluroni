import {ReactComponent as Logo} from 'assets/logo.svg';
import styles from './Nav.module.scss';

export default function Nav(){
    return (
        <nav className={styles.menu}>
            <Logo/>
        </nav>
    );
}