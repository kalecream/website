const GA_TRACKING_ID = "UA-148483444-1"
export { GA_TRACKING_ID }

//  https://github.com/NikSchaefer/nextjs-boilerplate/blob/main/src/config.ts
type MetaType = {
    title: string,
    lang: string,
    description: string,
    image: string,
    url:string
}
const META: MetaType = {
    title: "KaleCream | Webdev",
    lang: "en-us",
    description: "Jamaican Webdev",
    image: "/logo.png",
    url: "https://www.kalecream.com"
}
export { META }