import React from "react";
import { GitHub } from "react-feather";
import { LiaLinkedin } from "react-icons/lia";
import Lanyard from "../hero/Lanyard";
import ProfileCard from "../hero/ProfileCard";

export const PersonalCard = () => {
    return (
        <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl p-12 max-w-4xl w-full mx-auto overflow-hidden">
            <div className="absolute -top-3 right-6">
                <div className="bg-black text-white px-5 py-2 rounded-bl-2xl rounded-br-2xl rounded-tl-none rounded-tr-2xl text-2xl font-semibold shadow-lg rotate-[3deg]">
                    Mini Profile
                </div>
            </div>

            <div className="relative flex justify-between items-center mb-6">
                <div className="relative w-100 h-100 flex-shrink-0">
                    <div className="absolute inset-0">
                        <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
                        {/* <ProfileCard
                            name="Udinn"
                            title="FrontEnd Web Developer"
                            handle="udinn.Code"
                            status="Online"
                            contactText="Contact Me"
                            avatarUrl="../src/assets/Profile.png"
                            iconUrl='../src/assets/react.svg'
                            showUserInfo={true}
                            enableTilt={true}
                            enableMobileTilt={false}
                            onContactClick={() => console.log('Contact clicked')}
                        /> */}
                    </div>
                </div>

                <div className="flex-1 pl-8">
                    <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-4">
                        Ahmad Syarifudin Najihul Widad
                    </h1>

                    <p className="text-center text-gray-600 text-lg mb-1">
                        Eager to <span className="font-semibold text-gray-900">Learn</span>. Ready to{" "}
                        <span className="font-semibold text-gray-900">Contribute</span>.
                    </p>

                    <p className="text-center text-gray-500 italic mb-10">
                        "I wana be Pillar of Inovation in Tech World"
                    </p>

                    <div className="flex justify-center items-center gap-4">
                        <div className="flex items-center gap-5 bg-black text-white px-8 py-3 rounded-full shadow-xl">
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:scale-110 transition-transform"
                            >
                                <GitHub size={24} />
                            </a>

                            <a
                                href="https://behance.net"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:scale-110 transition-transform"
                            >
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="inline-block"
                                >
                                    <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.67.767-.61.165-1.252.254-1.91.254H0V4.51h6.938v-.007zM3.495 8.22h2.88c.8 0 1.43-.182 1.87-.543.44-.36.66-.875.66-1.55 0-.64-.2-1.13-.585-1.47-.385-.34-.96-.51-1.745-.51H3.495v4.07zm0 7.83h3.026c.85 0 1.51-.196 1.98-.588.46-.392.69-.98.69-1.77 0-.797-.226-1.385-.69-1.778-.46-.394-1.13-.59-1.98-.59H3.495v4.726zm15.635-4.605c.39.39.605.99.605 1.78v.63H15.96c.09.936.405 1.56.945 1.86.325.18.72.27 1.18.27.476 0 .87-.118 1.19-.35.17-.125.33-.295.48-.51h2.16c-.06.495-.33 1.005-.825 1.52-.76.792-1.82 1.19-3.18 1.19-1.13 0-2.11-.345-2.94-1.03-.83-.686-1.25-1.75-1.25-3.19 0-1.36.38-2.43 1.14-3.21.76-.78 1.74-1.17 2.94-1.17 1.4 0 2.42.41 3.06 1.23.43.54.71 1.21.82 2.01zm-2.755-1.13c-.314-.288-.72-.432-1.22-.432-.53 0-.96.144-1.29.432-.33.29-.56.685-.66 1.19h3.87c-.06-.52-.28-.917-.7-1.19zm-4.23-4.95h5.57v1.17h-5.57v-1.17z" />
                                </svg>
                            </a>

                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:scale-110 transition-transform"
                            >
                                <LiaLinkedin size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalCard;
