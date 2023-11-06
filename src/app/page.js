import { Navbar, Footer } from "@/components/layout";
import { getLatestNews, getSekarBeranda } from "@/api/wege-service";
import Beranda from "@/components/beranda";
export const dynamic = 'force-dynamic'
export default async function Home() {
  const [dataBeranda, dataNews] = await Promise.all([getSekarBeranda(), getLatestNews(3)])
  return (
    <div className="w-full relative">
      <Navbar kontak={dataBeranda.data[0].kontak} />
      <Beranda data={dataBeranda.data[0]} news={dataNews.data} />
      <Footer />
    </div>
  )
}
