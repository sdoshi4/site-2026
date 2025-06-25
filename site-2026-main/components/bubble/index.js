export default function Bubble({ quantity, quality, color }) {
  return (
    <div
      className="text-roboto font-light text-white rounded-full table w-32 h-32 lg:w-40 lg:h-40 mx-auto mb-5"
      style={{ backgroundColor: color }}
    >
      <p className="table-cell align-middle px-2 text-md lg:text-xl">
        <span className="font-bold text-xl">{quantity}</span> <br />
        {quality}
      </p>
    </div>
  );
}
