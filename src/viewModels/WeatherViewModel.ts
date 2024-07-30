// src/viewmodels/WeatherViewModel.ts
import { useState, useEffect } from 'react';
import { WeatherModel, WeatherData, LocationData } from '../models/WeatherModel';

export const useWeatherViewModel = (initialApiKey: string, initialDemoMode: boolean) => {
  const [weatherModel] = useState(new WeatherModel(initialApiKey, initialDemoMode));
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [locationData, setLocationData] = useState<LocationData | null>(null);
  const [apiKey, setApiKey] = useState(initialApiKey);
  const [demoMode, setDemoMode] = useState(initialDemoMode);

  useEffect(() => {
    // Fetch weather data and update the model
    if (!demoMode) {
      // Fetch real weather data using weatherModel.getApiKey()
      // Example: fetchWeatherData().then(data => weatherModel.setWeatherData(data));
    } else {
      // Set demo weather data
      const demoData: WeatherData = {
        "Headline": {
          "EffectiveDate": "2024-07-30T17:00:00-04:00",
          "EffectiveEpochDate": 1722373200,
          "Severity": 2,
          "Text": "Watch for a heavy thunderstorm late this afternoon",
          "Category": "thunderstorm",
          "EndDate": "2024-07-30T23:00:00-04:00",
          "EndEpochDate": 1722394800
        },
        "DailyForecasts": [
          {
            "Date": "2024-07-30T07:00:00-04:00",
            "EpochDate": 1722337200,
            "Sun": {
              "Rise": "2024-07-30T06:08:00-04:00",
              "EpochRise": 1722334080,
              "Set": "2024-07-30T20:21:00-04:00",
              "EpochSet": 1722385260
            },
            "Moon": {
              "Rise": "2024-07-30T01:13:00-04:00",
              "EpochRise": 1722316380,
              "Set": "2024-07-30T16:53:00-04:00",
              "EpochSet": 1722372780,
              "Phase": "WaningCrescent",
              "Age": 25
            },
            "Temperature": {
              "Minimum": {
                "Value": 72,
                "Unit": "F",
                "UnitType": 18
              },
              "Maximum": {
                "Value": 92,
                "Unit": "F",
                "UnitType": 18
              }
            },
            "RealFeelTemperature": {
              "Minimum": {
                "Value": 74,
                "Unit": "F",
                "UnitType": 18,
                "Phrase": "Pleasant"
              },
              "Maximum": {
                "Value": 96,
                "Unit": "F",
                "UnitType": 18,
                "Phrase": "Hot"
              }
            },
            "RealFeelTemperatureShade": {
              "Minimum": {
                "Value": 74,
                "Unit": "F",
                "UnitType": 18,
                "Phrase": "Pleasant"
              },
              "Maximum": {
                "Value": 94,
                "Unit": "F",
                "UnitType": 18,
                "Phrase": "Hot"
              }
            },
            "HoursOfSun": 4.4,
            "DegreeDaySummary": {
              "Heating": {
                "Value": 0,
                "Unit": "F",
                "UnitType": 18
              },
              "Cooling": {
                "Value": 17,
                "Unit": "F",
                "UnitType": 18
              }
            },
            "AirAndPollen": [
              {
                "Name": "AirQuality",
                "Value": 48,
                "Category": "Good",
                "CategoryValue": 1,
                "Type": "Ozone"
              },
              {
                "Name": "Grass",
                "Value": 12,
                "Category": "Moderate",
                "CategoryValue": 2
              },
              {
                "Name": "Mold",
                "Value": 3250,
                "Category": "Low",
                "CategoryValue": 1
              },
              {
                "Name": "Ragweed",
                "Value": 5,
                "Category": "Low",
                "CategoryValue": 1
              },
              {
                "Name": "Tree",
                "Value": 0,
                "Category": "Low",
                "CategoryValue": 1
              },
              {
                "Name": "UVIndex",
                "Value": 5,
                "Category": "Moderate",
                "CategoryValue": 2
              }
            ],
            "Day": {
              "Icon": 17,
              "IconPhrase": "Partly sunny w/ t-storms",
              "HasPrecipitation": true,
              "PrecipitationType": "Rain",
              "PrecipitationIntensity": "Heavy",
              "ShortPhrase": "A heavy t-storm in the p.m.",
              "LongPhrase": "Humid with sun and clouds; a heavy thunderstorm late this afternoon; damaging winds can accompany heavy downpours",
              "PrecipitationProbability": 55,
              "ThunderstormProbability": 41,
              "RainProbability": 55,
              "SnowProbability": 0,
              "IceProbability": 0,
              "Wind": {
                "Speed": {
                  "Value": 9.2,
                  "Unit": "mi/h",
                  "UnitType": 9
                },
                "Direction": {
                  "Degrees": 179,
                  "Localized": "S",
                  "English": "S"
                }
              },
              "WindGust": {
                "Speed": {
                  "Value": 16.1,
                  "Unit": "mi/h",
                  "UnitType": 9
                },
                "Direction": {
                  "Degrees": 190,
                  "Localized": "S",
                  "English": "S"
                }
              },
              "TotalLiquid": {
                "Value": 0.15,
                "Unit": "in",
                "UnitType": 1
              },
              "Rain": {
                "Value": 0.15,
                "Unit": "in",
                "UnitType": 1
              },
              "Snow": {
                "Value": 0,
                "Unit": "in",
                "UnitType": 1
              },
              "Ice": {
                "Value": 0,
                "Unit": "in",
                "UnitType": 1
              },
              "HoursOfPrecipitation": 1,
              "HoursOfRain": 1,
              "HoursOfSnow": 0,
              "HoursOfIce": 0,
              "CloudCover": 75,
              "Evapotranspiration": {
                "Value": 0.14,
                "Unit": "in",
                "UnitType": 1
              },
              "SolarIrradiance": {
                "Value": 5060.9,
                "Unit": "W/m²",
                "UnitType": 33
              },
              "RelativeHumidity": {
                "Minimum": 50,
                "Maximum": 83,
                "Average": 65
              },
              "WetBulbTemperature": {
                "Minimum": {
                  "Value": 72,
                  "Unit": "F",
                  "UnitType": 18
                },
                "Maximum": {
                  "Value": 77,
                  "Unit": "F",
                  "UnitType": 18
                },
                "Average": {
                  "Value": 76,
                  "Unit": "F",
                  "UnitType": 18
                }
              },
              "WetBulbGlobeTemperature": {
                "Minimum": {
                  "Value": 75,
                  "Unit": "F",
                  "UnitType": 18
                },
                "Maximum": {
                  "Value": 85,
                  "Unit": "F",
                  "UnitType": 18
                },
                "Average": {
                  "Value": 81,
                  "Unit": "F",
                  "UnitType": 18
                }
              }
            },
            "Night": {
              "Icon": 15,
              "IconPhrase": "Thunderstorms",
              "HasPrecipitation": true,
              "PrecipitationType": "Rain",
              "PrecipitationIntensity": "Heavy",
              "ShortPhrase": "Humid with a t-storm in spots",
              "LongPhrase": "Cloudy most of the time with a thunderstorm in parts of the area; humid",
              "PrecipitationProbability": 55,
              "ThunderstormProbability": 33,
              "RainProbability": 55,
              "SnowProbability": 0,
              "IceProbability": 0,
              "Wind": {
                "Speed": {
                  "Value": 6.9,
                  "Unit": "mi/h",
                  "UnitType": 9
                },
                "Direction": {
                  "Degrees": 204,
                  "Localized": "SSW",
                  "English": "SSW"
                }
              },
              "WindGust": {
                "Speed": {
                  "Value": 9.2,
                  "Unit": "mi/h",
                  "UnitType": 9
                },
                "Direction": {
                  "Degrees": 193,
                  "Localized": "SSW",
                  "English": "SSW"
                }
              },
              "TotalLiquid": {
                "Value": 0.25,
                "Unit": "in",
                "UnitType": 1
              },
              "Rain": {
                "Value": 0.25,
                "Unit": "in",
                "UnitType": 1
              },
              "Snow": {
                "Value": 0,
                "Unit": "in",
                "UnitType": 1
              },
              "Ice": {
                "Value": 0,
                "Unit": "in",
                "UnitType": 1
              },
              "HoursOfPrecipitation": 1.5,
              "HoursOfRain": 1.5,
              "HoursOfSnow": 0,
              "HoursOfIce": 0,
              "CloudCover": 82,
              "Evapotranspiration": {
                "Value": 0.01,
                "Unit": "in",
                "UnitType": 1
              },
              "SolarIrradiance": {
                "Value": 138.2,
                "Unit": "W/m²",
                "UnitType": 33
              },
              "RelativeHumidity": {
                "Minimum": 72,
                "Maximum": 93,
                "Average": 83
              },
              "WetBulbTemperature": {
                "Minimum": {
                  "Value": 71,
                  "Unit": "F",
                  "UnitType": 18
                },
                "Maximum": {
                  "Value": 75,
                  "Unit": "F",
                  "UnitType": 18
                },
                "Average": {
                  "Value": 73,
                  "Unit": "F",
                  "UnitType": 18
                }
              },
              "WetBulbGlobeTemperature": {
                "Minimum": {
                  "Value": 74,
                  "Unit": "F",
                  "UnitType": 18
                },
                "Maximum": {
                  "Value": 77,
                  "Unit": "F",
                  "UnitType": 18
                },
                "Average": {
                  "Value": 76,
                  "Unit": "F",
                  "UnitType": 18
                }
              }
            },
            "Sources": [
              "AccuWeather"
            ]
          }
        ]
      };
      const demoLocationData: LocationData = {
        "Version": 1,
        "Type": "City",
        "Rank": 45,
        "LocalizedName": "Arlington",
        "EnglishName": "Arlington",
        "PrimaryPostalCode": "22201",
        "Region": {
          "ID": "NAM",
          "LocalizedName": "North America",
          "EnglishName": "North America"
        },
        "Country": {
          "ID": "US",
          "LocalizedName": "United States",
          "EnglishName": "United States"
        },
        "AdministrativeArea": {
          "ID": "VA",
          "LocalizedName": "Virginia",
          "EnglishName": "Virginia",
          "Level": 1,
          "LocalizedType": "State",
          "EnglishType": "State",
          "CountryID": "US"
        },
        "TimeZone": {
          "Code": "EDT",
          "Name": "America/New_York",
          "GmtOffset": -4,
          "IsDaylightSaving": true,
          "NextOffsetChange": "2024-11-03T06:00:00Z"
        },
        "GeoPosition": {
          "Latitude": 38.89,
          "Longitude": -77.084,
          "Elevation": {
            "Metric": {
              "Value": 81,
              "Unit": "m",
              "UnitType": 5
            },
            "Imperial": {
              "Value": 265,
              "Unit": "ft",
              "UnitType": 0
            }
          }
        },
        "IsAlias": false,
        "SupplementalAdminAreas": [
          {
            "Level": 2,
            "LocalizedName": "Arlington",
            "EnglishName": "Arlington"
          }
        ]
      };
      weatherModel.setWeatherData(demoData);
      weatherModel.setLocationData(demoLocationData);
      setWeatherData(demoData);
      setLocationData(demoLocationData);
    }
  }, [demoMode, apiKey]);

  const handleApiKeyChange = (newApiKey: string) => {
    setApiKey(newApiKey);
    weatherModel.setWeatherData(null); // Clear weather data when API key changes
    weatherModel.setLocationData(null); // Clear location data when API key changes
    setWeatherData(null); // Ensure state is updated
    setLocationData(null); // Ensure state is updated
  };

  const handleDemoModeToggle = () => {
    setDemoMode(!demoMode);
  };

  return {
    weatherData,
    locationData,
    apiKey,
    demoMode,
    handleApiKeyChange,
    handleDemoModeToggle,
  };
};