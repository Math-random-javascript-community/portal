import React, {useContext, createContext, ReactNode} from 'react';
import {FilterType} from '../../interfaces';

const FiltersContext = createContext(null);

type PropsType = {
  children?: ReactNode
  items: FilterType[]
} 
const FiltersProvider = ({children, items}: PropsType) => (
  <FiltersContext.Provider value={items}>
    {children}
  </FiltersContext.Provider>
);

export const useFilters = () => useContext(FiltersContext);

export default FiltersProvider;