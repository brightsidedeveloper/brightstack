import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'
import brightside from '../api/brightside'

export const Route = createRootRouteWithContext()({
  beforeLoad() {
    brightside.theme.mediaThemeEventListener()
    brightside.theme.storageThemeEventListener()
  },
  component: () => <Outlet />,
})
