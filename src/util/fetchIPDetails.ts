import type { IPDATA } from "~types/IP"

export default async function fetchIPDetails(ip: string) {

    const endpoint = `https://ipinfo.io/${ip}?token=${process.env.PLASMO_PUBLIC_IPINFO_KEY}`
    const res = await fetch(endpoint)
    const data = await res.json()

    return data as IPDATA
}