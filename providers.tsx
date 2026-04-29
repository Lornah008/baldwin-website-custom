'use client'
import { Next13ProgressBar } from 'next13-progressbar'

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children}
      <Next13ProgressBar height="2px" color="#9a1b1e" options={{ showSpinner: true }} showOnShallow />
    </div>
  );
};

export default Providers;