import React from 'react';
import { Flame } from 'lucide-react';
import { SpiceLevel } from '../types';
import { cn } from '../lib/utils';

interface SpiceMeterProps {
  level: SpiceLevel;
  className?: string;
}

export default function SpiceMeter({ level, className }: SpiceMeterProps) {
  const labels = ['Mild', 'Medium', 'Hot', 'Extreme', 'Inferno'];
  
  return (
    <div className={cn('flex flex-col gap-1', className)}>
      <div className="flex items-center gap-1">
        {[0, 1, 2, 3, 4].map((i) => (
          <Flame
            key={i}
            className={cn(
              'w-4 h-4 transition-all duration-300',
              i <= level 
                ? 'text-spice-600 fill-spice-600 scale-110' 
                : 'text-spice-200 fill-transparent'
            )}
          />
        ))}
      </div>
      <span className={cn(
        'text-[10px] font-bold uppercase tracking-widest',
        level >= 3 ? 'text-spice-700' : 'text-spice-500'
      )}>
        {labels[level]}
      </span>
    </div>
  );
}
