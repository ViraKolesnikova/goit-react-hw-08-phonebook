import { isRejectedWithValue } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';


export const ErrorLogger = (api) => (next) => (action) => {
 
  if (isRejectedWithValue(action)) {
    console.warn('We got a rejected action!')
    toast.error(`Error: ${action.payload.status}! ${action.error.message}`)
  }

  return next(action)
}