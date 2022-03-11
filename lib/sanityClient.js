import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: '04d9h4wo',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skpOuo65YKKwsKykju1qtDwucxQuyTqu2dnQN5y3Xg4EIv9F0RLJeAp3BuDBlci8Ov3RK3hKjtqWokKj4GdSVj2uBj7l6HBTiWBG9Km5zcaOIreLjKxh9OPTezsBq70K9GYVN6INjuv2x2KpW7WZiza28fiGkERC8n1d5VzoIGiMNpiDPRnS',
  useCdn: false,
})
