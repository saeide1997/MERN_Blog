import { useRef } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { Link } from "react-router-dom";

const WritePage = () => {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click(); // با کلیک دکمه، ورودی فایل باز می‌شود
  };

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["bold", "italic", "underline"],
      [{ align: [] }],
      ["link"],
      ["image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "font",
    "list",
    "bold",
    "italic",
    "underline",
    "align",
    "link",
    "image",
  ];
  return (
    <div className=" flex flex-col px-4 sm:px-4 md:px-8 lg:px-15 xl:px-40 2xl:px-64">
      <h1 className="text-2xl text-gray-700 py-6">منتظر پست جدیدتیم...</h1>
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept="image/*" // فقط فایل‌های تصویری را اجازه می‌دهد
      />
      <button
        onClick={handleButtonClick}
        className="bg-purple-50 w-max text-gray-800 p-3 rounded-xl mb-4 shadowbox hover:shadow-lg"
      >
        عکس کاور تو انتخاب کن
      </button>{" "}
      <input
        className="bg-inherit text-2xl h-16 mb-4 "
        placeholder="موضوعتو بنویس..."
        type="text"
        name=""
        id=""
      />
      <div className="flex items-center mb-4">
        <span className="text-gray-900"> کدوم دسته‌بندی؟</span>
        <select
          className="bg-purple-50 px-2 py-1 shadowbox rounded-lg mx-3 flex items-center hover:shadow-lg"
          defaultValue={0}
        >
          <option value="0">عمومی</option>
        </select>
      </div>
      <textarea
        name=""
        id=""
        rows={4}
        className="bg-purple-50 mb-4 p-2"
        placeholder="یه خلاصه ای از مقالت بنویس . . . ."
      ></textarea>
      <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        placeholder="متن خود را وارد کنید..."
      />
      <button className="bg-blue-800 w-28 shadowbox hover:shadow-lg rounded-lg my-4 text-white p-2">
        <Link>منتشرش کن</Link>
      </button>
    </div>
  );
};

export default WritePage;
