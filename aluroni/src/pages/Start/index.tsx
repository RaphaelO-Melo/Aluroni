import menu from 'data/menu.json';
import style from './Start.module.scss';
import styleTheme from 'styles/theme.module.scss';
import ourHome from 'assets/nossa_casa.png';
import { useNavigate } from 'react-router-dom';
import { Plate } from 'types/Plate';

export default function Start() {

    const navigate = useNavigate();
    let suggestions = [...menu];
    suggestions = suggestions.sort(() => 0.5 - Math.random()).splice(0, 3);

    function openPlate(plate: Plate){
        navigate(`/prato/${plate.id}`, { state: {plate}});
    }

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
                        <button
                            className={style.suggestion__button}
                            onClick={() => openPlate(item)}
                        >
                            
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