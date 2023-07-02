import { useState } from "react";
import Router from "next/router";

export default function ProductForm({ categories, product = undefined }) {
  const [error, setError] = useState({ status: false });
  const [categoryId, setCategoryId] = useState(product?.category || "");
  const [name, setName] = useState(product?.name || "");
  const [price, setPrice] = useState(product?.price || Number);
  const [quantity, setQuantity] = useState(product?.quantity || "");
  const [quantityType, setQuantityType] = useState(product?.quantityType || "");

  const [status, setStatus] = useState(product?.status || Boolean);
  const [shortDescription, setShortDescription] = useState(
    product?.shortDescription || ""
  );
  const [longDescription, setLongDescription] = useState(
    product?.longDescription || ""
  );
  const [image, setImage] = useState("");

  const onCategoryIdChange = (e) => setCategoryId(Number(e.target.value));
  const onNameChange = (e) => setName(e.target.value);
  const onPriceChange = (e) => setPrice(Number(e.target.value));
  const onQuantityChange = (e) => setQuantity(e.target.value);
  const onQuantityTypeChange = (e) => setQuantityType(e.target.value);
  const onStatusChange = (e) => setStatus(Boolean(e.target.value));
  const onShortDescriptionChange = (e) => setShortDescription(e.target.value);
  const onLongDescriptionChange = (e) => setLongDescription(e.target.value);
  const imageUpload = async (e) => {
    if (e.target?.files?.[0]) {
      setImage("");
    }
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      setImage(reader.result);
    });
    reader.readAsDataURL(e.target.files[0]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setError({ status: false });

    const productInfo = {
      name,
      price,
      quantity,
      quantityType,
      status,
      shortDescription,
      longDescription,
      photoPath: image ? "" : product.photoPath,
    };

    let url = "/api/create-product";
    let method = "POST";

    if (product?.id) {
      url = "/api/update-product";
      method = "PATCH";
      productInfo.id = product.id;
    }
    (async function () {
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          product: productInfo,
          categoryId,
          image,
        }),
      });
      const result = await response.json();
      if (response.status !== 200) {
        setError({ status: true, message: result.message });
        console.error(result.message);
      } else {
        return Router.push("/your-bar-admin/products");
      }
    })();
  };

  return (
    <form
      className="space-y-8 divide-y divide-gray-200 p-8"
      onSubmit={onSubmit}
    >
      <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
        <div className="space-y-6 sm:space-y-5">
          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              {!product ? "Add New Product" : "Edit Product"}
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              *Must be filled
            </p>
          </div>
          <div className="space-y-6 sm:space-y-5">
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Category Type*
              </label>
              <div className="mt-1 sm:col-span-2 sm:mt-0">
                <select
                  className="block w-full border-2 rounded-md text-gray-700"
                  id="category"
                  name="category"
                  value={categoryId}
                  onChange={onCategoryIdChange}
                  required
                >
                  <option value="" disabled></option>
                  {categories ? (
                    categories.map((category) => {
                      return (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      );
                    })
                  ) : (
                    <></>
                  )}
                </select>
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="category-name"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Product Name*
              </label>
              <div className="mt-1 sm:col-span-2 sm:mt-0">
                <input
                  className="block w-full border-2 rounded-md text-gray-700"
                  type="text"
                  name="product name"
                  id="category-name"
                  minLength="4"
                  maxLength="40"
                  value={name}
                  onChange={onNameChange}
                />
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="cover-photo"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Product Photo*
              </label>
              <div className="mt-1 sm:col-span-2 sm:mt-0">
                <div
                  className={
                    (image !== "" ? "border-green-400" : "border-gray-300") +
                    " flex max-w-lg justify-center rounded-md border-2 border-dashed px-6 pt-5 pb-6 relative"
                  }
                >
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
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
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>
                          {image !== ""
                            ? "Upload different photo to change it"
                            : "Upload a file"}
                        </span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only absolute"
                          accept="image/*"
                          required={product?.photoPath ? false : true}
                          onChange={imageUpload}
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="category-name"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Product price*
              </label>
              <div className="mt-1 sm:col-span-2 sm:mt-0">
                <input
                  className="block w-full border-2 rounded-md text-gray-700"
                  type="number"
                  name="product price"
                  id="product price"
                  min="0"
                  required
                  max="9999"
                  value={price}
                  onChange={onPriceChange}
                />
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="category-name"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Product Quantity
              </label>
              <div className="mt-1 sm:col-span-2 sm:mt-0">
                <input
                  className="block w-full border-2 rounded-md text-gray-700"
                  type="text"
                  name="product quantity"
                  id="product quantity"
                  minLength="1"
                  maxLength="40"
                  value={quantity}
                  onChange={onQuantityChange}
                />
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="category-name"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Product Quantity Type
              </label>
              <div className="mt-1 sm:col-span-2 sm:mt-0">
                <input
                  className="block w-full border-2 rounded-md text-gray-700"
                  type="text"
                  name="product quantity type"
                  id="product quantity type"
                  minLength="1"
                  maxLength="40"
                  value={quantityType}
                  onChange={onQuantityTypeChange}
                />
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Product Status*
              </label>
              <div className="mt-1 sm:col-span-2 sm:mt-0">
                <select
                  className="block w-full border-2 rounded-md text-gray-700"
                  id="product status"
                  name="product status"
                  value={status}
                  required
                  onChange={onStatusChange}
                >
                  <option value="" disabled></option>
                  <option value="true">True</option>
                  <option value="false">False</option>
                </select>
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="category-name"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Product Short Description
              </label>
              <div className="mt-1 sm:col-span-2 sm:mt-0">
                <textarea
                  className="block w-full border-2 rounded-md text-gray-700 h-20"
                  type="text"
                  name="product floring"
                  id="product floring"
                  minLength="2"
                  maxLength="1000"
                  value={shortDescription}
                  onChange={onShortDescriptionChange}
                />
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="category-name"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Product Long Description
              </label>
              <div className="mt-1 sm:col-span-2 sm:mt-0">
                <textarea
                  className="block w-full border-2 rounded-md text-gray-700 h-36"
                  type="text"
                  name="product longDescription"
                  id="product longDescription"
                  minLength="2"
                  maxLength="9000"
                  value={longDescription}
                  onChange={onLongDescriptionChange}
                />
              </div>
            </div>
            {!error.status ? (
              ""
            ) : (
              <div className="sm:flex sm:items-center sm:gap-4 justify-end">
                <label
                  htmlFor="category-name"
                  className="block text-sm font-medium text-red-600"
                >
                  ERROR:
                </label>
                <div className="sm:col-span-2 text-red-600">
                  <h1>{error.message}</h1>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="pt-5">
          <div className="flex justify-end">
            <button
              type="submit"
              className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
