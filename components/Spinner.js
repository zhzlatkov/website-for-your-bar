export default function Spinner({ size = 15, text = "" }) {
  return (
    <div
      className={`inline-block h-${size} w-${size} mx-auto text-pirateGold-200 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]`}
      role="status"
    >
      <span className="text-pirateGold-200 !absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
        {text}
      </span>
    </div>
  );
}
