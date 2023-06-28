import "../src/app/globals.css"
import Router from "next/router"
import { useState, useEffect } from "react"
import Loading from "@/app/loading"

import { JetBrains_Mono } from "next/font/google"
const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'] })

export default function MyApp({ Component, pageProps}){
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    Router.events.on("routeChangeStart", (url) => {
      setIsLoading(true)
    })

    Router.events.on("routeChangeComplete", (url) => {
      setIsLoading(false)
    })

    Router.events.on("routeChangeError", (url) => {
      setIsLoading(false)
    })

  }, [Router])

  return (
    <div className={jetBrainsMono.className}>
      {isLoading && <Loading/>}
      <Component {...pageProps} />
    </div>
  )
}