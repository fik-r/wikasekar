import { Navbar, Footer } from "@/components/layout";
import { getLatestNews, getSekarBeranda } from "@/api/wege-service";
import Berita from "@/components/berita";
export const dynamic = 'force-dynamic'
export default async function Index() {
    const [dataBeranda, dataNews] = await Promise.all([getSekarBeranda(), getLatestNews()])
    return (
        <div className="w-full relative">
            <Navbar kontak={dataBeranda.data[0].kontak} />
            <Berita data={dataNews.data} />
            <Footer />
        </div>
    )
}
