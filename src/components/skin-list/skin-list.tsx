import styles from './skin-list.module.scss'
import {SkinItem} from "../skin-item";
import {useGetSkinsQuery} from "../../redux/services/skin.service.ts";
import {TStep } from '../../redux/modules/route.module.ts';
import { useNavigate, useParams } from 'react-router';



const defaultSkinList = [
    {
        img: 'knife.svg',
        skin_id: 111112,
        label: 'Добавить нож'
    },
    {
        img: 'gloves.svg',
        skin_id: 11111,
        label: 'Добавить перчатки'
    },
    {
        img: 'awp.svg',
        skin_id: 9,
        label: 'Добавить AWP'
    },
    {
        img: 'ak47.svg',
        skin_id: 7,
        label: 'Добавить AK-47'
    },
    {
        img: 'm4a4.svg',
        skin_id: 16,
        label: 'Добавить M4A4'
    },
    {
        img: 'm4a1s.svg',
        skin_id: 60,
        label: 'Добавить M4A1-S'
    },
    {
        img: 'ssg.svg',
        skin_id: 40,
        label: 'Добавить SSG-08'
    },
    {
        img: 'deagle.svg',
        skin_id: 1,
        label: 'Добавить Desert Eagle'
    },
    {
        img: 'usp.svg',
        skin_id: 61,
        label: 'Добавить USP-S'
    },
    {
        img: 'glock.svg',
        skin_id: 4,
        label: 'Добавить Glock-18'
    },
    {
        img: 'p250.svg',
        skin_id: 36,
        label: 'Добавить P250'
    },
    {
        img: 'famas.svg',
        skin_id: 10,
        label: 'Добавить FAMAS'
    },
    {
        img: 'galil.svg',
        skin_id: 13,
        label: 'Добавить Galil AR'
    },
    {
        img: 'aug.svg',
        skin_id: 8,
        label: 'Добавить AUG'
    },
    {
        img: 'sg556.svg',
        skin_id: 39,
        label: 'Добавить SG 553'
    },
    {
        img: 'p2000.svg',
        skin_id: 32,
        label: 'Добавить P2000'
    },
    {
        img: 'tec9.svg',
        skin_id: 30,
        label: 'Добавить Tec-9'
    },
    {
        img: 'fiveseven.svg',
        skin_id: 3,
        label: 'Добавить Five-SeveN'
    },
    {
        img: 'cz75a.svg',
        skin_id: 63,
        label: 'Добавить CZ75'
    },
    {
        img: 'revolver.svg',
        skin_id: 64,
        label: 'Добавить R8 Revolver'
    },
    {
        img: 'dualies.svg',
        skin_id: 2,
        label: 'Добавить Dual Berettas'
    },
    {
        img: 'p90.svg',
        skin_id: 19,
        label: 'Добавить P90'
    },
    {
        img: 'ump45.svg',
        skin_id: 24,
        label: 'Добавить UMP-45'
    },
    {
        img: 'mp7.svg',
        skin_id: 33,
        label: 'Добавить MP7'
    },
    {
        img: 'mp5sd.svg',
        skin_id: 23,
        label: 'Добавить MP5-SD'
    },
    {
        img: 'mp9.svg',
        skin_id: 34,
        label: 'Добавить MP9'
    },
    {
        img: 'mag7.svg',
        skin_id: 27,
        label: 'Добавить MAG-7'
    },
    {
        img: 'mac10.svg',
        skin_id: 17,
        label: 'Добавить MAC-10'
    },
    {
        img: 'bizon.svg',
        skin_id: 26,
        label: 'Добавить PP-Bizon'
    },
    {
        img: 'scar20.svg',
        skin_id: 38,
        label: 'Добавить SCAR-20'
    },
    {
        img: 'g3sg1.svg',
        skin_id: 11,
        label: 'Добавить G3SG1'
    },
    {
        img: 'sawedoff.svg',
        skin_id: 29,
        label: 'Добавить Sawed-Off'
    },
    {
        img: 'nova.svg',
        skin_id: 35,
        label: 'Добавить Nova'
    },
    {
        img: 'xm1014.svg',
        skin_id: 25,
        label: 'Добавить XM1014'
    },
    {
        img: 'negev.svg',
        skin_id: 28,
        label: 'Добавить Negev'
    },
    {
        img: 'm249.svg',
        skin_id: 14,
        label: 'Добавить M249'
    },
    {
        img: 'taser.svg',
        skin_id: 31,
        label: 'Добавить Zeus x27'
    },
]

export const SkinList = () => {
    const { weapontype } = useParams()
    const { data } = useGetSkinsQuery({})

    const navigate = useNavigate()


    return (
        <div className={styles.grid}>
            {data && weapontype && data[weapontype as TStep].map(dskin => {
                return (
                    <SkinItem onClick={(key) => navigate(`variant/${key}`)} skin_key={dskin.skin_key} img={dskin.image_url} paint_name={dskin.paint_name.split('|')[0].trim()} weapon_name={''} />
                )
            })}
        </div>
    )
}