import { useContext } from 'react'
import { StateDispatchContext } from '../context/StateContext'

const useAppStateDispatch = () => {
  return useContext(StateDispatchContext);
}

export default useAppStateDispatch;