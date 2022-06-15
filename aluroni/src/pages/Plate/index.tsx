import style from './Plate.module.scss';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';
import menu from 'data/menu.json';

export default function Plate(){
    
    const {state} = useLocation();
    const {plate} = state as { plate: typeof menu[0]};

    return (
        <>
            <button className={style.back}>
                {'< Voltar'}
            </button>
            <section className={style.container}>
                <h1 className={style.title}>
                    {plate.title}
                </h1>
                <div className={style.image}>
                    <img src={plate.photo} alt={plate.title} />
                </div>
                <div className={style.content}>
                    <p className={style.content__descryption}>
                        {plate.description}
                    </p>
                    <div className={style.tags}>
                        <div className={classNames({
                            [style.tags__type]: true,
                            [style[`tags__type__${plate.category.label.toLowerCase()}`]]: true
                        })}>
                            {plate.category.label}
                        </div>
                        <div className={style.tags__portion}>
                            {plate.size}g
                        </div>
                        <div className={style.tags__qtperson}>
                            Server {plate.serving} pessoa{plate.serving === 1 ? '' : 's'}
                        </div>
                        <div className={style.tags__value}>
                            R$ {plate.price.toFixed(2)}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}