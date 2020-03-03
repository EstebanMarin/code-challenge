import { useReducer, useEffect } from 'react'
import token from '../../constants/token'
import data from '../../constants/constants.json'
import { Data } from './dataType'

const path = `https://www.adidas.com/`
const basketUrl = `api/checkout/baskets/`
const basketId = `f0ffe4f592d75402b6c148bf0b`
const basket: RequestInfo = `${path}${basketUrl}${basketId}`
const requestInit: RequestInit = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': '*/*',
    'crendentials': 'include',
    'Access-Control-Request-Headers': 'Authorization',
    'Authorization': `Bearer ${token}`
  }
}


interface State {
    // TODO update typing of data
  data: any,
}

export const initialState: State = {
  data: {},
};

export enum ActionTypes {
  setData = 'setData'
}

type Action =
  | { type: ActionTypes.setData; payload: any }

export function reducer(state: State, action: Action) {
  switch (action.type) {
    case ActionTypes.setData: {
      return {
        ...state,
        data
      }
    }
    default:
      throw new Error();
  }
}

const useBasket = () => {
  const [basket, dispatch] = useReducer(reducer, initialState)
  useEffect(() => {
    /* fetch(basket, requestInit).then(console.log); */
    dispatch({ type: ActionTypes.setData, payload: data })
  }, [])
  return [basket, dispatch]
}
export default useBasket
