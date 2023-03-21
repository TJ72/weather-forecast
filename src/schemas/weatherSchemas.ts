import { z } from 'zod';

export const CitySchema = z.object({
  name: z.string(),
  country: z.string(),
});

export const WeatherSchema = z.object({
  temp_min: z.number(),
  temp_max: z.number(),
  humidity: z.number(),
});

export const WeatherDetailsSchema = z.object({
  dt_txt: z.string(),
  main: WeatherSchema,
});

export const WeatherDataSchema = z.object({
  city: CitySchema,
  list: z.array(WeatherDetailsSchema),
});

export const APIErrorSchema = z.object({
  message: z.string(),
});
