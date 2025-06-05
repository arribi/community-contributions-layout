"use client"

import type React from "react"

import { useState } from "react"
import { AlertCircle } from "lucide-react"

export function AddLinkForm() {
  const [category, setCategory] = useState("")
  const [title, setTitle] = useState("")
  const [url, setUrl] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log({ category, title, url })

    // Reset form
    setCategory("")
    setTitle("")
    setUrl("")
  }

  return (
    <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
      <div className="bg-gray-100 px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-medium text-gray-800">Add a Link</h2>
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-4">
        {/* Category Select */}
        <div>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            required
          >
            <option value="" disabled>
              Pick a Category...
            </option>
            <option value="laravel">Laravel</option>
            <option value="vue">Vue</option>
            <option value="testing">Testing</option>
            <option value="guides">Guides</option>
          </select>
        </div>

        {/* Title Input */}
        <div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Article Title"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            required
          />
        </div>

        {/* URL Input */}
        <div>
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="URL (https://...)"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
        >
          Submit Contribution
        </button>
      </form>

      {/* Warning Note */}
      <div className="px-6 py-4 bg-red-50 border-t border-red-100">
        <div className="flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-medium text-red-600">Hey, Real Quick:</p>
            <p className="text-sm text-red-600 mt-1">
              Please only submit links that are relevant to web development and would be valuable to the community.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
