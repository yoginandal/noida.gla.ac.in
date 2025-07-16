"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import AdvisoryMemberCard from "@/Pages/About/AdvisoryMemberCard";
import advisoryBoardData from "@/lib/advisory-board-data";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Banner from "@/components/main/Banner";
import GridBackground from "@/components/ui/GridBackground";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function AdvisoryBoard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [view, setView] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  const breadcrumbItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { label: "Advisory Board" },
  ];

  const filteredMembers = advisoryBoardData.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.organization.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredMembers.length / itemsPerPage);
  const paginatedMembers = filteredMembers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <Banner
        title="Advisory Board"
        image="/about/about-us.jpg"
        imageAlt="Advisory Board"
        breadcrumbItems={breadcrumbItems}
      />

      <GridBackground>
        <section className="container mx-auto px-4 pb-20 pt-32">
          <div className="w-full max-w-7xl mx-auto">
            <div className="flex justify-center mb-12">
              <div className="relative z-10 w-full max-w-[320px] sm:max-w-3xl flex items-center bg-white/20 backdrop-blur-sm rounded-lg p-1 shadow-lg border border-gray-200">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-full p-4">
                  <div className="relative w-full md:w-96">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                    <Input
                      type="text"
                      placeholder="Search by name or organization..."
                      className="pl-10 border-slate-300 focus:border-teal-500 focus:ring-teal-500"
                      value={searchTerm}
                      onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setCurrentPage(1);
                      }}
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant={view === "grid" ? "default" : "outline"}
                      onClick={() => setView("grid")}
                      className={
                        view === "grid"
                          ? "bg-cusSecondary hover:bg-cusSecondary/90 text-black"
                          : ""
                      }
                    >
                      Grid View
                    </Button>
                    <Button
                      variant={view === "list" ? "default" : "outline"}
                      onClick={() => setView("list")}
                      className={
                        view === "list"
                          ? "bg-cusSecondary hover:bg-cusSecondary/90 text-black"
                          : ""
                      }
                    >
                      List View
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 focus-visible:outline-none animate-in fade-in-50 slide-in-from-bottom-5 duration-500">
              {view === "grid" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {paginatedMembers.map((member) => (
                    <AdvisoryMemberCard key={member.id} member={member} />
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {paginatedMembers.map((member) => (
                    <AdvisoryMemberCard
                      key={member.id}
                      member={member}
                      listView
                    />
                  ))}
                </div>
              )}

              {filteredMembers.length === 0 && (
                <div className="text-center py-16 bg-white rounded-xl shadow-sm">
                  <p className="text-slate-500 text-lg">
                    No members found matching your search criteria.
                  </p>
                </div>
              )}
            </div>

            {/* Pagination Controls */}
            {filteredMembers.length > itemsPerPage && (
              <div className="flex justify-center mt-10">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        onClick={() => handlePageChange(currentPage - 1)}
                        className={
                          currentPage === 1
                            ? "pointer-events-none opacity-50"
                            : ""
                        }
                      />
                    </PaginationItem>
                    {Array.from({ length: totalPages }, (_, i) => (
                      <PaginationItem key={i + 1}>
                        <PaginationLink
                          isActive={currentPage === i + 1}
                          onClick={() => handlePageChange(i + 1)}
                          className={
                            currentPage === i + 1
                              ? "bg-cusSecondary text-black hover:bg-cusSecondary/90"
                              : ""
                          }
                        >
                          {i + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    <PaginationItem>
                      <PaginationNext
                        onClick={() => handlePageChange(currentPage + 1)}
                        className={
                          currentPage === totalPages
                            ? "pointer-events-none opacity-50"
                            : ""
                        }
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </div>
        </section>
      </GridBackground>
    </>
  );
}
