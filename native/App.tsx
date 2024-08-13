import { useColorScheme, View } from 'react-native'
import * as Notifications from 'expo-notifications'
import { useMemo } from 'react'
import { WebView } from 'react-native-webview'
import useWebview from './temp/src/hooks/useWebview'
import useWebViewListener from './temp/src/hooks/useWebviewListener'
import { z } from 'zod'

interface AppProps {
  onWebViewLoadEnd: () => void
}

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
})

export default function App({ onWebViewLoadEnd }: AppProps) {
  const { webviewRef, handleMessage, sendMessage } = useWebview()
  const theme = useColorScheme()

  const backgroundColor = useMemo(() => ThemeColors[theme ?? 'light'].background, [theme])

  useWebViewListener(
    'test',
    ({ woah }) => {
      sendMessage('test', { woah: { that: 'was', fast: '!' } })
      console.log(woah)
    },
    z.object({ woah: z.string() })
  )

  return (
    <View style={{ flex: 1, backgroundColor }}>
      <View
        style={{
          flex: 1,
          marginTop: 40,
        }}
      >
        <WebView ref={webviewRef} source={{ uri: ENTRY }} onMessage={handleMessage} onLoadEnd={onWebViewLoadEnd} />
      </View>
    </View>
  )
}

const ENTRY = 'https://brightstack-vite.vercel.app/'

const ThemeColors = {
  primary: '#2a6ec6',
  light: {
    background: '#ffffff',
    foreground: '#020817',
  },
  dark: {
    background: '#020817',
    foreground: '#ffffff',
  },
}
