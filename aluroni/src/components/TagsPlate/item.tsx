import style from './TagsPlate.module.scss';
import classNames from 'classnames';
import { Plate } from 'types/Plate';

export default function TagsPlate({
    category,
    size,
    serving,
    price
}: Plate){
    return (
        <div className={style.tags}>
            <div className={classNames([style.tags__type], [style[`tags__type__${category.label.toLowerCase()}`]])}>
                {category.label}
            </div>
            <div className={style.tags__portion}>
                {size}
            </div>
            <div className={style.tags__qtperson}>
                Serve {serving} pessoa{serving > 1 ? 's':''}
            </div>
            <div className={style.tags__value}>
                R$ {price.toFixed(2)}
            </div>
        </div>
    );
}