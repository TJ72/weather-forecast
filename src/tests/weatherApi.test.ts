import { getForecastData } from '../api/weatherApi';
import mockRawWeatherData from './mocks/mockRawWeatherData.json';
import mockWeatherData from './mocks/mockWeatherData.json';

describe('getForecastData', () => {
  it('should get data when searching a valid city', async () => {
    window.fetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: () => Promise.resolve(mockRawWeatherData),
    });

    const data = await getForecastData('Taipei', 'metric');

    expect(window.fetch).toBeCalledTimes(1);

    expect(data).toStrictEqual(mockWeatherData);
  });

  it('it should return error when city not found', async () => {
    window.fetch = jest.fn().mockResolvedValueOnce({
      ok: false,
      status: 404,
      json: () => Promise.resolve({ cod: '404', message: 'city not found' }),
    });

    const data = await getForecastData('XXX', 'metric');

    expect(window.fetch).toBeCalledTimes(1);

    expect(data).toStrictEqual({ type: 'error', message: 'city not found' });
  });
});
