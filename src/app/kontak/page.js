import { Navbar, Footer } from "@/components/layout";
import { getSekarBeranda, getSekarKontak } from "@/api/wege-service";
import Kontak from "@/components/kontak";
export const dynamic = 'force-dynamic'
export default async function Index() {
    const [dataBeranda, dataSekarKontak] = await Promise.all([getSekarBeranda(), getSekarKontak()])
    return (
        <div className="w-full relative">
            <Navbar kontak={dataBeranda.data[0].kontak} />
            <Kontak data={dataSekarKontak.data[0]} />
            <Footer />
        </div>
    )
}
