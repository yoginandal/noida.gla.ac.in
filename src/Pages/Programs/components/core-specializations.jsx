import {
  Briefcase,
  Users,
  BarChart2,
  Globe,
  Settings,
  Banknote,
  PieChart,
  Truck,
} from "lucide-react";

const specializations = [
  {
    title: "Marketing",
    icon: <BarChart2 className="h-8 w-8 text-cusAccent" />,
  },
  {
    title: "Human Resource Management",
    icon: <Users className="h-8 w-8 text-cusAccent" />,
  },
  {
    title: "Financial Management",
    icon: <Banknote className="h-8 w-8 text-cusAccent" />,
  },
  {
    title: "International Business Management",
    icon: <Globe className="h-8 w-8 text-cusAccent" />,
  },
  {
    title: "Operations Management",
    icon: <Settings className="h-8 w-8 text-cusAccent" />,
  },
  {
    title: "Banking & Financial Services",
    icon: <Briefcase className="h-8 w-8 text-cusAccent" />,
  },
  {
    title: "Business Analytics",
    icon: <PieChart className="h-8 w-8 text-cusAccent" />,
  },
  {
    title: "Supply Chain Management",
    icon: <Truck className="h-8 w-8 text-cusAccent" />,
  },
];

export default function CoreSpecializations() {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, black 1px, transparent 1px), linear-gradient(black 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="card mx-auto px-4 relative max-w-7xl z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-cusText mb-2">
            Core Specializations
          </h2>
          <p className="text-lg text-gray-600 max-w-5xl mx-auto">
            The programme is not just about academic learning. It's about
            preparing you for the real world. You'll have access to internships,
            company visits, guest lectures from industry leaders, and live
            projects that give you direct exposure to the business world. This
            ensures that by the time you graduate, you'll be ready to step into
            leadership roles in a wide range of industries.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {specializations.map((spec) => (
            <div
              key={spec.title}
              className="background-gradient-white rounded-xl shadow p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-4">{spec.icon}</div>
              <div className="font-semibold text-lg text-cusText mb-1">
                {spec.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
