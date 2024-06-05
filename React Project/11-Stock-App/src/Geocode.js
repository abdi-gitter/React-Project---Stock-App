import {
  setKey,
  setLanguage,
  fromAddress,
  setLocationType,
} from 'react-geocode'

setKey('AIzaSyD8IPCxZZMLEmwmGb02HXPb6RsdJ8EMvk8')
setLanguage('en')
setLocationType('ROOFTOP')

export async function geocodeAddress(address) {
  const res = await fromAddress(address)
  const { lat, lng } = res.results[0].geometry.location
  console.log(lat, lng)
  return { lat, lng }
}
