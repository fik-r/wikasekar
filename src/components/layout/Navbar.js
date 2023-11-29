'use client'

import { useState, useEffect } from "react";
import Link from "next/link";
import useResponsive from "@/utils/media-query";
export default function Navbar(props) {
    const { isMobile } = useResponsive()
    const [expandTentangKami, setExpandTentangKami] = useState(false)
    const [expandLayanan, setExpandLayanan] = useState(false)

    return (
        <>
            {!isMobile &&
                <div className="shadow-md pb-[1.5rem] w-full bg-white z-[99] sticky top-0" id="navbar">

                    <div className="flex flex-row w-full pt-[2.5rem] pb-[1.5rem]">
                        <div className="grow flex justify-center items-center pl-[18rem]">
                            <img src="/icons/ic_logo.svg" className="w-[14.875rem] h-[3.063rem]" />
                        </div>
                        <div className="flex gap-x-[0.625rem] px-[5rem]">
                            <img src="/icons/facebook.svg" className="cursor-pointer" onClick={() => {
                                window.open(props.kontak.facebook, "_blank")
                            }} />
                            <img src="/icons/twitter.svg" className="cursor-pointer" onClick={() => {
                                window.open(props.kontak.twitter, "_blank")
                            }} />
                            <img src="/icons/instagram.svg" className="cursor-pointer" onClick={() => {
                                window.open(props.kontak.instagram, "_blank")
                            }} />
                        </div>
                    </div>
                    <div className="flex flex-row gap-x-[2.75rem] w-full justify-center items-center py-[0.75rem]">
                        <Link className="text-sooty w-text-subhead-1 cursor-pointer" href="/">
                            Beranda
                        </Link>
                        <div className="relative">
                            <div className="flex flex-row cursor-pointer gap-x-[0.75rem]" onMouseEnter={() => {
                                setExpandTentangKami(true)
                                setExpandLayanan(false)
                            }}>
                                <div className="text-sooty w-text-subhead-1">Tentang Kami</div>
                                <img src="/icons/ic_dropdown.svg" />
                            </div>
                            {expandTentangKami &&
                                <div className="bg-white absolute p-[1rem] w-[11.188rem] rounded-lg shadow-md mt-[0.75rem] border" onMouseLeave={() => {
                                    setExpandTentangKami(false)
                                }}>
                                    <div className="pt-[0.5rem] pb-[0.75rem]">
                                        <Link className="text-sooty w-text-subhead-1 cursor-pointer" href="/tentang-kami/profil-perusahaan">Profil Perusahaan</Link>
                                    </div>
                                    <hr />
                                    <div className="pt-[0.5rem] pb-[0.75rem]">
                                        <Link className="text-sooty w-text-subhead-1 cursor-pointer" href="/tentang-kami/visi-misi">Visi & Misi</Link>
                                    </div>
                                    <hr />
                                    <div className="pt-[0.5rem] pb-[0.75rem]">
                                        <Link className="text-sooty w-text-subhead-1 cursor-pointer " href="/tentang-kami/tujuan-perusahaan">Tujuan Perusahaan</Link>
                                    </div>
                                </div>}
                        </div>
                        <Link href="/berita" className="text-sooty w-text-subhead-1 cursor-pointer">
                            Berita
                        </Link>
                        <Link href="/kontak" className="text-sooty w-text-subhead-1 cursor-pointer">
                            Kontak
                        </Link>
                    </div>


                </div>
            }
            {isMobile &&
                <div className="shadow-md bg-white z-[99] sticky top-0 flex flex-row pt-[2rem] pb-[1rem] items-center justify-start px-[1rem]">
                    <img src="/icons/ic_menu.svg" className="cursor-pointer" />
                    <div className="w-full flex justify-center">
                        <img src="/icons/ic_logo.svg" className="h-[1.188rem] w-[8.125rem] cursor-pointer" />
                    </div>  
                </div>
            }
        </>
    )
}