import * as React from "react"
import ErrorBoundary from "./components/ErrorBoundary"
import { useEffect, useState } from "react"
import useStore from "./store/store"
// @ts-ignore
const App1 = React.lazy(() => import("app1/App").catch((error) => {
  // @ts-ignore
  return import("./components/Fallback")
}))
// @ts-ignore
// const App2 = React.lazy(() => import("app2/App").catch(() => {
//   // @ts-ignore
//   return import("./components/Fallback")
// }))
interface AppProps {
  title: string
}

const App: React.FC<AppProps> = ({ title }) => {
  const { count } = useStore()
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <div>
      <h1><center>{title}</center></h1>
      <div>
        <div>
          {count}
        </div>
        <ErrorBoundary appName="App 1">
          <React.Suspense fallback={<div>Loading App1...</div>}>
            {loaded && <App1 />}
            {/* {loaded && <Fallback3 />} */}
          </React.Suspense>
        </ErrorBoundary>
        {/* <ErrorBoundary appName="App 2">
          <React.Suspense fallback={<div>Loading App1...</div>}>
            {loaded && <App2 />}
          </React.Suspense>
        </ErrorBoundary> */}
      </div>
    </div>
  )
}

export default App