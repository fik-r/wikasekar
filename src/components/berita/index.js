'use client'
import { useEffect, useState } from "react"
import Pagination from "../common/Pagination"
import News from "./News"
import moment from "moment"
import useResponsive from "@/utils/media-query"
import cn from "classnames"
const Berita = ({ data }) => {
    const { isMobile } = useResponsive()
    const [news, setNews] = useState(data)
    const [page, setPage] = useState(1)

    function dataAsPagination() {
        const sortedData = [...news.filter((val) => val.news_alias != data[0].news_alias)]
        const result = [];
        for (let i = 0; i < sortedData.length; i += 4) {
            result.push(sortedData.slice(i, i + 4));
        }
        return result;
    }

    const pagination = dataAsPagination()
    return (
        <div className="w-full">
            <div className={cn("flex flex-col", isMobile ? "py-[2.5rem] px-[1rem]" : "pt-[5rem] px-[6.25rem]")}>
                <div className={cn(isMobile ? "flex-col" : "flex flex-row justify-between mb-[2.75rem] items-center")}>
                    <div className={cn(isMobile ? "flex flex-col" : "flex flex-row justify-between items-center w-full")}>
                        <div className={cn(isMobile ? "w-text-body-2 font-semibold text-sooty text-center mb-[2rem]" : "w-text-display-2 text-sooty")}>Semua Berita WIKA GEDUNG</div>
                        {/* <div>Urutkan Berdasarkan</div>
                            <div>Cari</div> */}
                        <div className={cn("rounded-full bg-white border border-silver_spoon flex items-center px-[0.875rem]  gap-x-[0.875rem]", isMobile ? "mb-[1rem] h-[2.5rem]" : "h-[2.75rem]")}>
                            <img src="/icons/ic_search_black.svg" />
                            <input
                                type="text"
                                placeholder={"Cari"}
                                className="w-text-body-2 placeholder-robo_master bg-transparent border-none focus:ring-0 outline-none flex-grow"
                                onChange={(e) => {
                                    const value = e.target.value
                                    const filteredData = data.filter
                                        ((val) =>
                                            val.news_title
                                                .toLowerCase()
                                                .includes(value.toLowerCase())
                                        )
                                    setNews(filteredData)
                                    setPage(1)
                                }}
                            />
                        </div>
                    </div>
                </div>
                {/* news */}
                <div className={cn(isMobile ? "flex flex-col gap-y-[1rem]" : "grid grid-cols-4 gap-[2.5rem]")}>
                    {pagination.length > 0 && pagination[page - 1].map((item, index) => {
                        return (
                            <News key={index}
                                alias={item.news_alias}
                                description={item.news_title}
                                location={item.news_place}
                                thumbnail={item.news_file_path}
                                date={moment(item.news_date).format("D MMMM YYYY")}
                            />
                        )
                    })}
                </div>
                <div className={cn("w-full flex mt-[3.125rem] ", isMobile ? "justify-center" : "justify-end mb-[5.938rem]")}>
                    <Pagination totalPages={pagination.length} currentPage={page} isMobile={false}
                        nextPage={() => {
                            let lastpage = pagination.length;

                            if (page !== lastpage) {
                                setPage(page + 1);
                            }
                        }}
                        prevPage={() => {
                            if (page !== 1) {
                                setPage(page - 1);
                            }
                        }}
                        goToSpecificPage={(val) => {
                            setPage(val)
                        }}
                    />
                </div>
            </div>

        </div>
    )
}

export default Berita