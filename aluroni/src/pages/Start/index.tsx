import menu from 'data/menu.json';
import style from './Start.module.scss';
import styleTheme from 'styles/theme.module.scss';
import ourHome from 'assets/nossa_casa.png';

export default function Start() {

    let suggestions = [...menu];
    suggestions = suggestions.sort(() => 0.5 - Math.random()).splice(0, 3);

    return (
        <section>
            <h3 className={styleTheme.title}>
                Recomendações da cozinha
            </h3>
            <div className={style.suggestions}>
                {suggestions.map(item => (
                    <div key={item.id} className={style.suggestion}>
                        <div className={style.suggestion__image}>
                            <img src={item.photo} alt={item.title} />
                        </div>
                        <button className={style.suggestion__button}>
                            Ver mais
                        </button>
                    </div>
                ))}
            </div>
            <h3 className={styleTheme.title}>Nossa casa</h3>
            <div className={style.ourHome}>
                <img src={ourHome} alt="Casa do aluroni"/>
                <div className={style.ourHome__address}>
                    Rua Vergueiro, 3185 <br /> <br /> Vila Mariana - SP
                </div>
            </div>
        </section>
    );
}