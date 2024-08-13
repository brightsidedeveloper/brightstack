import 'react-native-reanimated'

import { SplashScreen } from 'expo-router'
import App from '@/App'
import brightside from '@/api/brightside'
import BrightSideProvider from '@/temp/src/context/BrightSideProvider'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  return (
    <BrightSideProvider brightside={brightside}>
      <App
        onWebViewLoadEnd={() => {
          setTimeout(() => SplashScreen.hideAsync(), 1000)
        }}
      />
    </BrightSideProvider>
  )
}
