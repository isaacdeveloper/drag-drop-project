declare module "redux-persist" {
  export var persistStore: (store: Redux.Store) => void
  export var autoRehydrate: () => Redux.Middleware
}

declare module "redux-persist/constants" {
  export var REHYDRATE: string
}
