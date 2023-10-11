const example = [
    {
        "request": {
            "type": "City",
            "query": "Chicago, United States of America",
            "language": "en",
            "unit": "m"
        },
        "location": {
            "name": "Chicago",
            "country": "United States of America",
            "region": "Illinois",
            "lat": "41.850",
            "lon": "-87.650",
            "timezone_id": "America/Chicago",
            "localtime": "2019-09-08 08:39",
            "localtime_epoch": 1567931940,
            "utc_offset": "-5.0"
        },
        "current": {
            "observation_time": "01:39 PM",
            "temparature": 19,
            "weather_code": 122,
            "weather_icons": [
                "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png"
            ],
            "weather_descriptions": [
                "Overcast"
            ],
            "wind_speed": 17,
            "wind_degree": 100,
            "wind_dir": "E",
            "pressure": 1019,
            "precip": 0,
            "humidity": 73,
            "cloudcover": 100,
            "feelslike": 19,
            "uv_index": 4,
            "visibility": 16
        },
        "forecast": {
            "2019-09-08": {
                "date": "2019-09-08",
                "date_epoch": 1567900800,
                "astro": {
                    "sunrise": "06:23 AM",
                    "sunset": "07:13 PM",
                    "moonrise": "04:25 PM",
                    "moonset": "12:58 AM",
                    "moon_phase": "First Quarter",
                    "moon_illumination": 62
                },
                "mintemp": 10,
                "maxtemp": 18,
                "avgtemp": 16,
                "totalsnow": 0,
                "sunhour": 6.5,
                "uv_index": 4
            }
        }
    },
    {
        "request": {
            "type": "City",
            "query": "Oak Park, United States of America",
            "language": "en",
            "unit": "m"
        },
        "location": {
            "name": "Oak Park",
            "country": "United States of America",
            "region": "Illinois",
            "lat": "41.850",
            "lon": "-87.650",
            "timezone_id": "America/Chicago",
            "localtime": "2019-09-08 08:39",
            "localtime_epoch": 1567931940,
            "utc_offset": "-5.0"
        },
        "current": {
            "observation_time": "01:39 PM",
            "temparature": 19,
            "weather_code": 122,
            "weather_icons": [
                "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png"
            ],
            "weather_descriptions": [
                "Overcast"
            ],
            "wind_speed": 17,
            "wind_degree": 100,
            "wind_dir": "E",
            "pressure": 1019,
            "precip": 0,
            "humidity": 73,
            "cloudcover": 100,
            "feelslike": 19,
            "uv_index": 4,
            "visibility": 16
        },
        "forecast": {
            "2019-09-08": {
                "date": "2019-09-08",
                "date_epoch": 1567900800,
                "astro": {
                    "sunrise": "06:23 AM",
                    "sunset": "07:13 PM",
                    "moonrise": "04:25 PM",
                    "moonset": "12:58 AM",
                    "moon_phase": "First Quarter",
                    "moon_illumination": 62
                },
                "mintemp": 10,
                "maxtemp": 18,
                "avgtemp": 16,
                "totalsnow": 0,
                "sunhour": 6.5,
                "uv_index": 4
            }
        }
    }
]

export default example