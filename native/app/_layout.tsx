import { BrightSideProvider } from 'brightside-native'
import App from './App'

const ThemeColors = {
  light: {
    backgroundColor: '#e5f2ff',
  },
  dark: {
    backgroundColor: '#181f35',
  },
}

export default function RootLayout() {
  return (
    <BrightSideProvider theme={ThemeColors}>
      <App />
    </BrightSideProvider>
  )
}
