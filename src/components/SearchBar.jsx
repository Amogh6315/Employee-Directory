export default function SearchBar({ onSearch }) {
  return (
    <div className="p-4 bg-white shadow-sm flex items-center">
      <input
        type="text"
        placeholder="Search by name or department..."
        className="border rounded-lg px-4 py-2 w-full"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}
