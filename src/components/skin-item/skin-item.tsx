import styles from './skin-item.module.scss'
import cn from "classnames";

type Props = {
    skin_key: number,
    img: string,
    paint_name: string
    weapon_name: string,
    onClick?: (skinKey: string | number) => void
}

export const SkinItem = ({img, paint_name, skin_key, onClick}: Props) => {

    const handleClick = () => {
      if (onClick) {
        onClick(skin_key)
      }
    }
    return (
      <div className={cn(styles.block, styles.block_main)} onClick={handleClick}>
          <img src={img} alt="" />
          <span className={styles.label} >{paint_name}</span>
      </div>
    )
}