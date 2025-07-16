import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Building, MapPin } from "lucide-react";

const AdvisoryMemberCard = ({ member, listView = false }) => {
  // Use the image from the member object
  const imageUrl = member.image; // This will directly use the path from advisory-board-data.js

  if (listView) {
    return (
      <Card className="overflow-hidden py-0 hover:shadow-md transition-shadow duration-300">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/4 h-52 md:h-auto">
            <img
              src={imageUrl || "/placeholder.svg"} // Fallback to placeholder if no image
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>
          <CardContent className="flex-1">
            <div className="mb-3">
              <h3 className="text-xl font-bold text-slate-800">
                {member.name}
              </h3>
              <p className="text-teal-600 font-medium">{member.designation}</p>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <Building className="h-4 w-4 text-slate-500 shrink-0 mt-1" />
                <p className="text-slate-700 font-medium">
                  {member.organization}
                </p>
              </div>

              {member.address && (
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-slate-500 shrink-0 mt-1" />
                  <p className="text-slate-600">{member.address}</p>
                </div>
              )}

              {member.email && (
                <div className="flex items-start gap-2">
                  <Mail className="h-4 w-4 text-slate-500 shrink-0 mt-1" />
                  <a
                    href={`mailto:${member.email}`}
                    className="text-teal-600 hover:text-teal-700 hover:underline break-all"
                  >
                    {member.email}
                  </a>
                </div>
              )}

              {member.through && (
                <div className="mt-3 pt-3 border-t border-slate-200 text-sm text-slate-500">
                  <span>Referred by: {member.through}</span>
                </div>
              )}
            </div>
          </CardContent>
        </div>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden hover:shadow-md background-gradient-yellow-light py-0 transition-shadow duration-300 h-full flex flex-col">
      <div className="h-64 overflow-hidden">
        <img
          src={imageUrl || "/placeholder.svg"} // Fallback to placeholder if no image
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardContent className="flex-1 p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-slate-800">{member.name}</h3>
          <p className="text-teal-600 font-medium">{member.designation}</p>
        </div>

        <div className="space-y-3 text-sm">
          <div className="flex items-start gap-2">
            <Building className="h-4 w-4 text-slate-500 shrink-0 mt-1" />
            <p className="text-slate-700 font-medium">{member.organization}</p>
          </div>

          {member.email && (
            <div className="flex items-start gap-2">
              <Mail className="h-4 w-4 text-slate-500 shrink-0 mt-1" />
              <a
                href={`mailto:${member.email}`}
                className="text-teal-600 hover:text-teal-700 hover:underline break-all"
              >
                {member.email}
              </a>
            </div>
          )}

          {member.through && (
            <div className="mt-3 pt-3 border-t border-slate-200 text-xs text-slate-500">
              <span>Referred by: {member.through}</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default AdvisoryMemberCard;
