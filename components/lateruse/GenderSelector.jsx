import { useProductContext } from "@/context/admin/ProductContext";

const GenderSelector = () => {
  const { selectedGender, setSelectedGender } = useProductContext();

  const handleRadioChange = (event) => {
    setSelectedGender(event.target.value);
  };

  return (
    <div className="flex justify-between p-1 font-bold">
      <div className="flex gap-2">
        <input
          type="radio"
          name="gender"
          value="Men"
          checked={selectedGender === "Men"}
          onChange={handleRadioChange}
          className="w-6 h-6  accent-primary"
        />
        <label htmlFor="Men">Men</label>
      </div>
      <div className="flex gap-2">
        <input
          type="radio"
          name="gender"
          value="Woman"
          checked={selectedGender === "Woman"}
          onChange={handleRadioChange}
          className="w-6 h-6 accent-primary"
        />
        <label htmlFor="Woman">Woman</label>
      </div>
      <div className="flex gap-2">
        <input
          type="radio"
          name="gender"
          value="Unisex"
          checked={selectedGender === "Unisex"}
          onChange={handleRadioChange}
          className="w-6 h-6 accent-primary"
        />
        <label htmlFor="Unisex">Unisex</label>
      </div>
    </div>
  );
};

export default GenderSelector;
