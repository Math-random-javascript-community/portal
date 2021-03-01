import React, {useContext, createContext, ReactNode} from 'react';
import {EventType} from '../../interfaces';

const EventContext = createContext( {} as EventType);

interface EventItemProviderProps {
  children?: ReactNode;
  data: EventType;
}
const EventItemProvider = ({children, data}: EventItemProviderProps) => (
  <EventContext.Provider value={data}>
    {children}
  </EventContext.Provider>
);

export const useEvent = () => useContext(EventContext);

export default EventItemProvider;