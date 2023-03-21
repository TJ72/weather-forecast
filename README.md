# Weather Forecast

> A weather forecast website that allows users to search for weather forecasts by city and unit using the OpenWeather API. The app provides up-to-date weather information for today and the next four days, including max temperature, min temperature, and humidity.

## Link

Website Link: **[Daily Weather Report](https://daily-weather-report.netlify.app)**

## Stack

- TypeScript
- React.js
- Redux Toolkit
- Styled Components
- Netlify: Deploy and CI/CD
- Jest
- ESLint
- Prettier

## Getting Started

To get a local copy of this app up and running, follow these simple steps:

### Prerequisites

To use this app, you need to have Node.js and Yarn installed on your machine. If you don't have them installed, you can download them from the following links:

- Node.js: https://nodejs.org/
- Yarn: https://yarnpkg.com/

### Installation

1. Get a free API Key from https://openweathermap.org/
2. Clone the repo:

```sh
git clone https://github.com/TJ72/weather-forecast.git
```

3. Navigate to the project directory:

```sh
cd weather-forecast
```

4. Install NPM packages:

```sh
yarn install
```

5. Enter your API Key in the .env file:

```sh
REACT_APP_API_KEY=YOUR_API_KEY
```

### Usage

To start the app, run the following command:

```sh
yarn start
```

The app will run on `http://localhost:3000` in your web browser.
