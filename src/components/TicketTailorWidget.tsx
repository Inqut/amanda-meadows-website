import React, { useEffect } from 'react';

export const TicketTailorWidget: React.FC = () => {
  useEffect(() => {
    // Load Ticket Tailor script
    const script = document.createElement('script');
    script.src = 'https://cdn.tickettailor.com/js/widgets/min/widget.js';
    script.setAttribute('data-url', 'https://www.tickettailor.com/all-tickets/amandameadowsproductions/?ref=website_widget&show_search_filter=true&show_date_filter=true&show_sort=true');
    script.setAttribute('data-type', 'inline');
    script.setAttribute('data-inline-minimal', 'true');
    script.setAttribute('data-inline-show-logo', 'false');
    script.setAttribute('data-inline-bg-fill', 'false');
    script.setAttribute('data-inline-inherit-ref-from-url-param', '');
    script.setAttribute('data-inline-ref', 'website_widget');
    
    // Clean up function to remove the script when component unmounts
    return () => {
      const existingScript = document.querySelector('script[src="https://cdn.tickettailor.com/js/widgets/min/widget.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="tt-widget">
      <div className="tt-widget-fallback">
        <p>
          <a href="https://www.tickettailor.com/all-tickets/amandameadowsproductions/?ref=website_widget&show_search_filter=true&show_date_filter=true&show_sort=true" 
             target="_blank" 
             rel="noopener noreferrer">
            Click here to buy tickets
          </a>
          <br />
          <small>
            <a href="https://www.tickettailor.com?rf=wdg_224679" 
               className="tt-widget-powered">
              Sell tickets online with Ticket Tailor
            </a>
          </small>
        </p>
      </div>
    </div>
  );
};
