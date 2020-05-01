  
import { ActionCreatorsMapObject } from 'redux';

export function actionTypes<T extends ActionCreatorsMapObject>(
  actionCreatorsMap: T
): ReturnType<T[keyof T]> {
  return undefined!;
}