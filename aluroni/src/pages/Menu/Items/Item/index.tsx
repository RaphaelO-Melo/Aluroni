import logo from 'assets/logo.svg';
import style from './Item.module.scss';

export default function Item(){
    return (
        <div className={style.item}>
            <div className={style.item__image}>
                <img src={logo} alt="imagem"/>
            </div>
            <div className={style.item__descryption}>
                <div className={style.item__title}>
                    <h2>Macarrão</h2>
                    <p>Descrição do macarrão</p>
                </div>
                <div className={style.item__tags}>
                    <div className={style.item__type}>
                        Massa
                    </div>
                    <div className={style.item__portion}>
                        400g
                    </div>
                    <div className={style.item__ppamount}>
                        Serve 2 pessoas
                    </div>
                    <div className={style.item__value}>
                        R$ 50,00
                    </div>
                </div>
            </div>
        </div>
    )
}