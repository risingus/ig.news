/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from "next"




export default (request: NextApiRequest, response: NextApiResponse) => {

  const id = request.query
  
  const users = [
    {id: 1, name: 'Gustavo'},
    {id: 2, name: 'Fernando'},
    {id: 3, name: 'Bianca'},
  ]

  return response.json(users);


}