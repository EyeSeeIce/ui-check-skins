import styles from './skins-sidebar.module.scss';
import { Button } from '../../../controls/button';
import { Icon } from '../../../icon';
import { TStep } from '../../../../redux/modules/route.module.ts';
import { useNavigate } from 'react-router';

const menu = [
  {
    id: 'gloves',
    label: 'Gloves',
    img: 'gloves.svg',
  },
  {
    id: 'knifes',
    label: 'Knifes',
    img: 'knife.svg',
  },
  {
    id: 'pistols',
    label: 'Pistols',
    img: 'glock.svg',
  },
  {
    id: 'rifles',
    label: 'Rifles',
    img: 'ak47.svg',
  },
  {
    id: 'snipers',
    label: 'Snipers',
    img: 'awp.svg',
  },
  {
    id: 'smg',
    label: 'SMG',
    img: 'mp9.svg',
  },
  {
    id: 'heavy',
    label: 'Heavy',
    img: 'nova.svg',
  },
];
export const SkinsSidebar = () => {

  const navigate = useNavigate();

  const onClickButton = (step: TStep) => {
    navigate(`/weapon/${step}`)
  }
  return (
    <div className={styles.menu}>
      {menu.map(menuItem => (<Button onClick={() => onClickButton(menuItem.id as TStep)} block={true} size='m' key={menuItem.id} leftAddon={<Icon size='s' icon={menuItem.img} />}>{menuItem.label}</Button>))}
    </div>
  );
};