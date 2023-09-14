import type { AppProps } from 'next/app'
import '@/styles/globals.css'

import { BaseLayout } from '../widgets/layouts'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    </>
  )
}

export default App
