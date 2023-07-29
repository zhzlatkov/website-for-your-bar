export default function BooleanField({ formName, fieldName, value, onChange }) {
  const onBooleanChange = (e) => {
    switch (e.target.value) {
      case "false":
        onChange({
          name: fieldName,
          value: false,
        });
        break;
      case "true":
        onChange({
          name: fieldName,
          value: true,
        });
        break;
    }
  };
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
          className="block w-full border-2 rounded-md text-pirateGold-200 bg-shark-950 border-shark-800"
          id={formName + "_" + fieldName}
          name={fieldName}
          value={value}
          required
          onChange={onBooleanChange}
        >
          <option value="true">True</option>
          <option value="false">False</option>
        </select>
      </div>
    </div>
  );
}
