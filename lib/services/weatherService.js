const WEATHER_CODES = {
  0: "맑음",
  1: "대체로 맑음",
  2: "부분적으로 흐림",
  3: "흐림",
  45: "안개",
  48: "안개",
  51: "이슬비",
  53: "이슬비",
  55: "이슬비",
  61: "비",
  63: "비",
  65: "강한 비",
  71: "눈",
  73: "눈",
  75: "강한 눈",
  80: "소나기",
  81: "소나기",
  82: "강한 소나기",
  95: "뇌우",
  99: "뇌우 + 우박",
};

export async function getSeoulWeather() {
  const url =
    "https://api.open-meteo.com/v1/forecast" +
    "?latitude=37.5665&longitude=126.9780" +
    "&current=temperature_2m,weathercode,windspeed_10m,relative_humidity_2m" +
    "&timezone=Asia%2FSeoul";

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`날씨 API 호출 실패: ${res.status}`);
  }

  const data = await res.json();
  const current = data.current;

  return {
    temperature: current.temperature_2m,
    windspeed: current.windspeed_10m,
    humidity: current.relative_humidity_2m,
    condition: WEATHER_CODES[current.weathercode] ?? "알 수 없음",
    updatedAt: current.time,
  };
}
