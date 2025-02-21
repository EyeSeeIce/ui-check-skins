import styles from './skin-settings.module.scss';
import { useGetSkinsQuery, useUpdateSkinMutation } from '../../redux/services/skin.service.ts';
import { TStep } from '../../redux/modules/route.module.ts';
import { useState } from 'react';
import { Button, Divider, HStack, Input, Slider } from 'rsuite';
import { Controller, useForm } from 'react-hook-form';
import { useParams } from 'react-router';


type Props = {
  defindex: string | number
  paint: string | number
  weapontype: TStep

}

export const SkinSettings = (props: Props) => {
  const { control, register, handleSubmit, getValues } = useForm({
    defaultValues: {
      weapon_wear: 0.001,
      weapon_seed: 40,
      weapon_nametag: ''
    }
  });

  const { defindex, paint, weapontype } = props;
  const [update] = useUpdateSkinMutation();

  const { data, isSuccess } = useGetSkinsQuery(null);

  if (!data) {
    return <div>loading</div>;
  }


  const skin = data[weapontype as TStep]?.find(skin => skin.skin_key === defindex)!.variants[+paint];

  const acceptsSkin = handleSubmit((data) => {

    update({
      type: weapontype === 'gloves' ? 'gloves' : weapontype === 'knifes' ? 'knife' : 'weapon',
      weapon_name: skin.weapon_name,
      weapon_defindex: defindex,
      weapon_paint_id: paint,
      weapon_wear: data.weapon_wear,
      weapon_seed: data.weapon_seed,
      weapon_nametag: data.weapon_nametag
    })
  });


  return (
    <div className={styles.container}>
      <div className={styles.preview}>
        <img src={skin.image_url} alt="" />
      </div>
      <Divider />
      <div className={styles.controls}>
        <div className={styles.space}>
            <span>
              Float
            </span>
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <Slider
                min={0.001}
                max={0.999}
                step={0.001}
                barClassName={styles.bar}
                handleClassName={styles.handle}
                progress
                defaultValue={0.001}
                value={value}
                onChange={value => onChange(Math.floor(value * 1000) / 1000)}
              />
            )}
            name="weapon_wear"
          />
        </div>

        <div className={styles.space}>
            <span>
              Pattern
            </span>
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <Slider
                min={1}
                max={1033}
                step={1}
                progress
                defaultValue={40}
                value={value}
                onChange={onChange}
              />
            )}
            name="weapon_seed"
          />
        </div>
        <div className={styles.space}>
          <span>Nametag</span>
          <Controller
            control={control}
            render={({ field: { onChange, value, ref } }) => (
              <Input maxLength={20} onChange={onChange} value={value} ref={ref} />
            )}
            name="weapon_nametag"
          />
        </div>
        <Button onClick={acceptsSkin}>Accept</Button>
      </div>
    </div>
  );
};