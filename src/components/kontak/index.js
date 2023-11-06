'use client'
import cn from "classnames"
const Kontak = ({ data }) => {
    return (
        <div className="w-full flex flex-col pt-[5rem] pb-[11.938rem] px-[9.375rem]">
            <div className="self-center w-text-display-2 text-sooty">
                Kontak
            </div>
            <div className="grid grid-cols-2 gap-x-[6.563rem] pt-[5.313rem] pb-[5.75rem]">
                <iframe
                    width={"100%"}
                    height="325"
                    style={{ border: 0 }}
                    loading="lazy"
                    className="rounded-3xl"
                    allowfullscreen
                    referrerpolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_MAPS_API_KEY}&q=${data.maps.latitude},${data.maps.longitude}`}>
                </iframe>
                <div className="flex flex-col">
                    <div className="w-text-title-1 font-normal text-dire_wolf">{data.text}</div>
                    <div className="grid grid-cols-2 mt-[1.5rem]">
                        <div className="w-text-title-1 font-medium text-dire_wolf">Email</div>
                    </div>
                    <div className="grid grid-cols-2 mt-[1rem]">
                        <div className="w-text-title-1 font-normal text-dire_wolf">{data.email}</div>
                    </div>
                    <div className="grid grid-cols-2 mt-[2.5rem]">
                        <div className="w-text-title-1 font-medium text-dire_wolf">Nomor Telepon</div>
                    </div>
                    <div className="grid grid-cols-2 mt-[1rem]">
                        <div className="w-text-title-1 font-normal text-dire_wolf">{data.telephone}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Kontak;