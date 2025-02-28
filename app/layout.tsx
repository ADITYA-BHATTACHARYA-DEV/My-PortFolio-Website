import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter =Inter({ subsets: ['latin']})

export const metadata: Metadata =
{
  title: 'My Portfolio',
  description: 'A Fervent Technophile and an Inquisitive Technical Researcher',

}

export default function RootLayout(
  {
    children,
  }:
  {
    children: React.ReactNode
  }
)
{
  return (
    <html lang="en">
      <body className={'${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden'}>
        {children}
      </body>
    </html>
  )
}