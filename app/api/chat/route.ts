import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const res = await fetch("http://66.116.226.107:8000/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        });
        const data = await res.json();
        return NextResponse.json(data);
    } catch {
        return NextResponse.json(
            { reply: "Sorry, something went wrong. Please try again or contact us at +91 98860 35330." },
            { status: 500 }
        );
    }
}
