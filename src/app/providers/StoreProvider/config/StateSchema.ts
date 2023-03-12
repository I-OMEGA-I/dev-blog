import { EnhancedStore } from '@reduxjs/toolkit';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import { createReducerManager } from './reducerMananger';

export interface StateSchema {
  user: UserSchema,
  // async
  loginForm?: LoginSchema
}

export type StateSchemaKey = keyof StateSchema;

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReturnType<typeof createReducerManager>
}
