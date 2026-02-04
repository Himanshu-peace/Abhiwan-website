import Header from "@/components/Header"


export default function SeoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* <Header /> */}
      <main>{children}</main>
    </>
  )
}
