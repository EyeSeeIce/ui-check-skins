import styles from './variant-list.module.scss'
import { useParams } from 'react-router';
import { useGetSkinsQuery } from '../../redux/services/skin.service.ts';
import { TStep } from '../../redux/modules/route.module.ts';
import { SkinItem } from '../skin-item';
import { useState } from 'react';
import { SkinSettings } from '../skin-settings';

export const VariantList = () => {
  const [previewId, setPreviewId] = useState<null | number | string>(null);
  const { defindex, weapontype} = useParams<{ weapontype: TStep, defindex: string}>();
  const { data, isSuccess } = useGetSkinsQuery(null)



  if (!isSuccess && !weapontype) {
    return <div>Loading...</div>
  }

  if (data && defindex) {

    const skins = data[weapontype as TStep].find(skin => skin.skin_key === defindex)!.variants



    const handleClick = (paint: string | number) => {
      setPreviewId(paint)


    }

    return (
      <div className={styles.container}>
        <div className={styles.grid}>
          {Object.entries(skins)?.map(([skinId, skin]) => {

            return (
              // @ts-ignore
              <SkinItem onClick={(key) => handleClick(key)} skin_key={skinId} weapon_name={skin.weapon_name} img={skin.image_url}
                        paint_name={skin.paint_name} />
            )
          })}
        </div>
        {data && previewId && (
          <SkinSettings defindex={defindex} paint={previewId} weapontype={weapontype as TStep} />
        )}
      </div>
    )
  }
}