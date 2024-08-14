import { View } from 'react-native'
import { BrightSideWebView, useTheme, useWebView, useWebViewListener } from 'brightside-native'
import { ExampleSchema } from '@/schemas/Example'

export default function App() {
  const { sendMessage } = useWebView()
  const { backgroundColor } = useTheme()

  useWebViewListener(
    'access-camera',
    async ({ random }) => {
      sendMessage('denied-camera', { random })
    },
    ExampleSchema
  )

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
