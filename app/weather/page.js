import { getSeoulWeather } from "@/lib/services/weatherService";

// 이 컴포넌트는 서버에서 실행됨 - "use client" 없음
export default async function WeatherPage() {
  const weather = await getSeoulWeather();

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: "400px", margin: "0 auto" }}>
      <h1>서울 현재 날씨</h1>
      <div style={{ background: "#f0f4ff", borderRadius: "12px", padding: "1.5rem", marginTop: "1rem" }}>
        <p style={{ fontSize: "2rem", margin: 0 }}>
          {weather.temperature}°C
        </p>
        <p style={{ color: "#555", margin: "0.5rem 0 0" }}>{weather.condition}</p>
        <hr style={{ margin: "1rem 0", border: "none", borderTop: "1px solid #ddd" }} />
        <p>💨 바람: {weather.windspeed} km/h</p>
        <p>💧 습도: {weather.humidity}%</p>
        <p style={{ color: "#999", fontSize: "0.8rem" }}>업데이트: {weather.updatedAt}</p>
      </div>
      <p style={{ marginTop: "1.5rem", color: "#888", fontSize: "0.85rem" }}>
        ※ 이 데이터는 서버(Next.js)에서 Open-Meteo API를 호출한 결과입니다.<br />
        클라이언트(브라우저)는 이미 완성된 HTML만 받습니다.
      </p>
    </div>
  );
}
