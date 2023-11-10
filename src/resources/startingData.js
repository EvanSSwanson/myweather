const example = [
    {
        coord: {
        lon: '',
        lat: 55
        },
        weather: [
        {
        id: '',
        main: '',
        description: '',
        icon: ''
        }
        ],
        base: "stations",
        main: {
        temp: '',
        feels_like: '',
        temp_min: '',
        temp_max: '',
        pressure: '',
        humidity: ''
        },
        visibility: '',
        wind: {
        speed: '',
        deg: '',
        gust: '?'
        },
        clouds: {
        all: ''
        },
        dt: 5,
        sys: {
        type: '',
        id: '',
        country: '',
        sunrise: '',
        sunset: ''
        },
        timezone: '',
        id: '',
        name: '',
        cod: ''
    },
    {
        cod: "200",
        message: 0,
        cnt: 40,
        list: [
        {
        dt: 1698343200,
        main: {
        temp: 61.7,
        feels_like: 61.93,
        temp_min: 61.32,
        temp_max: 61.7,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 985,
        humidity: 93,
        temp_kf: 0.21
        },
        weather: [
        {
        id: 501,
        main: "Rain",
        description: "moderate rain",
        icon: "10d"
        }
        ],
        clouds: {
        all: 100
        },
        wind: {
        speed: 16.15,
        deg: 195,
        gust: 32.77
        },
        visibility: 4674,
        pop: 1,
        rain: {
        '3h': 6.91
        },
        sys: {
        pod: "d"
        },
        dt_txt: "2023-10-26 18:00:00"
        },
        {
        dt: 1698354000,
        main: {
        temp: 61.02,
        feels_like: 61.32,
        temp_min: 60.58,
        temp_max: 61.02,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 985,
        humidity: 96,
        temp_kf: 0.24
        },
        weather: [
        {
        id: 502,
        main: "Rain",
        description: "heavy intensity rain",
        icon: "10d"
        }
        ],
        clouds: {
        all: 100
        },
        wind: {
        speed: 13.24,
        deg: 210,
        gust: 29.68
        },
        visibility: 6090,
        pop: 1,
        rain: {
        '3h': 14.53
        },
        sys: {
        pod: "d"
        },
        dt_txt: "2023-10-26 21:00:00"
        },
        {
        dt: 1698364800,
        main: {
        temp: 61.63,
        feels_like: 61.92,
        temp_min: 61.63,
        temp_max: 61.63,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 986,
        humidity: 94,
        temp_kf: 0
        },
        weather: [
        {
        id: 500,
        main: "Rain",
        description: "light rain",
        icon: "10n"
        }
        ],
        clouds: {
        all: 100
        },
        wind: {
        speed: 13.29,
        deg: 192,
        gust: 27.31
        },
        visibility: 10000,
        pop: 1,
        rain: {
        '3h': 2.63
        },
        sys: {
        pod: "n"
        },
        dt_txt: "2023-10-27 00:00:00"
        },
        {
        dt: 1698732000,
        main: {
        temp: 29.97,
        feels_like: 21,
        temp_min: 29.97,
        temp_max: 29.97,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 991,
        humidity: 67,
        temp_kf: 0
        },
        weather: [
        {
        id: 800,
        main: "Clear",
        description: "clear sky",
        icon: "01n"
        }
        ],
        clouds: {
        all: 0
        },
        wind: {
        speed: 10.4,
        deg: 211,
        gust: 28.54
        },
        visibility: 10000,
        pop: 0,
        sys: {
        pod: "n"
        },
        dt_txt: "2023-10-31 06:00:00"
        },
        {
        dt: 1698742800,
        main: {
        temp: 31.98,
        feels_like: 21.67,
        temp_min: 31.98,
        temp_max: 31.98,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 989,
        humidity: 72,
        temp_kf: 0
        },
        weather: [
        {
        id: 802,
        main: "Clouds",
        description: "scattered clouds",
        icon: "03n"
        }
        ],
        clouds: {
        all: 38
        },
        wind: {
        speed: 14.74,
        deg: 246,
        gust: 30.62
        },
        visibility: 10000,
        pop: 0,
        sys: {
        pod: "n"
        },
        dt_txt: "2023-10-31 09:00:00"
        },
        {
        dt: 1698753600,
        main: {
        temp: 26.33,
        feels_like: 13.73,
        temp_min: 26.33,
        temp_max: 26.33,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 991,
        humidity: 74,
        temp_kf: 0
        },
        weather: [
        {
        id: 600,
        main: "Snow",
        description: "light snow",
        icon: "13n"
        }
        ],
        clouds: {
        all: 69
        },
        wind: {
        speed: 18.86,
        deg: 301,
        gust: 31.34
        },
        visibility: 10000,
        pop: 0.25,
        snow: {
        '3h': 0.47
        },
        sys: {
        pod: "n"
        },
        dt_txt: "2023-10-31 12:00:00"
        },
        {
        dt: 1698764400,
        main: {
        temp: 28.83,
        feels_like: 16.23,
        temp_min: 28.83,
        temp_max: 28.83,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 993,
        humidity: 66,
        temp_kf: 0
        },
        weather: [
        {
        id: 803,
        main: "Clouds",
        description: "broken clouds",
        icon: "04d"
        }
        ],
        clouds: {
        all: 61
        },
        wind: {
        speed: 21.12,
        deg: 297,
        gust: 33.53
        },
        visibility: 10000,
        pop: 0,
        sys: {
        pod: "d"
        },
        dt_txt: "2023-10-31 15:00:00"
        }
        ],
        city: {
        id: 4908126,
        name: "Roscoe",
        coord: {
        lat: 42.4133,
        lon: -89.0093
        },
        country: "US",
        population: 10785,
        timezone: -18000,
        sunrise: 1698322897,
        sunset: 1698361090
        }
        }
]

export default example