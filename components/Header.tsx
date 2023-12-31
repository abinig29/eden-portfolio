"use client";
import { links } from "@/lib/constants";
import clsx from "clsx";
import Link from "next/link";
const Header = () => {

    return (
        <div className=" h-[100px]  ">
            <div className="px-4 py-2 max-w-[900px] mx-auto h-full flex justify-start items-center  z-[999]">
                <Link href={'/'}>
                    <span className="t text-4xl font-extrabold">Eden</span>
                </Link>
                <div
                    className="flex justify-between items-center ml-auto gap-2"
                >
                    {links.map((value, index) => (
                        <div
                            key={index}
                            className={"px-3 py-1 relative rounded-full transition duration-800"
                            }
                        >
                            {
                                !value.isA ?
                                    < Link
                                        href={value.href}
                                        // onClick={() => {
                                        //     setActive(value.name)
                                        //     setTimeOfLastClick(Date.now())
                                        // }}
                                        className={clsx("hover:text-gray-700 text-[14px] transition text-[#7c808c]")}
                                    >
                                        {value.name}
                                    </Link> :
                                    <a href={value.href}
                                        className={clsx("hover:text-gray-500  text-[14px] transition text-[#7c808c]")}
                                    >
                                           {value.name}
                                    </a>
                            }

                        </div>
                    ))
                    }
                </div>
            </div>

        </div >
    );
};
export default Header;
