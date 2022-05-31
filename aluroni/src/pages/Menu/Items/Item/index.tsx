import logo from 'assets/logo.svg';
import style from './Item.module.scss';
import items from '../items.json';
import classNames from 'classnames';

type Props = typeof items[0];

export default function Item(props: Props){

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
    )
}