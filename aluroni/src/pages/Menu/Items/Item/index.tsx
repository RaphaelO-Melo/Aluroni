import style from './Item.module.scss';
import classNames from 'classnames';
import { Plate } from 'types/Plate';

export default function Item(props: Plate){

    const{title, description, category, size, serving, price, photo} = props;

    return (
        <div className={style.item}>
            <div className={style.item__image}>
                <img src={photo} alt={title}/>
            </div>
            <div className={style.item__descryption}>
                <div className={style.item__title}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <div className={style.item__tags}>
                    <div className={classNames([style.item__type], [style[`item__type__${category.label.toLowerCase()}`]])}>
                        {category.label}
                    </div>
                    <div className={style.item__portion}>
                        {size}
                    </div>
                    <div className={style.item__ppamount}>
                        Serve {serving} pessoa{serving > 1 ? 's':''}
                    </div>
                    <div className={style.item__value}>
                        R$ {price.toFixed(2)}
                    </div>
                </div>
            </div>
        </div>
    );
}