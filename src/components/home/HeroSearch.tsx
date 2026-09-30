import { SearchBar } from "@components/common/SearchBar";

export function HeroSearch() {
  return (
    <div className="w-full">
      <SearchBar
        size="lg"
        placeholder="What do you need? Try 'JPG to PNG' or 'PDF merge'..."
      />
    </div>
  );
}