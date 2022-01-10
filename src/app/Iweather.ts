export interface IWeather {

    id : number,
    city: string,
    country: string,
    description: string,
    currentTemp: number,
    feelsLike: number,
    minTemp: number,
    maxTemp: number,
    frequency: number,
    frequencyUnit: string,
    uri: string

}