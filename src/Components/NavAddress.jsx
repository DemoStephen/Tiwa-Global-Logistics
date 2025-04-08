import NavIcon from "./NavIcon";

export default function NavAddress() {
  return (
    <aside className="text-xs flex gap-4 justify-between items-center bg-gray-950 text-slate-200 px-[5%]">
      <p className="hidden md:block">
        <b>Opening Hours:</b> Mon - Friday 9AM to 5PM - Closed on weekends
      </p>

      <aside className="flex md:justify-end w-full md:w-auto justify-between gap-4 items-center">
        <address className="not-italic">
          Location Near you, <b>Ilewe Ejigbo</b>
        </address>

        <div className="flex gap-2 items-center">
          <b>REACH US</b>
          <ul className="flex gap-1">
            <NavIcon icon="#" alt="tiktok" />
            <NavIcon icon="#" alt="facebook" />
            <NavIcon icon="#" alt="instagram" />
          </ul>
        </div>
      </aside>
    </aside>
  );
}
