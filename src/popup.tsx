import Header from "~components/Header"
import LocationDisplay from "~components/LocationDisplay"

import "~style.css"

function IndexPopup() {
  return (
    <div className="w-[500px] text-3xl flex flex-col gap-y-2 h-[500px] bg-white text-black">
      <Header />
      <LocationDisplay />
    </div>
  )
}

export default IndexPopup
