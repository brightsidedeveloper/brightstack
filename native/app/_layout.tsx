import { BrightSideProvider } from 'brightside-native'
import App from './App'

const ThemeColors = {
  light: {
    backgroundColor: '#f5f9ff',
  },
  dark: {
    backgroundColor: '#1a243d',
  },
}

export default function RootLayout() {
  return (
    <BrightSideProvider theme={ThemeColors}>
      <App />
    </BrightSideProvider>
  )
}
