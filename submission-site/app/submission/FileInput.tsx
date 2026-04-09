"use client";

import { useState, useRef } from "react";

const MAX_SIZE_MB = 2;

export default function FileInput() {
  const [fileName, setFileName] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (!file) return;

    if (file.size / 1024 / 1024 > MAX_SIZE_MB) {
      setError(`File must be ${MAX_SIZE_MB}MB or less.`);
      setFileName(null);
      e.target.value = "";
      inputRef.current?.setCustomValidity(`File must be ${MAX_SIZE_MB}MB or less.`);
      return;
    }

    setError(null);
    setFileName(file.name);
    inputRef.current?.setCustomValidity("");
  }

  return (
    <div className="flex flex-col gap-2">
      <label className={`group flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-lg cursor-pointer transition-colors
        ${error
          ? "border-red-400 bg-red-50 hover:bg-red-100"
          : "border-gray-300 bg-gray-50 hover:bg-gray-100 hover:border-gray-400"
        }`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className={`w-8 h-8 mb-2 ${error ? "text-red-400" : "text-gray-400 group-hover:text-gray-500"}`} viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.479 10.092c-.212-3.951-3.473-7.092-7.479-7.092-4.005 0-7.267 3.141-7.479 7.092-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408zm-7.479-1.092l4 4h-3v4h-2v-4h-3l4-4z"/>
        </svg>
        {fileName
          ? <span className="text-sm font-medium text-gray-700">{fileName}</span>
          : <>
              <span className="text-sm font-medium text-gray-700">Click to upload</span>
              <span className="text-xs text-gray-400 mt-1">PDF or Word, up to {MAX_SIZE_MB}MB</span>
            </>
        }
        <input
          ref={inputRef}
          type="file"
          name="file"
          accept=".pdf,.doc,.docx"
          className="sr-only"
          onChange={handleChange}
        />
      </label>
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
}