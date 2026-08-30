import { Suspense } from "react";
import SearchResults from "@/components/SearchResults";

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center text-gray-400">Loading...</div>}>
      <SearchResults />
    </Suspense>
  );
}
