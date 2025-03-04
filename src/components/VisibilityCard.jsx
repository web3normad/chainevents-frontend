import React from "react";
import Button from "./Button";
import yellowAvatar from "../assets/yellowAvatar.png";
import greenGlobe from "../assets/tabler_world.svg";
import visibility from "../assets/iconoir_eye.svg";

const VisibilityCard = () => {
    return (
        <div>
            <div>
                <h3 className="my-3">Visibility</h3>
                <h4 className="text-[#D9D9D9CC] text-sm">
                    Control how people can find your event
                </h4>
            </div>
            <div className="mt-5 border border-white rounded p-5">
                <div className="flex items-start space-x-4 w-full">
                    <div className="w-[4%]">
                        <img src={yellowAvatar} alt="" className="" />
                    </div>
                    <div className="w-full">
                        <h4 className="text-xs text-[#D9D9D9CC]">
                            Managing Event
                        </h4>
                        <h3 className="font-bold">
                            Teaminfuralegend
                            <span className="ml-8 text-xs font-normal text-[#D9D9D9CC]">
                                Personal
                            </span>
                        </h3>
                        <h3 className="flex items-center w-full">
                            <img src={greenGlobe} alt="green globe" />
                            <span className="text-sm text-[#83F7A0]">
                                Public
                            </span>
                            <span className="ml-8 text-xs font-normal text-[#D9D9D9CC]">
                                This event is listed on the profile pages of
                                hosts.
                            </span>
                        </h3>
                        <div className="w-[20%] mt-5">
                            <Button bgColor={"#4b4b4b"}>
                                <img
                                    src={visibility}
                                    alt="visibility"
                                    className="inline"
                                />
                                <span>Change Visibility</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisibilityCard;
