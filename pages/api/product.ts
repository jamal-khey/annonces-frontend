// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import type { Product }  from '../../model/product';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product>
) {
    const limit = req.query.limit ?? 5
    const page = req.query.page ?? 1
    const resReq = await fetch(`http://127.0.0.1:8000/product?limit=${limit}&page=${page}`);
    res.status(200).json(await resReq.json())
}
