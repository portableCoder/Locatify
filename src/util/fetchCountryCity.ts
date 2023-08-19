import countries from "i18n-iso-countries"
import langs from "i18n-iso-countries/langs/en.json"
import fetchIP from "./fetchIP";
import fetchIPDetails from "./fetchIPDetails";
countries.registerLocale(langs);

export default async function fetchCountryCity() {
    const ip = await fetchIP()
    const details = await fetchIPDetails(ip)
    const { city, country } = details
    const countryName = countries.getName(country, "en")
    return {
        country: countryName,
        city
    }
}