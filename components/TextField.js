export default function TextField({ formName, fieldName, value, onChange }) {
  const onTextFieldChange = (e) =>
    onChange({
      name: fieldName,
      value: e.target.value,
    });
  return (
    <div className="sm:flex sm:justify-between sm:items-start sm:border-t sm:border-shark-800 pt-4">
      <label
        htmlFor={formName + "_" + fieldName}
        className="block text-sm font-medium text-pirateGold-200 capitalize sm:mt-px sm:pt-2"
      >
        {fieldName.replaceAll("_", " ")}
      </label>
      <div className="mt-1 sm:mt-0 sm:w-4/5">
        <input
          className="block w-full border-2 rounded-sm text-pirateGold-200 bg-shark-950 border-shark-800"
          type="text"
          name={fieldName}
          id={formName + "_" + fieldName}
          minLength="1"
          maxLength="1000"
          value={value}
          onChange={onTextFieldChange}
        />
      </div>
    </div>
  );
}
