import { ValidPaths } from '../Types/types';

export const isValidPath = (path: string): boolean => {
  return Object.values(ValidPaths).includes(path as ValidPaths);
};
