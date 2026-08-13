import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Astana POS — Sistem Juruwang Cloud untuk PKS Malaysia";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const [bricolage, inter, logo] = await Promise.all([
    readFile(join(process.cwd(), "assets/og/BricolageGrotesque-ExtraBold.ttf")),
    readFile(join(process.cwd(), "assets/og/Inter-Medium.ttf")),
    readFile(join(process.cwd(), "public/logo.png")),
  ]);
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "64px 72px 72px",
          backgroundImage:
            "linear-gradient(180deg, #ffffff 0%, #f6f9fd 55%, #eaf3fb 100%)",
          fontFamily: "Inter",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -220,
            right: -160,
            width: 620,
            height: 620,
            borderRadius: 9999,
            backgroundColor: "rgba(95, 200, 232, 0.16)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -260,
            left: -180,
            width: 560,
            height: 560,
            borderRadius: 9999,
            backgroundColor: "rgba(110, 224, 125, 0.14)",
          }}
        />

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={382} height={82} alt="" />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 64,
            fontFamily: "Bricolage Grotesque",
            fontSize: 76,
            lineHeight: 1.08,
            letterSpacing: -2,
          }}
        >
          <span style={{ color: "#0a1623" }}>Sistem Juruwang Cloud</span>
          <span
            style={{
              backgroundImage:
                "linear-gradient(120deg, #1f6da6 0%, #1f7e85 50%, #1e7a34 100%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            untuk PKS Malaysia
          </span>
        </div>

        <div style={{ display: "flex", marginTop: 28, fontSize: 30, color: "#3b484e" }}>
          Jualan tanpa had · Stok tanpa had · Laporan tanpa had
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "auto",
          }}
        >
          <div style={{ display: "flex", fontSize: 28, color: "#1e7a34" }}>
            astanabiz.com
          </div>
          <div
            style={{
              display: "flex",
              padding: "12px 26px",
              borderRadius: 999,
              backgroundColor: "#e8f7ec",
              color: "#1e7a34",
              fontSize: 24,
            }}
          >
            Dipercayai oleh 7,000+ kedai di Malaysia
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: 1200,
            height: 14,
            backgroundImage:
              "linear-gradient(90deg, #2b80c2 0%, #2da3a7 50%, #37b34a 100%)",
          }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Bricolage Grotesque",
          data: bricolage,
          weight: 800,
          style: "normal",
        },
        { name: "Inter", data: inter, weight: 500, style: "normal" },
      ],
    }
  );
}
