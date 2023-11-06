import { Navbar, Footer } from "@/components/layout";
import { getSekarBeranda, getSekarTentangKami } from "@/api/wege-service";
import TujuanPerusahaan from "@/components/tujuan-perusahaan";
export const dynamic = 'force-dynamic'
export default async function Index() {

    const [dataBeranda, dataTentangKami] = await Promise.all([getSekarBeranda(), getSekarTentangKami()])
    return (
        <div className="w-full relative">
            <Navbar kontak={dataBeranda.data[0].kontak} />
            <TujuanPerusahaan data={dataTentangKami.data[0]} />
            <Footer />
        </div>
    )
}
