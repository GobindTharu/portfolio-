
export function SwitchMode({ checked, onCheckedChange }: { checked: boolean; onCheckedChange: (value: boolean) => void }) {
  return (
    <label className="flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onCheckedChange(e.target.checked)}
        className="sr-only"
      />
      <div
        className={`w-10 h-5 flex items-center bg-gray-600 rounded-full p-1 transition $ {
          checked ? "bg-green-500" : "bg-gray-400"
        }`}
      >
        <div
          className={`bg-white w-4 h-4 rounded-full shadow-md transform transition $ {
            checked ? "translate-x-5" : "translate-x-0"
          }`}
        ></div>
      </div>
    </label>
  );
}

//   const [darkMode, setDarkMode] = useState(true);

        // darkMode ? "bg-black text-white" : "bg-gray-100 text-black";
// 
//           <Switch checked={darkMode} onCheckedChange={setDarkMode} />

