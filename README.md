# 🌤️ Weather App

A sleek and responsive Weather App built using **React.js**, allowing users to search for real-time weather information by city name. It fetches data from the **OpenWeatherMap API** and displays temperature, humidity, weather status, and more in an elegant card layout.

## 🚀 Features

- 🔍 Search weather by city name
- 🌡️ Real-time temperature (in °C)
- 💧 Humidity & wind speed info
- ⛅ Weather conditions with icons
- 🕐 Date and time display
- 📱 Responsive design for mobile and desktop

## 📸 Screenshots

| Desktop View                                | Mobile View                               |
| ------------------------------------------- | ----------------------------------------- |
| ![Desktop](./public/screenshot-desktop.png) | ![Mobile](./public/screenshot-mobile.png) |

## ⚙️ Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **API**: [OpenWeatherMap API](https://openweathermap.org/api)

## 🧠 Folder Structure

```pgsql
Weather-App/
├── public/
├── src/
│ ├── components/
│ │ └── WeatherCard.jsx
│ ├── App.jsx
│ ├── index.js
│ └── weatherapi.js
├── .env
├── package.json
└── README.md

```

````markdown
## 🚀 Features

- 🔍 Search weather by city name
- 🌡️ Displays temperature in Celsius
- 💧 Shows humidity and wind speed
- ⛅ Weather condition with icon
- 📅 Shows current date and time
- 📱 Fully responsive UI

## 🛠️ Technologies Used

- **Frontend:** React.js, Tailwind CSS
- **API:** [OpenWeatherMap API](https://openweathermap.org/api)

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/mrumairkhan74/Weather-App.git
   cd Weather-App
   ```
````

2. **Install Dependencies**
   ```bash
   npm install
   ```
3. **Create a .env file at the root**

   ```env
   VITE_WEATHER_API_KEY=your_openweathermap_api_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

```

5. **Open http://localhost:5173 to view app in browser**
```

## 📂 Key Files

    - weatherapi.js – API call logic for fetching weather data
    - WeatherCard.jsx – UI card that displays the weather info
    - App.jsx – Main component containing state and search logic

# Author

Umair Khan
Github:@mrumairkhan74
Instagram: @mrumairkhan74
