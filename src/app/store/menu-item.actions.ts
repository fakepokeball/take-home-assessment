import { createAction, props } from '@ngrx/store';

export const changeMenuItem = createAction(
  '[Menu] Change Menu Item',
  props<{ color: string }>()
);