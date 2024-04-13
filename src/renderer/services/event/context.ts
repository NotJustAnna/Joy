import { createContext } from 'react';
import type { EventService } from './EventService';

export const EventContext = createContext<EventService | null>(null);
