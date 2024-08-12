import 'react-native-reanimated'

import App from '@/App'
import { SplashScreen } from 'expo-router'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  return (
    <App
      onWebViewLoadEnd={() => {
        setTimeout(() => SplashScreen.hideAsync(), 1000)
      }}
    />
  )
}
