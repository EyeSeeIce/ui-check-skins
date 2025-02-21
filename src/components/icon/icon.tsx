
type Props = {
  icon?: string
  size?: 's' | 'm' | 'l'
}

const matchHeightSize = {
  s: 24,
  m: 32,
  l: 44
}

export const Icon = (props: Props) => {
  const { size = 'm', icon} = props
  return (
    <img style={{
      height: matchHeightSize[size],
    }} src={`/public/weapon_icons/${icon}`} alt="" />
  )
}