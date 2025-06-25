export default function Card({ title, children }) {
  return (
    <div className="bg-white shadow-lg p-5 lg:col-span-1 col-span-3 font-roboto font-light">
      {title && <h4 className="text-theme-red font-bold text-xl mb-2">{title}</h4>}
      {children}
    </div>
  );
}
