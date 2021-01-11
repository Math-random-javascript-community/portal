import React, {useContext, createContext, ReactNode} from 'react';
import {DigestType} from '../../interfaces';

const DigestContext = createContext(null);

const DigestProvider = ({children, data}: { children?: ReactNode, data: DigestType }) => (
  <DigestContext.Provider value={data}>
    {children}
  </DigestContext.Provider>
);

export const useDigest = () => useContext(DigestContext);

export default DigestProvider;