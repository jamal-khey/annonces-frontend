
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
const axios = require('axios');

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
    // Get data submitted in request's body.
    const body = req.body
  
    // Guard clause checks for first and last name,
    // and returns early if they are not found
    if (!body.name || !body.price) {
      // Sends a HTTP bad request error code
      return res.status(400).json({ data: 'First or last name not found' })
    }
    
    const requestHeaders: HeadersInit = new Headers();
    const bodyData = JSON.stringify(req.body)
    requestHeaders.set('Content-Type', 'application/json');
    requestHeaders.set('Content-Length', bodyData.length.toString())
    try{
    const resReq = await fetch(`http://127.0.0.1:8000/setproduct`, {
      body: JSON.stringify(req.body), 
      method: 'post',
      headers: requestHeaders
    } );
    console.log("fetched rust server")
    let jres = await resReq.json();
    //console.log(jres)
    res.status(resReq.status).json({message: 'hello'})
    
    } catch(error){
      res.status(404).json({message: 'hello'})
    
    }
    
    // console.log('inside API')
    // try{
    // const response = await axios.post('http://127.0.0.1:8000/setproduct', body)
    // //console.log(response)
    // res.status(200).json(response.body)
    // }
    // catch (err){
    //   res.status(404).json({error: 'hello'})
    //   console.log(err);
    // }
    

    // res.status(200).json({message: 'hello'})
  }
  