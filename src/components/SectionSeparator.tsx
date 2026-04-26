import React from 'react';

// Archival Editorial: sober horizontal rule that thickens on hover
const SectionSeparator: React.FC = () => {
  return (
    <div className="container-width px-6 sm:px-8 lg:px-12">
      <div className="group h-12 flex items-center">
        <div className="h-px w-full bg-foreground/30 group-hover:h-[2px] group-hover:bg-foreground/70 transition-all duration-500" />
      </div>
    </div>
  );
};

export default SectionSeparator;
