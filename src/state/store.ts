import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { logger } from "redux-logger";
import { rootReducer, AppState } from "./reducers/state";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { Store, AnyAction } from "redux";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export function configureStore(initialState?: AppState) {
  const middlewares = [thunk, logger];

  const store: Store<any, AnyAction> = createStore(
    persistedReducer,
    initialState,
    applyMiddleware(...middlewares)
  );

  const persistor = persistStore(store);
  return { store, persistor };
}
