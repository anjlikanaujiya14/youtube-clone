import React from 'react';
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts, SiYoutubestudio, SiYoutubekids, SiYoutubemusic, SiTrendmicro, SiStylelint, SiYoutubegaming } from "react-icons/si";
import { MdOutlinedFlag, MdOutlineSubscriptions, MdOutlineWatchLater, MdOutlineSwitchAccount, MdPodcasts } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { LuHistory } from "react-icons/lu";
import { GoLightBulb } from "react-icons/go";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { FaYoutube, FaRegNewspaper } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { PiMusicNoteLight, PiFilmSlateLight, PiLightbulbLight } from "react-icons/pi";
import { CgMediaLive } from "react-icons/cg";
import { TfiCup } from "react-icons/tfi";
import { IoSettingsOutline, IoHelpCircleOutline } from "react-icons/io5"; // Use this import
import { RiFeedbackLine } from "react-icons/ri";
import { BiSolidVideoPlus } from 'react-icons/bi';
import { useUtils } from '../context/UtilsContext';

function Sidebar() {

    const {isSidebar, mobileShow, setMobileShow} = useUtils();
    const sidebarItems = [
        {
            groupName: "Home",
            groupItems: [
                { id: 1, name: "Home", icon: <GoHome /> },
                { id: 2, name: "Shorts", icon: <SiYoutubeshorts /> },
                { id: 3, name: "Subscriptions", icon: <MdOutlineSubscriptions /> }
            ],
        },
        {
            groupName: "You",
            groupItems: [
                { id: 1, name: "Your channel", icon: <MdOutlineSwitchAccount /> },
                { id: 2, name: "History", icon: <LuHistory /> },
                { id: 3, name: "Playlists", icon: <MdOutlinePlaylistPlay /> },
                { id: 4, name: "Your Videos", icon: <BiSolidVideoPlus /> },
                { id: 5, name: "Your courses", icon: <GoLightBulb /> },
                { id: 6, name: "Watch Later", icon: <MdOutlineWatchLater /> },
                { id: 7, name: "Liked videos", icon: <AiOutlineLike /> }
            ],
        },
        {
            groupName: "Explore",
            groupItems: [
                { id: 1, name: "Trending", icon: <SiTrendmicro /> },
                { id: 2, name: "Shopping", icon: <HiOutlineShoppingBag /> },
                { id: 3, name: "Music", icon: <PiMusicNoteLight /> },
                { id: 4, name: "Films", icon: <PiFilmSlateLight /> },
                { id: 5, name: "Live", icon: <CgMediaLive /> },
                { id: 6, name: "Gaming", icon: <SiYoutubegaming /> },
                { id: 7, name: "News", icon: <FaRegNewspaper /> },
                { id: 8, name: "Sport", icon: <TfiCup /> },
                { id: 9, name: "Courses", icon: <SiStylelint /> },
                { id: 10, name: "Fashion & beauty", icon: <PiLightbulbLight /> },
                { id: 11, name: "Podcast", icon: <MdPodcasts /> }
            ],
        },
        {
            groupName: "YouTube Services",
            groupItems: [
                { id: 1, name: "YouTube Premium", icon: <FaYoutube /> },
                { id: 2, name: "YouTube Studio", icon: <SiYoutubestudio /> },
                { id: 3, name: "YouTube Music", icon: <SiYoutubemusic /> },
                { id: 4, name: "YouTube Kids", icon: <SiYoutubekids /> }
            ],
        },
        {
            groupName: "Settings",
            groupItems: [
                { id: 1, name: "Settings", icon: <IoSettingsOutline /> },
                { id: 2, name: "Report history", icon: <MdOutlinedFlag /> },
                { id: 3, name: "Help", icon: <IoHelpCircleOutline /> }, // Corrected here
                { id: 4, name: "Send feedback", icon: <RiFeedbackLine /> }
            ],
        }
    ];

    const ModelOverlay = () => {
        return (
            <div className='flex fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-30' onClick={() => setMobileShow(!mobileShow)} >

            </div>
        )
    }

    return (
        <>
        <div className={`${
            mobileShow 
            ? "fixed top-0 bottom-0 left-0 transition-all duration-300 bg-white z-40 h-screen w-[70%] sm:w-[30%]" 
            : "hidden h-[calc(100vh-6.625rem)] w-[18%]"
            }xl:static xl:block px-2 lg:px-6 w-[20%]  overflow-y-scroll overflow-x-hidden scrollbar-thin`}>
        <div className="space-y-3">
            {sidebarItems.map((group, groupIndex) => (
                <div key={groupIndex}>
                    {group.groupName && <h1 className='font-bold'>{group.groupName}</h1>}
                    {group.groupItems.map(item => (
                        <div key={item.id} className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1 my-3">
                            <div className="text-sm cursor-pointer">
                                {item.icon}
                            </div>
                            <span className="text-sm cursor-pointer">{item.name}</span>
                        </div>
                    ))}
                </div>
            ))}
        </div>
        <br />
        <hr />
        <br />
        <span className="text-xs font-semibold text-gray-500">
            About Press Copyright
            <br />
            Contact us Creator
            <br />
            Advertise Developers
            <br /><br />
            <p>
                Terms Privacy Policy & Safety<br /> How YouTube works <br /> Test new features
            </p>
        </span>
        <br />
        <p className="text-xs text-gray-400 mt-1">© 2024 Learn Coding</p>
    </div>

    {mobileShow ? <ModelOverlay /> : null} 
    </>
        
    );
}

export default Sidebar;
