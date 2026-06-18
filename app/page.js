import Link from "next/link";

export default function Home() {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>메뉴</h1>
      <ul style={{ listStyle: "none", padding: 0, marginTop: "1rem" }}>
        <li>
          <Link href="/weather" style={{ fontSize: "1.2rem", color: "#0070f3" }}>
            날씨 보기
          </Link>
        </li>
      </ul>
    </div>
  );
}
