import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Rose Xi — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const instrumentSerif = fetch(
    new URL(
      "https://fonts.gstatic.com/s/instrumentserif/v4/jizBRFtNs2ka5fCjOQ3GCNhIzlpieOY.ttf"
    )
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          background: "#faf9f7",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            fontFamily: "Instrument Serif",
            fontSize: 72,
            color: "#1a1a1a",
            letterSpacing: "-0.02em",
          }}
        >
          Rose Xi
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#6b7280",
            marginTop: 16,
            letterSpacing: "0.01em",
          }}
        >
          Software engineer, builder, and creative thinker.
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Instrument Serif",
          data: await instrumentSerif,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
