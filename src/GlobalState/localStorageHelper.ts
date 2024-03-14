import { Store } from 'redux';

export const saveStateListener = (store: Store) => {
  store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem('reduxState', JSON.stringify(state.products));
  });
};
