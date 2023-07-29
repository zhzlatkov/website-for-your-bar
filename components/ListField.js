export default function SelectField({
  formName,
  fieldName,
  value,
  options,
  onChange,
}) {
  return (
    <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-shark-800 pt-2">
      <label
        htmlFor={formName + "_" + fieldName}
        className="block text-sm font-medium text-pirateGold-200 capitalize sm:mt-px sm:pt-2"
      >
        {fieldName.replace("_", " ")}
      </label>
      <div className="mt-1 sm:col-span-2 sm:mt-0">
        <select
          className="block w-full border-2 rounded-md text-pirateGold-200 capitalize bg-shark-950 border-shark-800"
          id={formName + "_" + fieldName}
          name={fieldName}
          value={value}
          onChange={onChange}
          required
        >
          {options.length ? (
            options.map((option) => {
              return (
                <option key={option.id} value={option.id}>
                  {option.name}
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
