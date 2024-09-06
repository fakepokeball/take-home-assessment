import { createReducer, on } from '@ngrx/store';
import { changeMenuItem } from './menu-item.actions';


export interface MenuItemState {
  color: string;
}

export const initialState: MenuItemState = {
  color: '#ccc'
};

export const menuItemReducer = createReducer(
  initialState,
  on(changeMenuItem, (state, { color }) => ({ ...state, color }))
);
