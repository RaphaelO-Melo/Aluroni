import style from './Plate.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import classNames from 'classnames';
import menu from 'data/menu.json';

export default function Plate(){
    
    const navigate = useNavigate();
    const {id} = useParams();
    const plate = menu.find(item => item.id === Number(id));
    if(!plate){
        return '';
    }

    return (
        <>
            <button className={style.back} onClick={() => navigate(-1)}>
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