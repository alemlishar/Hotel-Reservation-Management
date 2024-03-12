import { useEffect } from "react"
import { getCabins } from "./services/apiCabins"
export default function App() {
  useEffect(function () {
    getCabins().then((data) => console.log(data))
  }, [])

  return <div>hello world</div>
}
