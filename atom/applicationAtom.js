import { atom } from "recoil";

export const applicationIdForUpdateOrderState = atom({
    key: 'applicationIdForUpdateOrderStateKey', // unique ID (with respect to other atoms/selectors)
    default: [], // default value (aka initial value)
  });

  export const applicationStatusState = atom({
    key : 'applicationStatusStateKey',
    default : 'Applied'
}) 

export const isApplicationUpdatedState = atom({
    key : 'isApplicationUpdatedStateKey',
    default : false
}) 


export const userIdState = atom({
  key : 'userIdStateKey',
  default : null
}) 

