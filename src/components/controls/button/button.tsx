import styles from './button.module.scss'
import { HTMLAttributes, ReactNode } from 'react';
import cn from 'classnames';

type Props = {
  children?: ReactNode
  leftAddon?: ReactNode
  size?: 's' | 'm' | 'l'
  block?: boolean
} & HTMLAttributes<HTMLDivElement>;

export const Button = (props: Props) => {
  const { children,block, leftAddon, size = 'm', ...rest } = props
  return (
    <div {...rest} className={cn(styles.button, {
      [styles[`size_${size}`]]: true,
      [styles.block]: block
    })}>
      {leftAddon && (
        <div className={styles.leftAddon}>
          {leftAddon}
        </div>
      )}
      <div>
        {children}
      </div>
    </div>
  )
}