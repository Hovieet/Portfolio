import { svg } from "../assets/assets";

export default function Links() {
  return (
    <div>
      <nav className="flex gap-6 sm:gap-10 items-center">
        <a href="" className="">
          <svg.LinkedIn className="sm:size-10 size-9 hover:scale-115 hover:text-[#0072B1] transition-all duration-400" />
        </a>
        <a href="" className="">
          <svg.Instagram className="sm:size-8 size-7 hover:scale-115 hover:text-pink-500 transition-all duration-300" />
        </a>
        <a href="" className="">
          <svg.Email className="sm:size-7 size-7 hover:scale-115 hover:text-gray-400 transition-all duration-300" />
        </a>
      </nav>
    </div>
  );
}
