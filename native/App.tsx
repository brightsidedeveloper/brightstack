import { useColorScheme, View } from 'react-native'
import * as Notifications from 'expo-notifications'
import { WebView } from 'react-native-webview'
import { useMemo } from 'react'

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
  const theme = useColorScheme()

  const backgroundColor = useMemo(() => ThemeColors[theme ?? 'light'].background, [theme])

  return (
    <View style={{ flex: 1, backgroundColor }}>
      <View
        style={{
          flex: 1,
          marginTop: 40,
        }}
      >
        <WebView source={{ uri: ENTRY }} onLoadEnd={onWebViewLoadEnd} />
      </View>
    </View>
  )
}

const ENTRY = 'https://github.com/brightsidedeveloper/brightstack'

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
