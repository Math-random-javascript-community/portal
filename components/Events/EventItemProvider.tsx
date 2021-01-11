import React, {useContext, createContext, ReactNode} from 'react';
import {EventType} from '../../interfaces';

const EventContext = createContext(null);

const EventItemProvider = ({children, data}: { children?: ReactNode, data: EventType }) => (
  <EventContext.Provider value={data}>
    {children}
  </EventContext.Provider>
);

export const useEvent = () => useContext(EventContext);

export default EventItemProvider;