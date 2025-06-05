import { ThumbsUp } from "lucide-react"

interface ContributionCardProps {
  contribution: {
    id: number
    title: string
    author: string
    timeAgo: string
    votes: number
    tag: string
    tagColor: string
  }
}

export function ContributionCard({ contribution }: ContributionCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 flex items-start gap-4 hover:shadow-md transition-shadow">
      {/* Vote Box */}
      <div className="flex flex-col items-center min-w-[60px]">
        <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
          <ThumbsUp className="h-5 w-5 text-gray-500" />
        </button>
        <span className="font-medium text-gray-700">{contribution.votes}</span>
      </div>

      {/* Content */}
      <div className="flex-1">
        <a href="#" className="text-lg font-medium text-gray-900 hover:text-green-600 transition-colors">
          {contribution.title}
        </a>
        <p className="text-sm text-gray-500 mt-1">
          Contributed by <span className="text-green-600">{contribution.author}</span> {contribution.timeAgo}
        </p>
      </div>

      {/* Tag */}
      <div className={`${contribution.tagColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>
        {contribution.tag}
      </div>
    </div>
  )
}
