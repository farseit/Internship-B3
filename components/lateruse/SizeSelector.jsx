import { useProductContext } from "@/context/admin/ProductContext";

const SizeSelector = () => {
  const { selectedSizes, setSelectedSizes } = useProductContext();

  const toggleSize = (size) => {
    setSelectedSizes(
      (prevSizes) =>
        prevSizes.includes(size)
          ? prevSizes.filter((s) => s !== size) // Remove size if already selected
          : [...prevSizes, size] // Add size if not selected
    );
  };

  const sizes = [
    { id: 1, name: "S" },
    { id: 2, name: "M" },
    { id: 3, name: "L" },
    { id: 4, name: "XL" },
    { id: 5, name: "XXL" },
  ];
  return (
    <div className="flex justify-between gap-2 pr-10">
      {sizes.map((size) => (
        <button
          key={size.id}
          onClick={() => toggleSize(size.id)}
          className={`px-3 py-1 rounded-md font-bold ${
            selectedSizes.includes(size.id)
              ? "bg-green-400 text-black"
              : "bg-gray-100 text-gray-700"
          } transition`}
        >
          {size.name}
        </button>
      ))}
    </div>
  );
};

export default SizeSelector;
