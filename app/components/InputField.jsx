export default function InputField({ placeholder, type, inputValue }) {
  return (
    <input
      className="w-full border border-blue-200 p-2 rounded-lg mb-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
      placeholder={placeholder}
      type={type}
      onChange={(e) => inputValue(e.target.value)}
    />
  );
}