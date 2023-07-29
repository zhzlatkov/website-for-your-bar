import { useRef } from "react";

export default function ImageField({ formName, fieldName, value, onChange }) {
  const inputRef = useRef(null);

  const imageUpload = (e) => {
    return new Promise((resolve, reject) => {
      if (!e.target?.files?.[0]) return;

      const reader = new FileReader();
      reader.addEventListener("load", () => {
        resolve(reader.result);
      });
      reader.addEventListener("error", reject);
      reader.readAsDataURL(e.target.files[0]);
    });
  };

  const handleTriggerInput = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleImageChange = async (e) => {
    try {
      const uploadedPhoto = await imageUpload(e);
      if (uploadedPhoto) {
        onChange({ target: { name: fieldName, value: uploadedPhoto } });
      }
    } catch (error) {
      console.error("Error occurred while uploading image:", error);
      // Handle the error as needed.
    }
  };

  return (
    <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-shark-800 pt-2">
      <label
        htmlFor={formName + "_" + fieldName}
        className="block text-sm font-medium text-pirateGold-200 capitalize sm:mt-px sm:pt-2"
      >
        Photo
      </label>
      <div className="mt-1 sm:col-span-2 cursor-pointer sm:mt-0">
        <div
          className={
            (value !== "" ? "border-green-800" : "border-shark-800") +
            " flex max-w-lg justify-center rounded-md border-2 border-dashed px-6 pt-5 pb-6 relative"
          }
          onClick={handleTriggerInput}
        >
          <div className="space-y-1 text-center">
            <svg
              className={
                (value !== "" ? "text-green-400" : "text-shark-800") +
                " mx-auto h-12 w-12"
              }
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="flex text-sm text-pirateGold-200">
              <label
                htmlFor={formName + "_" + fieldName}
                className="relative cursor-pointer rounded-md bg-shark-950 font-medium text-pirateGold-200 focus-within:outline-none focus-within:ring-2 focus-within:ring-pirateGold-500 focus-within:ring-offset-2 hover:text-pirateGold-500"
              >
                <span>
                  {value !== ""
                    ? "Upload different photo to change it"
                    : "Upload a file"}
                </span>
                <input
                  ref={inputRef}
                  id={formName + "_" + fieldName}
                  name={fieldName}
                  type="file"
                  className="sr-only absolute"
                  accept="image/*"
                  required={value ? false : true}
                  onChange={handleImageChange} // Use the new handler
                />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p
              className={
                value !== ""
                  ? "text-green-400"
                  : "text-pirateGold-400" + " text-xs text-pirateGold-400"
              }
            >
              PNG, JPG, GIF up to 10MB
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
