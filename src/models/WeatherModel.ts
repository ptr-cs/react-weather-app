// src/models/WeatherModel.ts
export interface WeatherData {
    [key: string]: any; // This allows WeatherData to store any JSON data
  }
  
  export interface LocationData {
    [key: string]: any; // This allows LocationData to store any JSON data
  }
  
  export class WeatherModel {
    private apiKey: string;
    private demoMode: boolean;
    private weatherData: WeatherData | null;
    private locationData: LocationData | null;
  
    constructor(apiKey: string, demoMode: boolean) {
      this.apiKey = apiKey;
      this.demoMode = demoMode;
      this.weatherData = null;
      this.locationData = null;
    }
  
    getApiKey(): string {
      return this.apiKey;
    }
  
    isDemoMode(): boolean {
      return this.demoMode;
    }
  
    getWeatherData(): WeatherData | null {
      return this.weatherData;
    }
  
    setWeatherData(data: WeatherData | null): void {
      this.weatherData = data;
    }
    
    getLocationData(): LocationData | null {
        return this.locationData;
      }
    
    setLocationData(data: LocationData | null): void {
    this.locationData = data;
    }
  
    // Add methods to fetch weather data from API
  }