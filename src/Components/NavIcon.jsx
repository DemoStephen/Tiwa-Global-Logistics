export default function NavIcon({ icon, alt, link }) {
  return (
    <li>
      <a href={link}>
        <button className="w-full h-full cursor-pointer">
          <img src={icon} alt={alt} className="w-4 h-4 rounded-xs p-0.25" />
        </button>
      </a>
    </li>
  );
}
