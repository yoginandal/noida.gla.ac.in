import { ExternalLink } from "lucide-react";

export default function StudentCard({ student }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-100 flex flex-col h-full">
      <div className="relative">
        <div className="absolute top-0 right-0 bg-gradient-to-l from-amber-500 to-amber-400 text-white px-3 py-1 rounded-bl-lg font-bold text-sm">
          {student.package} LPA
        </div>
        <div className="h-40 overflow-hidden">
          <img
            src={student.image || "/placeholder.svg"}
            alt={student.name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-bold text-lg text-gray-800 mb-1 line-clamp-1">
          {student.name}
        </h3>

        <div className="flex items-center mt-auto pt-3">
          <img
            src={student.logo || "/placeholder.svg"}
            alt={student.company}
            className="h-6 mr-2"
          />
          <span className="text-gray-600 text-sm font-medium">
            {student.company}
          </span>
        </div>
      </div>

      <div className="bg-gray-50 p-3 border-t border-gray-100">
        <button className="w-full text-sm font-medium text-gray-600 hover:text-gray-900 flex items-center justify-center gap-1 transition-colors">
          <span>View Profile</span>
          <ExternalLink className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
