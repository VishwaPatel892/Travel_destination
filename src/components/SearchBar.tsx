"use client";

import { useState } from "react";

interface SearchBarProps {
  onSearch: (value: string) => void;
}

export default function SearchBar({
  onSearch,
}: SearchBarProps) {
  const [value, setValue] = useState("");

  return (
    <div className="flex gap-3">

      <input
        type="text"
        value={value}
        onChange={(event) => {
          const newValue = event.target.value;

          setValue(newValue);
          onSearch(newValue);
        }}
        placeholder="Search destinations..."
        className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-500"
      />

    </div>
  );
}