import logo from 'assets/logo.svg';
import style from './Item.module.scss';
import items from '../items.json';

type Props = typeof items[0];

export default function Item(props: Props){

    const{title, description, category, size, serving, price} = props;

    return (
        <div className={style.item}>
            <div className={style.item__image}>
                <img src={logo} alt={title}/>
            </div>
            <div className={style.item__descryption}>
                <div className={style.item__title}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <div className={style.item__tags}>
                    <div className={style.item__type}>
                        {category.label}
                    </div>
                    <div className={style.item__portion}>
                        {size}g
                    </div>
                    <div className={style.item__ppamount}>
                        Serve {serving} pessoa {serving > 1 ? 's':''}
                    </div>
                    <div className={style.item__value}>
                        R$ {price.toFixed(2)}
                    </div>
                </div>
            </div>
        </div>
    )
}