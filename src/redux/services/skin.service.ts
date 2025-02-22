import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RequestSkinsDto, UpdateSkinDto } from '../../types/skin.ts';
import { TStep } from '../modules/route.module.ts';

export const skinService = createApi({
  reducerPath: 'skin',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://api.realmcraft.ru/api/skin/' }),
  endpoints: (builder) => ({
    getSkins: builder.query<RequestSkinsDto<TStep>, null>({
      query: () => `/weapons`,
    }),
    updateSkin: builder.mutation<undefined, UpdateSkinDto>({
      query: (body) => ({
        url: `/weapons`,
        method: 'POST',
        body: {
          steamid: '76561199653697399',
          ...body,
        },
      }),

    }),
  }),
});

export const { useGetSkinsQuery, useUpdateSkinMutation } = skinService;