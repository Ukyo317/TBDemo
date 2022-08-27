import type { HeadFC } from "gatsby"
import * as React from "react"
import TBFooter from "./tbFooter"
import TBHeader from "./tbHeader"

export const Head: HeadFC = () => <title>Home Page</title>

export default function Home() {
  return <div>
    <TBHeader />
    <TBFooter />
  </div>
}