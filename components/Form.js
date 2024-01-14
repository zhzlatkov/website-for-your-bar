import { useState } from "react";
import TextAreaField from "./TextAreaField";
import TextField from "./TextField";
import BooleanField from "./BooleanField";
import ImageField from "./ImageField";
import IntegerFied from "./IntegerField";
import ListField from "./ListField";
import Loading from "./Loading";
import Router from "next/router";

export default function DymaicForm({
  formName,
  destinationURL,
  dataObject,
  relationData = null,
}) {
  const [error, setError] = useState({ status: false });
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(dataObject);

  const onChange = (e) => {
    const { name, value } = e;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError({ status: false });
    let pathToSubmit = formName.split("_");
    if (pathToSubmit.length > 1) {
      pathToSubmit.shift();
    }
    let url = `/api/${pathToSubmit.join("-")}`;
    let method = "POST";

    if (data?.id || data.id === 0) {
      method = "PATCH";
    }

    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data,
      }),
    });
    const result = await response.json();
    if (response.status !== 200) {
      setIsLoading(false);
      setError({ status: true, message: result.message });
      console.error(result.message);
    } else {
      setIsLoading(false);
      if (!destinationURL) {
        return Router.push("/your-bar-admin/");
      }
      return Router.push(`/your-bar-admin${destinationURL}`);
    }
  };

  if (isLoading) {
    return <Loading className="w-full h-max opacity-25" />;
  }

  const fieldNames = Object.keys(data);
  return (
    <form
      onSubmit={onSubmit}
      className="space-y-4 divide-y divide-shark-800 p-4"
    >
      {fieldNames.map((fieldName) => {
        if (fieldName === "id") return;
        if (typeof data[fieldName] === "object") return;

        if (
          fieldName.includes("photo") ||
          fieldName.includes("image") ||
          fieldName.includes("logo")
        ) {
          return (
            <ImageField
              key={fieldName}
              formName={formName}
              fieldName={fieldName}
              value={data[fieldName]}
              onChange={onChange}
            />
          );
        } else if (relationData && fieldName.includes(relationData?.name)) {
          return (
            <ListField
              key={relationData.name}
              formName={formName}
              fieldName={relationData.name}
              value={data[fieldName]}
              options={relationData.options}
              onChange={onChange}
            />
          );
        } else if (
          fieldName.includes("description") ||
          fieldName.includes("text")
        ) {
          return (
            <TextAreaField
              key={fieldName}
              formName={formName}
              fieldName={fieldName}
              value={data[fieldName]}
              onChange={onChange}
            />
          );
        } else if (typeof data[fieldName] === "string") {
          return (
            <TextField
              key={fieldName}
              formName={formName}
              fieldName={fieldName}
              value={data[fieldName]}
              onChange={onChange}
            />
          );
        } else if (typeof data[fieldName] === "number") {
          return (
            <IntegerFied
              key={fieldName}
              formName={formName}
              fieldName={fieldName}
              value={data[fieldName]}
              onChange={onChange}
            />
          );
        } else if (typeof data[fieldName] === "boolean") {
          return (
            <BooleanField
              key={fieldName}
              formName={formName}
              fieldName={fieldName}
              value={data[fieldName]}
              onChange={onChange}
            />
          );
        } else {
          return;
        }
      })}
      {!error.status ? null : (
        <div className="sm:flex sm:items-center sm:gap-4 justify-end">
          <label
            htmlFor="category-name"
            className="block text-sm font-medium text-red-600"
          >
            ERROR:
          </label>
          <div className="sm:col-span-2 text-red-600">
            <h1>{error.message || ""}</h1>
          </div>
        </div>
      )}
      <div className="pt-5">
        <div className="flex justify-end">
          <button
            type="submit"
            className="ml-3 inline-flex justify-center rounded-sm border border-transparent bg-pirateGold-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-pirateGold-700 focus:outline-none focus:ring-2 focus:ring-pirateGold-500 focus:ring-offset-2"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
}
