import React, { useEffect, useState, useMemo } from "react";
import Echo from "laravel-echo";
import Pusher from "pusher-js";

Pusher.logToConsole = true;

/**
 * Pusher configuration
 */
const pusherConfig = {
  key: 'some-key',
  cluster: '',
  wsHost: 'sockets.logicrises.co.uk',
  wsPort: 6001,
  forceTLS: false,
  encrypted: false,
  enabledTransports: ['ws', 'wss'],
  // auth endpoint for private channels
  // e.g. for Laravel https://example.com/api/broadcasting/auth
  authEndpoint: 'https://ce7e-157-231-132-242.ngrok-free.app/broadcasting/auth',
  
}

/**
 * Context for Channels
 */
const ChannelsContext = React.createContext();

/**
 * Channel Context Provider
 */
export function ChannelsProvider({ children, authUser, authToken }) {
  const [channels, setChannels] = useState(undefined);
  useEffect(() => {
    const channels = getChannels(pusherConfig, authToken);
    setChannels(channels);
    return () => {
      // disconnect from server and reset the channels
      channels.disconnect();
      setChannels(undefined);
    };
  }, [authUser, authToken]);

  return (
    <ChannelsContext.Provider value={channels}>
      {children}
    </ChannelsContext.Provider>
  );
}

/**
 * Hook to use the channels provided via context
 */
export function useChannels() {
  const channels = React.useContext(ChannelsContext);
  return channels;
}

/**
 * Use private channels
 * It simple return the useChannels with authenticated user bindings
 */ 
export function usePrivateChannels(authUserId) {
  const channels = useChannels();
  return useMemo(() => {
    return channels && channels.private("App.User." + authUserId);
  }, [channels, authUserId]);
}
    
/**
 * Get the channels
 */
function getChannels(pusherConfig, authToken) {

  
  const client = new Pusher(pusherConfig.key, {
    wsHost: pusherConfig.wsHost,
    wsPort: pusherConfig.wsPort,
    cluster: pusherConfig.cluster,
    forceTLS: false,
    authEndpoint: pusherConfig.authEndpoint,
    auth: authToken ? {
      headers: {
        // pass the authorization token when using private channels
        Authorization: `Bearer ${authToken}`,
      },
    } : undefined,
  });

  const channels = new Echo({
    broadcaster: "pusher",
    client: client,
  });

  return channels;
}