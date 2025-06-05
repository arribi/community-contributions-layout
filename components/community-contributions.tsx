"use client"

import { useState } from "react"
import { ContributionCard } from "./contribution-card"
import { AddLinkForm } from "./add-link-form"

// Sample data for contributions
const contributions = [
  {
    id: 1,
    title: "Building a Full-Stack Application with Laravel and Vue 3",
    author: "jane_doe",
    timeAgo: "2 hours ago",
    votes: 42,
    tag: "VUE",
    tagColor: "bg-green-500",
  },
  {
    id: 2,
    title: "Testing Laravel Applications: A Comprehensive Guide",
    author: "john_smith",
    timeAgo: "5 hours ago",
    votes: 38,
    tag: "TESTING",
    tagColor: "bg-purple-500",
  },
  {
    id: 3,
    title: "Mastering Eloquent Relationships in Laravel",
    author: "dev_guru",
    timeAgo: "1 day ago",
    votes: 27,
    tag: "LARAVEL",
    tagColor: "bg-red-500",
  },
  {
    id: 4,
    title: "Creating Custom Blade Components in Laravel 10",
    author: "web_wizard",
    timeAgo: "2 days ago",
    votes: 19,
    tag: "LARAVEL",
    tagColor: "bg-red-500",
  },
  {
    id: 5,
    title: "A Guide to Vue 3 Composition API",
    author: "vue_master",
    timeAgo: "3 days ago",
    votes: 31,
    tag: "VUE",
    tagColor: "bg-green-500",
  },
  {
    id: 6,
    title: "Best Practices for API Development with Laravel",
    author: "api_expert",
    timeAgo: "4 days ago",
    votes: 24,
    tag: "GUIDES",
    tagColor: "bg-blue-500",
  },
]

export function CommunityContributions() {
  const [activeTab, setActiveTab] = useState<"recent" | "popular">("recent")

  // Filter contributions based on active tab
  const filteredContributions =
    activeTab === "recent"
      ? [...contributions].sort((a, b) => a.id - b.id)
      : [...contributions].sort((a, b) => b.votes - a.votes)

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Main Content Column (70%) */}
      <div className="w-full lg:w-[70%]">
        <h1 className="text-3xl font-bold text-gray-800">Community Contributions</h1>
        <p className="text-gray-600 mt-2 mb-6">
          There&apos;s a big world beyond Laracasts. Here&apos;s what your peers are writing about.
        </p>

        {/* Tab Navigation */}
        <div className="bg-gray-800 rounded-lg mb-6">
          <div className="flex">
            <button
              onClick={() => setActiveTab("recent")}
              className={`px-6 py-3 text-sm font-medium rounded-tl-lg ${
                activeTab === "recent" ? "bg-green-500 text-white" : "text-gray-300 hover:text-white"
              }`}
            >
              Most Recent
            </button>
            <button
              onClick={() => setActiveTab("popular")}
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === "popular" ? "bg-green-500 text-white" : "text-gray-300 hover:text-white"
              }`}
            >
              Most Popular
            </button>
          </div>
        </div>

        {/* Contribution Cards */}
        <div className="space-y-4">
          {filteredContributions.map((contribution) => (
            <ContributionCard key={contribution.id} contribution={contribution} />
          ))}
        </div>
      </div>

      {/* Sidebar Column (30%) */}
      <div className="w-full lg:w-[30%]">
        <AddLinkForm />
      </div>
    </div>
  )
}
