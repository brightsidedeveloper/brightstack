import { useCallback, useMemo } from 'react';
import useBrightSideContext from '../context/useBrightSideContext';

export default function useWebview() {
    const { webviewRef, brightside, handleMessage } = useBrightSideContext()

    const sendMessage = useCallback(
        (key: string, data: unknown) => {
          if (!webviewRef.current) throw new Error('webviewRef from useNative must be attached to Webview')
          brightside.webview.postToWebView(key, data, webviewRef.current)
        },
        [brightside, webviewRef]
      )

    
  return useMemo(() => ({webviewRef, sendMessage, handleMessage}), [webviewRef, sendMessage])
}
