import styles from './skin-list.module.scss'
import {SkinItem} from "../skin-item";
import {useGetSkinsQuery} from "../../redux/services/skin.service.ts";
import {TStep } from '../../redux/modules/route.module.ts';
import { useNavigate, useParams } from 'react-router';



export const SkinList = () => {
    const { weapontype } = useParams()
    // @ts-ignore
    const { data } = useGetSkinsQuery({})

    const navigate = useNavigate()


    return (
        <div className={styles.grid}>
            {data && weapontype && data[weapontype as TStep].map(dskin => {
                return (
                  // @ts-ignore
                    <SkinItem onClick={(key) => navigate(`variant/${key}`)} skin_key={dskin.skin_key} img={dskin.image_url} paint_name={dskin.paint_name.split('|')[0].trim()} weapon_name={''} />
                )
            })}
        </div>
    )
}