import { ZodSchema } from "zod"

export default class BrightSideWebView {
  

  listenToWebView<T>(
    key: string,
    data: string,
    callback: (data: T) => void,
    schema: ZodSchema<T>
  ) {
    const { key: eventKey, data: rawData } = JSON.parse(data)
    if (eventKey !== key) return
    const parsedData = schema.parse(rawData)
    callback(parsedData)
  }
}
