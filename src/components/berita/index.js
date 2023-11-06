'use client'
import { useEffect, useState } from "react"
import Pagination from "../common/Pagination"
import News from "./News"
import moment from "moment"
const Berita = ({ data }) => {
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
            <div className="flex flex-col pt-[5rem] px-[6.25rem]">
                <div className="flex flex-row justify-between mb-[2.75rem] items-center">
                    <div className="flex flex-row justify-between items-center w-full">
                        <div className="w-text-display-2 text-sooty">Semua Berita WIKA GEDUNG</div>
                        {/* <div>Urutkan Berdasarkan</div>
                            <div>Cari</div> */}
                        <div className="rounded-full bg-white border border-silver_spoon flex items-center px-[0.875rem] h-[2.75rem] gap-x-[0.875rem]">
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
                <div className="grid grid-cols-4 gap-[2.5rem]">
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
                <div className="w-full flex justify-end mt-[3.125rem] mb-[5.938rem]">
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