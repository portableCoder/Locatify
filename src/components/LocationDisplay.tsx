import { useState } from "react"

import type { LocationData } from "~types/LocationData"
import fetchCountryCity from "~util/fetchCountryCity"

import Spinner from "./Spinner"

const LocationDisplay = () => {
  const [data, setData] = useState<LocationData | null>(null)
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const fetchData = async () => {
    setLoading(true)
    setError(false)
    try {
      const data = await fetchCountryCity()
      setData(data)
    } catch (e) {
      setError(true)
    }

    setLoading(false)
  }
  return (
    <div className="w-full px-4 h-full flex flex-col gap-y-4  justify-center items-center relative">
      {data && (
        <div className="w-full  items-center justify-center flex">
          <p className="text-center w-full text-xl">
            {" "}
            Your country is <span className="font-bold">
              {data.country}{" "}
            </span>{" "}
            and city is <span className="font-bold">{data.city} </span>{" "}
          </p>
        </div>
      )}
      {error && (
        <div className="flex items-center justify-center gap-x-2 text-red-500">
          Fetching failed!{" "}
          <button className="underline font-bold" onClick={fetchData}>
            Retry
          </button>
        </div>
      )}
      {!error && (
        <button
          onClick={fetchData}
          className="btn gap-x-2"
          disabled={isLoading}>
          {isLoading && <Spinner />}
          {isLoading ? "Loading..." : "Show my location"}
        </button>
      )}
    </div>
  )
}

export default LocationDisplay
