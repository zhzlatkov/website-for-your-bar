export default function IntegerFied({ formName, fieldName, value, onChange }) {
  const onNumberChange = (e) =>
    onChange({
      target: { name: fieldName, value: Number(e.target.value) },
    });
  return (
    <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-shark-800 pt-2">
      <label
        htmlFor={formName + "_" + fieldName}
        className="block text-sm font-medium text-pirateGold-200 capitalize sm:mt-px sm:pt-2"
      >
        {fieldName.replace("_", " ")}
      </label>
      <div className="mt-1 sm:col-span-2 sm:mt-0">
        <input
          className="block w-full border-2 rounded-md text-pirateGold-200 bg-shark-950 border-shark-800"
          type="text"
          name={fieldName}
          id={formName + "_" + fieldName}
          min="0"
          max="9999"
          value={value}
          onChange={onNumberChange}
          {...(fieldName.includes("*") ? "required" : "")}
        />
      </div>
    </div>
  );
}
