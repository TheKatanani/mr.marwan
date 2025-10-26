const LocalizedList = ({
  label,
  value,
  onChange,
}: {
  label: string;
  value: { en: string; ar: string }[];
  onChange: (val: { en: string; ar: string }[]) => void;
}) => {
  const updateItem = (index: number, lang: "en" | "ar", val: string) => {
    const updated = [...value];
    updated[index][lang] = val;
    onChange(updated);
  };
  const addItem = () => onChange([...value, { en: "", ar: "" }]);
  const removeItem = (index: number) => {
    const updated = [...value];
    updated.splice(index, 1);
    onChange(updated);
  };
  return (
    <div>
      <h3 className="font-semibold mb-2">{label}</h3>
      {value.map((item, index) => (
        <div key={index} className="flex gap-2 mb-2">
          <input
            className="w-1/2 border px-2 py-1"
            placeholder="EN"
            value={item.en}
            onChange={(e) => updateItem(index, "en", e.target.value)}
          />
          <input
            className="w-1/2 border px-2 py-1"
            placeholder="AR"
            value={item.ar}
            onChange={(e) => updateItem(index, "ar", e.target.value)}
          />
          <button onClick={() => removeItem(index)} className="text-red-600">X</button>
        </div>
      ))}
      <button onClick={addItem} className="text-blue-600 text-sm mt-1">
        + Add Item
      </button>
    </div>
  );
};
export default LocalizedList;