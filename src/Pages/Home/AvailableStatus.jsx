import React from 'react';

const AvailableStatus = () => {
  return (
    <div className="flex items-center gap-2 bg-orange-700 p-2 rounded-full w-fit">
      {/* Blinking dot */}
      <span className="h-3 w-3 rounded-full bg-orange-300 animate-pulse"></span>
      <h5 className="text-sm font-semibold text-green-100">
        Available for work
      </h5>
    </div>
  );
};

export default AvailableStatus;