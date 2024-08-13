import 'react-native-reanimated'

import { SplashScreen } from 'expo-router'
import App from '@/App'
import { WebViewProvider } from 'brightside-native'
import brightside from '@/api/brightside'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  return (
    <WebViewProvider brightside={brightside}>
      <App
        onWebViewLoadEnd={() => {
          setTimeout(() => SplashScreen.hideAsync(), 1000)
        }}
      />
    </WebViewProvider>
  )
}
