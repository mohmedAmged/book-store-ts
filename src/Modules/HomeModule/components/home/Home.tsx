import { useContext } from "react"
import { AuthContext } from "../../../../Constant/Context/AuthContext"

export default function Home() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const {userData}:any =useContext(AuthContext)
console.log(userData);

  return (
    <div>
      {userData?.email}
    </div>
  )
}
