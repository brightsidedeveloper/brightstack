import { View } from 'react-native'
import { BrightSideWebView, useTheme } from 'brightside-native'

export default function App() {
  const { backgroundColor } = useTheme()
  return (
    <View style={{ flex: 1, backgroundColor }}>
      <View
        style={{
          flex: 1,
          marginTop: 40,
        }}
      >
        <BrightSideWebView url={ENTRY} />
      </View>
    </View>
  )
}

const ENTRY = 'https://brightstack-vite.vercel.app/'
