import { createContext, useContext } from 'react';
import type { EventService } from './EventService';

export const EventContext = createContext<EventService | null>(null);

export function useEvents(): EventTarget {
  const eventService = useContext(EventContext);
  if (!eventService) {
    throw new Error('EventService is not provided');
  }
  return eventService.target;
}
