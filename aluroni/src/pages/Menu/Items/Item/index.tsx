import style from './Item.module.scss';
import { Plate } from 'types/Plate';
import TagsPlate from 'components/TagsPlate/item';
import { useNavigate } from 'react-router-dom';

export default function Item(props: Plate){

    const{id, title, description, photo} = props;
    const navigate = useNavigate();

    return (
        <div className={style.item} onClick={() => navigate(`/prato/${id}`)}>
            <div className={style.item__image}>
                <img src={photo} alt={title}/>
            </div>
            <div className={style.item__descryption}>
                <div className={style.item__title}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <TagsPlate {...props}/>
            </div>
        </div>
    );
}