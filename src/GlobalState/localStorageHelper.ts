import { Store } from 'redux';

export const saveStateListener = (store: Store) => {
  store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem('productsState', JSON.stringify(state.products));
  });
};
