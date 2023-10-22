import { ReactNode, useEffect, useState } from 'react';

interface CustomSuspenseProps {
  fallback: ReactNode;
  maxDuration?: number;
  children: ReactNode;
}

export default function CustomSuspense({
  fallback,
  maxDuration,
  children,
}: CustomSuspenseProps) {
  const [isLoadingDone, setIsLoadingDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoadingDone(true);
    }, maxDuration);

    return () => clearTimeout(timer);
  }, [maxDuration]);

  return <>{isLoadingDone ? children : fallback}</>;
}
