import style from './Item.module.scss';
import { Plate } from 'types/Plate';
import TagsPlate from 'components/TagsPlate/item';

export default function Item(props: Plate){

    const{title, description, photo} = props;

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
                <TagsPlate {...props}/>
            </div>
        </div>
    );
}