import React from "react";
import track from "@felipelealdefaria/tracker-service";

export const ReactComponent = () => {
  track.init({
    apiKey: 'MY_API_KEY',
    options: {
      saveEvents: true,
      includeUtm: true,
      includeGclid: true,
      includeReferrer: true,
      eventUploadPeriodMillis: 10000,
      saveParamsReferrerOncePerSession: false,
    },
  });

  const trackEvent = (
    eventName: string,
    eventProperties?: {},
    callback?: () => unknown,
  ) => {
    track.log({
      callback: callback,
      eventName: eventName,
      eventProperties: {
        page_title: document.title,
        page_url: window.location.href,
        ...eventProperties,
      },
    });
  };

  React.useEffect(() => {
    track.setUserId('POC-AMPLITUDE-0002');
    
    track.setUserProperties({
      user_name: "John",
      user_email: "john@email.com"
    });
    
    trackEvent("pageview_loaded");
  }, []);

  return (
    <div>
      <button
        type="button"
        onClick={() =>
          trackEvent("cta_clicked", {
            order_id: "00078",
            order_price: "R$1525,00",
          })
        }
      >
        Order
      </button>

      <button
        type="button"
        onClick={() =>
          trackEvent("cta_clicked", {
            product_id: "0001",
            product_name: "book 1",
          })
        }
      >
        Product
      </button>

      <button
        type="button"
        onClick={() =>
          trackEvent("cta_clicked", {
            course_id: "0005",
            course_name: "course 1",
          })
        }
      >
        Courses
      </button>
    </div>
  );
}
