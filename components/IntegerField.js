export default function IntegerFied({
  formName,
  fieldName,
  value,
  onChange,
  hideLabel = false,
}) {
  const onNumberChange = (e) => {
    const value = e.target.value.replace("+", "");
    onChange({
      name: fieldName,
      value: Number(value),
    });
  };
  return (
    <div
      className={
        "sm:flex sm:justify-between sm:items-start " +
        (hideLabel ? "" : "pt-4 sm:border-t sm:border-shark-800")
      }
    >
      {!hideLabel ? (
        <label
          htmlFor={formName + "_" + fieldName}
          className="block text-sm font-medium text-pirateGold-200 capitalize sm:mt-px sm:pt-2"
        >
          {fieldName.replaceAll("_", " ")}
        </label>
      ) : null}
      <div className="mt-1 sm:mt-0 sm:w-4/5">
        <input
          className="block w-full border-2 rounded-sm text-pirateGold-200 bg-shark-950 border-shark-800"
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
