import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Thân Ngọc Huyên | Graphic Designer & Video Editor", description: "Portfolio thiết kế đồ họa và dựng video của Thân Ngọc Huyên." };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="vi"><body>{children}</body></html> }
