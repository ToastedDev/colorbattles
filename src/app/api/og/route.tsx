import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const hasHex = searchParams.has("hex");
  const hex = hasHex ? "#" + searchParams.get("hex")! : "#fff";

  return new ImageResponse(
    (
      <div
        style={{
          width: "600px",
          height: "600px",
          backgroundColor: hex,
          borderRadius: "50%",
        }}
      />
    ),
    { width: 600, height: 600 }
  );
}
