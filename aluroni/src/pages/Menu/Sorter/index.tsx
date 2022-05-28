import style from './Sorter.module.scss';
import options from './options.json';

export default function Sorter(){
    return (
        <button className={style.sorter}>
            <span>Ordenar Por</span>
            <div className={style.sorter__options}>
                {options.map(option => (
                    <div className={style.sorter__option} key={option.value}>
                        {option.name}
                    </div>
                ))}
            </div>
        </button>
    )
}