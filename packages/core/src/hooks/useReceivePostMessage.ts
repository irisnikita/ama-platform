// Libraries
import { useCallback, useEffect } from "react";

// Constants
import { MESSAGE_TYPE } from "@/constants";

// Custom Hooks
import { useNavigateWithSearch } from "./useNavigateWithSearch";

export const useReceivePostMessage = () => {
  const navigate = useNavigateWithSearch();

  const handleMessage = useCallback(
    (event: MessageEvent) => {
      if (event.origin !== window.location.origin) {
        return;
      }

      const { data } = event;

      if (data && typeof data === "object" && "type" in data) {
        switch (data.type) {
          case MESSAGE_TYPE.NAVIGATE: {
            const { path, options } = data.data || {};

            if (path) {
              navigate(path, options);
            }
            break;
          }
          default:
            console.warn("Unknown message type:", data.type);
        }
      }
    },
    [navigate]
  );

  useEffect(() => {
    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [handleMessage]);
};
