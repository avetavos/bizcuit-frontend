import type { NextApiRequest, NextApiResponse } from 'next'
import Axios from 'axios'
import { IBeer } from '@/pages/interfaces/beer.interface'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IBeer>
) {
  const host = process.env.API_HOST as string
  const response = await Axios.get(`${host}/beers/random_beer`)
  res.status(200).json(response.data)
}