import { useEffect, useMemo } from 'react';

import { Button } from '../components/Button';
import { useGreetingData } from '../data/greeting-data.hook';

export function Greeting() {
  const { greeting, loading, hasError, loadGreeting } = useGreetingData();

  const greetingText = useMemo(() => {
    return greeting ? greeting.message : '';
  }, [greeting]);

  useEffect(() => {
    loadGreeting();
  }, []);

  return (
    <div className="flex">
      <div className="w-full h-[170px] rounded p-3 shadow-lg bg-orange-200">
        <h2 className="text-2xl">Service Greeting</h2>
        <Button onClick={loadGreeting} label={loading ? 'loading...' : 'Load Greeting'} disabled={loading} />
        <div className="mt-3">Greeting: {greetingText}</div>
        {hasError ? <div className="bg-red-500 p-1 rounded text-white mt-3">Error: Service unreachable</div> : null}
      </div>
    </div>
  );
}
