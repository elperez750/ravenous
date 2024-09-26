import SearchBar from "@/app/components/SearchBar";
export default function DefaultView() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 p-4">
      <div className="flex flex-col items-center justify-center text-center mb-8">
        <h1 className="text-4xl sm:text-5xl text-white font-bold mb-4 drop-shadow-lg">
          Welcome to the Ravenous Search App
        </h1>
        <p className="text-xl sm:text-2xl text-blue-100 mb-8 max-w-2xl">
          Use the search bar to find businesses in your area
        </p>
      </div>

      <div className="w-full max-w-4xl">
        <SearchBar />
      </div>
    </div>
  );
}