import React from 'react';
import Skeleton from './Skeleton';

const PackageCardSkeleton: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-100 flex flex-col h-full overflow-hidden relative">
      <div className="p-6 pb-2">
        {/* Category Badge */}
        <Skeleton className="w-24 h-6 rounded-full mb-3" />
        
        {/* Title */}
        <Skeleton className="w-3/4 h-8 rounded-lg mb-2" />
        
        {/* Recommended For */}
        <Skeleton className="w-1/2 h-4 rounded mb-4" />
        
        {/* Price */}
        <div className="flex items-baseline gap-2 mb-6">
          <Skeleton className="w-20 h-8 rounded-lg" />
          <Skeleton className="w-16 h-4 rounded-lg" />
          <Skeleton className="w-16 h-4 rounded-lg ml-2" />
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-slate-100 mx-6"></div>

      <div className="p-6 pt-4 flex-grow">
        {/* Parameters Header */}
        <div className="flex items-center gap-2 mb-4">
           <Skeleton className="w-5 h-5 rounded" />
           <Skeleton className="w-40 h-5 rounded" />
        </div>
        
        {/* List Items */}
        <div className="space-y-3 mb-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-start gap-2">
              <Skeleton className="w-4 h-4 rounded shrink-0 mt-0.5" />
              <Skeleton className="w-full h-4 rounded" />
            </div>
          ))}
        </div>

        {/* Turnaround Time */}
        <div className="flex items-center gap-2 mb-6">
           <Skeleton className="w-4 h-4 rounded" />
           <Skeleton className="w-32 h-4 rounded" />
        </div>
      </div>

      <div className="p-6 pt-0 mt-auto">
        <Skeleton className="w-full h-12 rounded-xl" />
      </div>
    </div>
  );
};

export default PackageCardSkeleton;