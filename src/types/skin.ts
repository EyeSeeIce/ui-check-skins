export type Skin = {
    skin_key: string,
    image_url: string,
    paint_name: string,
    weapon_name: string,
    variants: {[lkey: number]: SkinVariant}
}

export type SkinVariant = {
    image_url: string
    paint_name: string
    weapon_name: string
}



export type RequestSkinsDto<TStep extends string | number | symbol> = {
    [key in TStep]: Skin[];
}

export type TWeaponType = 'weapon' | 'knife' | 'gloves'

export type UpdateSkinDto = {
    type: TWeaponType,
    weapon_name: string,
    weapon_defindex: number | string,
    weapon_paint_id: number | string,
    weapon_wear: number,
    weapon_seed: number,
    weapon_nametag: string
}