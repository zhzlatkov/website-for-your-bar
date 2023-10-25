export default function ListField({
  formName,
  fieldName,
  value,
  options,
  onChange,
  hideLabel = false,
}) {
  const onListChange = (e) => {
    onChange({
      name: fieldName,
      value: Number(e.target.value),
    });
  };
  return (
    <div
      className={
        "sm:flex sm:justify-between sm:items-start min-w-[3.5rem]" +
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
        <select
          className="block w-full border-2 rounded-sm text-pirateGold-200 capitalize bg-shark-950 border-shark-800"
          id={formName + "_" + fieldName}
          name={fieldName}
          value={value}
          onChange={onListChange}
          required
        >
          {options.length ? (
            options.map((option) => {
              return (
                <option key={option.id ?? option} value={option.id ?? option}>
                  {option.name ?? option}
                </option>
              );
            })
          ) : (
            <></>
          )}
        </select>
      </div>
    </div>
  );
}
