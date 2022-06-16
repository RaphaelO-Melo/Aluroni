import style from './Plate.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import menu from 'data/menu.json';
import TagsPlate from 'components/TagsPlate/item';

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
                    <TagsPlate {...plate}/>
                </div>
            </section>
        </>
    );
}