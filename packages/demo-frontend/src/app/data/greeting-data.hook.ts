import { GreetingsResponse } from 'demo-common';
import { useCallback, useState } from 'react';

import { GreetingService } from '../services/greeting.service';

const greetingService = new GreetingService();

export interface GreetingDataHookValue {
  greeting: GreetingsResponse | undefined;
  loadGreeting: () => Promise<GreetingsResponse>;
  loading: boolean;
  hasError: boolean;
}

export function useGreetingData(): GreetingDataHookValue {
  const [greeting, setGreeting] = useState<GreetingsResponse | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const loadGreeting = useCallback(() => {
    setLoading(true);
    setHasError(false);
    return greetingService
      .getGreetings()
      .then((data) => {
        setGreeting(data);
        return data;
      })
      .catch((error) => {
        console.error('Unable to get greeting', error);
        setHasError(true);

        // returing resolved promise to prevent UI breaking in dev/serve mode
        return Promise.resolve({ message: 'Something went wrong' });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    greeting,
    loading,
    hasError,
    loadGreeting,
  };
}
