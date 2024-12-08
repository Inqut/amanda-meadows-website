import React, { useEffect } from 'react';

interface EventbriteWidgetProps {
  eventId: string;
  height?: number;
}

declare global {
  interface Window {
    EBWidgets: {
      createWidget: (config: {
        widgetType: string;
        eventId: string;
        iframeContainerId: string;
        iframeContainerHeight?: number;
        onOrderComplete?: () => void;
      }) => void;
    };
  }
}

export const EventbriteWidget: React.FC<EventbriteWidgetProps> = ({ eventId, height = 425 }) => {
  const containerId = `eventbrite-widget-container-${eventId}`;

  useEffect(() => {
    const handleOrderComplete = () => {
      console.log('Order complete!');
    };

    if (window.EBWidgets) {
      window.EBWidgets.createWidget({
        widgetType: 'checkout',
        eventId,
        iframeContainerId: containerId,
        iframeContainerHeight: height,
        onOrderComplete: handleOrderComplete
      });
    }
  }, [eventId, height, containerId]);

  return <div id={containerId} className="w-full" />;
};
