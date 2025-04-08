export default function NavIcon({ icon, alt }) {
  return (
    <li>
      <button className="w-full h-full">
        <img src={icon} alt={alt} className="w-3 h-3 rounded-xs" />
      </button>
    </li>
  );
}
