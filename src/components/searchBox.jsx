import SearchIcon from "@mui/icons-material/Search";
const SearchBox = () => {
  return (
    <div className=" rounded-full border flex items-center border-slate-300 shadow-lg pl-3 w-40 h-10">
      <SearchIcon className="flex1 cursor-pointer" onClick={{}}/>

      <input type="text" name="" id="" className="w-3/4 bg-inherit overflow-hidden" placeholder="جستجو کنید..." />
 
    </div>
  );
};

export default SearchBox;
