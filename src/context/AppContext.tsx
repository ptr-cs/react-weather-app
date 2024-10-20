// src/context/AppContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';

export interface WeatherData {
    [key: string]: any; // This allows WeatherData to store any JSON data
}

export interface LocationData {
    [key: string]: any; // This allows LocationData to store any JSON data
}

// Define the shape of the state
interface AppState {
    user: string | null;
    theme: 'light' | 'dark';
    language: string;
    weatherData: WeatherData | null;
    locationData: LocationData | null;
    apiKey: string;
    demoMode: boolean;
}

// Define initial state
const initialState: AppState = {
    user: null,
    theme: 'light',
    language: 'en',
    weatherData: [
        {
            "LocalObservationDateTime": "2024-07-30T13:38:00-04:00",
            "EpochTime": 1722361080,
            "WeatherText": "Cloudy",
            "WeatherIcon": 7,
            "HasPrecipitation": false,
            "PrecipitationType": null,
            "IsDayTime": true,
            "Temperature": {
                "Metric": {
                    "Value": 28.1,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 83,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "RealFeelTemperature": {
                "Metric": {
                    "Value": 33,
                    "Unit": "C",
                    "UnitType": 17,
                    "Phrase": "Hot"
                },
                "Imperial": {
                    "Value": 91,
                    "Unit": "F",
                    "UnitType": 18,
                    "Phrase": "Hot"
                }
            },
            "RealFeelTemperatureShade": {
                "Metric": {
                    "Value": 30.7,
                    "Unit": "C",
                    "UnitType": 17,
                    "Phrase": "Very Warm"
                },
                "Imperial": {
                    "Value": 87,
                    "Unit": "F",
                    "UnitType": 18,
                    "Phrase": "Very Warm"
                }
            },
            "RelativeHumidity": 70,
            "IndoorRelativeHumidity": 70,
            "DewPoint": {
                "Metric": {
                    "Value": 22.2,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 72,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Wind": {
                "Direction": {
                    "Degrees": 180,
                    "Localized": "S",
                    "English": "S"
                },
                "Speed": {
                    "Metric": {
                        "Value": 5.6,
                        "Unit": "km/h",
                        "UnitType": 7
                    },
                    "Imperial": {
                        "Value": 3.5,
                        "Unit": "mi/h",
                        "UnitType": 9
                    }
                }
            },
            "WindGust": {
                "Speed": {
                    "Metric": {
                        "Value": 11,
                        "Unit": "km/h",
                        "UnitType": 7
                    },
                    "Imperial": {
                        "Value": 6.9,
                        "Unit": "mi/h",
                        "UnitType": 9
                    }
                }
            },
            "UVIndex": 3,
            "UVIndexText": "Moderate",
            "Visibility": {
                "Metric": {
                    "Value": 2,
                    "Unit": "km",
                    "UnitType": 6
                },
                "Imperial": {
                    "Value": 1,
                    "Unit": "mi",
                    "UnitType": 2
                }
            },
            "ObstructionsToVisibility": "",
            "CloudCover": 93,
            "Ceiling": {
                "Metric": {
                    "Value": 1524,
                    "Unit": "m",
                    "UnitType": 5
                },
                "Imperial": {
                    "Value": 5000,
                    "Unit": "ft",
                    "UnitType": 0
                }
            },
            "Pressure": {
                "Metric": {
                    "Value": 1013.5,
                    "Unit": "mb",
                    "UnitType": 14
                },
                "Imperial": {
                    "Value": 29.93,
                    "Unit": "inHg",
                    "UnitType": 12
                }
            },
            "PressureTendency": {
                "LocalizedText": "Steady",
                "Code": "S"
            },
            "Past24HourTemperatureDeparture": {
                "Metric": {
                    "Value": -5.5,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": -10,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "ApparentTemperature": {
                "Metric": {
                    "Value": 31.7,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 89,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "WindChillTemperature": {
                "Metric": {
                    "Value": 28.3,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 83,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "WetBulbTemperature": {
                "Metric": {
                    "Value": 24,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 75,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "WetBulbGlobeTemperature": {
                "Metric": {
                    "Value": 27.2,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 81,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Precip1hr": {
                "Metric": {
                    "Value": 0,
                    "Unit": "mm",
                    "UnitType": 3
                },
                "Imperial": {
                    "Value": 0,
                    "Unit": "in",
                    "UnitType": 1
                }
            },
            "PrecipitationSummary": {
                "Precipitation": {
                    "Metric": {
                        "Value": 0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "PastHour": {
                    "Metric": {
                        "Value": 0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past3Hours": {
                    "Metric": {
                        "Value": 0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past6Hours": {
                    "Metric": {
                        "Value": 0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past9Hours": {
                    "Metric": {
                        "Value": 0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past12Hours": {
                    "Metric": {
                        "Value": 0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past18Hours": {
                    "Metric": {
                        "Value": 0,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0,
                        "Unit": "in",
                        "UnitType": 1
                    }
                },
                "Past24Hours": {
                    "Metric": {
                        "Value": 2,
                        "Unit": "mm",
                        "UnitType": 3
                    },
                    "Imperial": {
                        "Value": 0.08,
                        "Unit": "in",
                        "UnitType": 1
                    }
                }
            },
            "TemperatureSummary": {
                "Past6HourRange": {
                    "Minimum": {
                        "Metric": {
                            "Value": 24,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 75,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    },
                    "Maximum": {
                        "Metric": {
                            "Value": 28.6,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 83,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    }
                },
                "Past12HourRange": {
                    "Minimum": {
                        "Metric": {
                            "Value": 23.4,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 74,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    },
                    "Maximum": {
                        "Metric": {
                            "Value": 28.6,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 83,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    }
                },
                "Past24HourRange": {
                    "Minimum": {
                        "Metric": {
                            "Value": 23.4,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 74,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    },
                    "Maximum": {
                        "Metric": {
                            "Value": 33,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Imperial": {
                            "Value": 91,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    }
                }
            },
            "MobileLink": "http://www.accuweather.com/en/us/arlington-va/22201/current-weather/331250?lang=en-us",
            "Link": "http://www.accuweather.com/en/us/arlington-va/22201/current-weather/331250?lang=en-us"
        }
    ],
    locationData: {
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
    },
    apiKey: "",
    demoMode: true,
};

// Define the context type
interface AppContextType {
    state: AppState;
    setUser: (user: string | null) => void;
    setTheme: (theme: 'light' | 'dark') => void;
    setLanguage: (language: string) => void;
    setWeatherData: (weatherData: WeatherData | null) => void;
    setLocationData: (locationData: LocationData | null) => void;
    setApiKey: (apiKey: string) => void;
    setDemoMode: (demoMode: boolean) => void;
    handleApiKeyChange: (newApiKey: string) => void;
    handleDemoModeToggle: () => void;
    getLocationInfo: (locationQuery: string) => Promise<Boolean>;
    getCurrentConditions: (locationKey: string) => Promise<Boolean>;
}

// Create context with default values
const AppContext = createContext<AppContextType | undefined>(undefined);

// Create a provider component
export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, setState] = useState<AppState>(initialState);

    const setUser = (user: string | null) => setState(prevState => ({ ...prevState, user }));
    const setTheme = (theme: 'light' | 'dark') => setState(prevState => ({ ...prevState, theme }));
    const setLanguage = (language: string) => setState(prevState => ({ ...prevState, language }));

    const setWeatherData = (weatherData: WeatherData | null) => setState(prevState => ({ ...prevState, weatherData }));
    const setLocationData = (locationData: LocationData | null) => setState(prevState => ({ ...prevState, locationData }));
    const setApiKey = (apiKey: string) => setState(prevState => ({ ...prevState, apiKey }));
    const setDemoMode = (demoMode: boolean) => setState(prevState => ({ ...prevState, demoMode }));
    
    const handleApiKeyChange = (newApiKey: string) => {
        setApiKey(newApiKey);
        setWeatherData(null); // Ensure state is updated
        setLocationData(null); // Ensure state is updated
      };
    
      const handleDemoModeToggle = () => {
        setDemoMode(!state.demoMode);
      };
      
      const getLocationInfo = async (locationQuery: string) : Promise<Boolean> => {
        if (state.demoMode) {
            console.log("Demo mode is enabled. Skipping API call.");
            return false;
        }
        if (!state.apiKey) {
            console.error("API key is not supplied.");
            return false;
        }
        // get location data 
        const locationUrl = `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${state.apiKey}&q=${locationQuery}`;

        try {
            const response = await fetch(locationUrl);
            if (!response.ok) {
                throw new Error(`Location API call failed with status: ${response.status}`);
            }

            const data = await response.json();
            setLocationData(data[0]);

        } catch (error) {
            console.error("Error fetching location:", error);
            return false;
        }
        return true;
      };
      
      const getCurrentConditions = async (locationKey: string) : Promise<Boolean> => {
        if (state.demoMode) {
            console.log("Demo mode is enabled. Skipping API call.");
            return false;
        }
        if (!state.apiKey) {
            console.error("API key is not supplied.");
            return false;
        }
        if (!locationKey) {
            console.error("Location key is not supplied.");
            return false;
        }

        const apiUrl = `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${state.apiKey}&details=true`;

        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`API call failed with status: ${response.status}`);
            }
            const data = await response.json();
            setWeatherData(data);
        } catch (error) {
            console.error("Error fetching current conditions:", error);
            return false;
        }
        return true;
    }

    return (
        <AppContext.Provider value={{ state, setUser, setTheme, setLanguage, setWeatherData,
         setLocationData, setApiKey, setDemoMode, handleApiKeyChange, handleDemoModeToggle,
         getLocationInfo, getCurrentConditions }}>
            {children}
        </AppContext.Provider>
    );
};

// Custom hook to use the AppContext
export const useAppContext = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};
