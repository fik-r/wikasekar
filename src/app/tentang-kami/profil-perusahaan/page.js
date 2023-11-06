import { Navbar, Footer } from "@/components/layout";
import ProfilPerusahaan from "@/components/profil-perusahaan";
import { getSekarBeranda, getSekarTentangKami } from "@/api/wege-service";
export const dynamic = 'force-dynamic'
export default async function Index() {
    const [dataBeranda, dataTentangKami] = await Promise.all([getSekarBeranda(), getSekarTentangKami()])
    return (
        <div className="w-full relative">
            <Navbar kontak={dataBeranda.data[0].kontak} />
            <ProfilPerusahaan data={dataTentangKami.data[0]}/>
            <Footer />
        </div>
    )
}
