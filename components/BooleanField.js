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
    <div className="sm:flex sm:justify-between sm:items-start sm:border-t sm:border-shark-800 pt-4">
      <label
        htmlFor={formName + "_" + fieldName}
        className="block text-sm font-medium text-pirateGold-200 capitalize sm:mt-px sm:pt-2"
      >
        {fieldName.replaceAll("_", " ")}
      </label>
      <div className="mt-1 sm:mt-0 sm:w-4/5">
        <select
          className="block w-full border-2 rounded-sm text-pirateGold-200 bg-shark-950 border-shark-800"
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
