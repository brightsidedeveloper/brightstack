import React, { useCallback, useMemo, useRef } from 'react'
import WebView, { WebViewMessageEvent } from 'react-native-webview'
import BrightSideNative from '../classes/BrightSideNative'
import BrightSideContext from './BrightSideContext'

interface BrightSideProviderProps {
  brightside: BrightSideNative
  children: React.ReactNode
}

export default function BrightSideProvider({ brightside, children }: BrightSideProviderProps) {
  const context = useBrightSide(brightside)
  return <BrightSideContext.Provider value={context}>{children}</BrightSideContext.Provider>
}

function useBrightSide(brightside: BrightSideNative) {
  const webviewRef = useRef<WebView>(null)

  const onMessageListenersRef = useRef<Record<string, (data: unknown) => void>>({})

  const handleMessage = useCallback((e: WebViewMessageEvent) => {
    const { key, data } = JSON.parse(e.nativeEvent.data)
    onMessageListenersRef.current.forEach((listener: Record<string, (data: unknown) => void>) => {
      if (listener[key]) listener[key](data)
    })
  }, [])

  const addListener = useCallback((key: string, callback: (data: unknown) => void) => {
    onMessageListenersRef.current[key] = callback
  }, [])

  const removeListener = useCallback((key: string) => {
    delete onMessageListenersRef.current[key]
  }, [])

  return useMemo(
    () => ({
      webviewRef,
      brightside,
      handleMessage,
      addListener,
      removeListener,
    }),
    [brightside, handleMessage, addListener, removeListener]
  )
}

export type BrightSideContextType = ReturnType<typeof useBrightSide>
