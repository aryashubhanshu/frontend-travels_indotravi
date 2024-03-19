import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io";
import { CiFacebook } from "react-icons/ci";
import { AiOutlineYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="relative w-full bg-black text-white py-[4vw] px-[8vw] flex flex-col">
      <div className="flex gap-8 justify-between">
        <div className="w-1/2 flex gap-4 items-center justify-between">
          <div className="flex flex-col gap-4">
            <h1 className="text-bold">About</h1>
            <h3 className="text-slate-500 cursor-pointer">About us</h3>
            <h3 className="text-slate-500 cursor-pointer">Blog</h3>
            <h3 className="text-slate-500 cursor-pointer">Careers</h3>
            <h3 className="text-slate-500 cursor-pointer">Jobs</h3>
            <h3 className="text-slate-500 cursor-pointer">In Press</h3>
            <h3 className="text-slate-500 cursor-pointer">Gallery</h3>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-bold">Support</h1>
            <h3 className="text-slate-500 cursor-pointer">Contact us</h3>
            <h3 className="text-slate-500 cursor-pointer">Online Chat</h3>
            <h3 className="text-slate-500 cursor-pointer">Whatsapp</h3>
            <h3 className="text-slate-500 cursor-pointer">Telegram</h3>
            <h3 className="text-slate-500 cursor-pointer">Ticketing</h3>
            <h3 className="text-slate-500 cursor-pointer">Call Center</h3>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-bold">FAQ</h1>
            <h3 className="text-slate-500 cursor-pointer">Account</h3>
            <h3 className="text-slate-500 cursor-pointer">Booking</h3>
            <h3 className="text-slate-500">Payments</h3>
            <h3 className="text-slate-500 cursor-pointer">Returns</h3>
            <h3 className="text-slate-500 cursor-pointer">Privacy Policy</h3>
            <h3 className="text-slate-500 cursor-pointer">Terms & Condition</h3>
          </div>
        </div>
        <div className="w-1/3 flex flex-col gap-4">
          <h1>Newsletter</h1>
          <p className="text-slate-500">
            Don&apos;t miss out on the exciting world of travel - subscribe now{" "}
            and embark on a journey of discovery with us.
          </p>
          <div className="border-[1px] rounded-full w-full border-slate-500 flex items-center justify-between px-2 py-2">
            <div className="flex gap-2 items-center">
              <MdOutlineMarkEmailUnread />
              <input
                type="text"
                placeholder="Enter your email"
                className="bg-transparent text-white w-[18vw] outline-none"
              />
            </div>
            <button className="bg-slate-500 px-4 py-1 rounded-full">
              Submit
            </button>
          </div>
          <div className="flex gap-4 text-[1.4vw]">
            <IoLogoInstagram />
            <CiFacebook />
            <AiOutlineYoutube />
          </div>
        </div>
      </div>
      <div className="text-center mt-16">
        &copy;2024 Indotravi, All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
