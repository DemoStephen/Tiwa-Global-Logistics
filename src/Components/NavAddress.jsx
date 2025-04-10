import NavIcon from "./NavIcon";
import tiktok from "../assets/SVG/tiktok.svg";
import facebook from "../assets/SVG/facebook.svg";
import instagram from "../assets/SVG/instagram.svg";
export default function NavAddress() {
  return (
    <aside className="text-xs flex gap-4 justify-between items-center bg-slate-200 text-slate-900 px-[5%]">
      <p className="hidden md:block">
        <b>Opening Hours:</b> Mon - Friday 9AM to 5PM - Closed on weekends
      </p>

      <aside className="flex md:justify-end w-full md:w-auto justify-between gap-4 items-center">
        <address className="not-italic">
          Location Near you, <b>Ilewe Ejigbo</b>
        </address>

        <div className="flex gap-3 items-center">
          <b>REACH US</b>
          <ul className="flex gap-2">
            <NavIcon
              icon={tiktok}
              alt="tiktok"
              link={"https://www.tiktok.com/@tiwalogistics"}
            />
            <NavIcon
              icon={facebook}
              alt="facebook"
              link={"https://web.facebook.com/tiwalogistics/"}
            />
            <NavIcon
              icon={instagram}
              alt="instagram"
              link={"https://www.instagram.com/tiwagloballogistics/"}
            />
          </ul>
        </div>
      </aside>
    </aside>
  );
}
