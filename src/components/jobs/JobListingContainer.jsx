"use client";

import React, { useState, useEffect } from "react";
import JobFilters from "@/components/jobs/JobFilters";
import { useRouter } from "next/navigation";
import { Pagination } from "@heroui/react";
import JobCard from "./jobCard";

export default function JobListingContainer({ jobs, filters, total }) {
  const [searchQuery, setSearchQuery] = useState(filters.search || "");
  const [selectedType, setSelectedType] = useState(filters.jobType || "all");
  const [selectedCategory, setSelectedCategory] = useState(filters.jobCategory || "all");
  const [isRemoteOnly, setIsRemoteOnly] = useState(filters.isRemote === true || false);
  const [page, setPage] = useState(filters.page || 1);

  const router = useRouter();

  const totalItems = total;
  const itemsPerPage = 12;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const getPageNumbers = () => {
    const pages = [];
    pages.push(1);
    if (page > 3) pages.push("ellipsis");
    const start = Math.max(2, page - 1);
    const end = Math.min(totalPages - 1, page + 1);
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    if (page < totalPages - 2) pages.push("ellipsis");
    pages.push(totalPages);
    return pages;
  };

  const startItem = (page - 1) * itemsPerPage + 1;
  const endItem = Math.min(page * itemsPerPage, totalItems);

  useEffect(() => {
    const sp = new URLSearchParams();
    if (searchQuery) sp.set("search", searchQuery);
    if (selectedType !== "all") sp.set("jobType", selectedType);
    if (selectedCategory !== "all") sp.set("jobCategory", selectedCategory);
    if (isRemoteOnly) sp.set("isRemote", true);
    if (page) sp.set("page", page);

    router.push(`?${sp.toString()}`);
  }, [router, searchQuery, selectedType, selectedCategory, isRemoteOnly, page]);

  return (
    <>
      <JobFilters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        isRemoteOnly={isRemoteOnly}
        setIsRemoteOnly={setIsRemoteOnly}
      />

      <div className="max-w-7xl mx-auto mb-6 text-sm text-zinc-500">
        Showing {jobs.length} position{jobs.length !== 1 && "s"}
      </div>

      {jobs.length > 0 ? (
        <>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {jobs.map((jobItem) => (
              <JobCard
                // Using a prefixed unique string to prevent collision with pagination or other components
                key={`job-${jobItem._id?.$oid || jobItem._id || Math.random()}`}
                job={jobItem}
              />
            ))}
          </div>
          
          <Pagination className="w-full">
            <Pagination.Summary>
              Showing {startItem}-{endItem} of {totalItems} results
            </Pagination.Summary>
            <Pagination.Content>
              <Pagination.Item>
                <Pagination.Previous isDisabled={page === 1} onPress={() => setPage((p) => p - 1)}>
                  <Pagination.PreviousIcon />
                  <span>Previous</span>
                </Pagination.Previous>
              </Pagination.Item>
              
              {/* {getPageNumbers().map((p, i) =>
                p === "ellipsis" ? (
                  <Pagination.Item key={`ellipsis-${i}`}>
                    <Pagination.Ellipsis />
                  </Pagination.Item>
                ) : (
                  // Prefixed key here ensures no collision with Job IDs
                  <Pagination.Item key={`page-item-${p}`}>
                    <Pagination.Link isActive={p === page} onPress={() => setPage(p)}>
                      {p}
                    </Pagination.Link>
                  </Pagination.Item>
                )
              )} */}

              {getPageNumbers().map((p, i) =>
  p === "ellipsis" ? (
    <Pagination.Item key={`ellipsis-${i}`}>
      <Pagination.Ellipsis />
    </Pagination.Item>
  ) : (
    // By adding the index 'i' to the key, you guarantee uniqueness 
    // even if the page number 'p' repeats.
    <Pagination.Item key={`pagination-btn-${p}-${i}`}>
      <Pagination.Link isActive={p === page} onPress={() => setPage(p)}>
        {p}
      </Pagination.Link>
    </Pagination.Item>
  )
)}

              
              <Pagination.Item>
                <Pagination.Next isDisabled={page === totalPages} onPress={() => setPage((p) => p + 1)}>
                  <span>Next</span>
                  <Pagination.NextIcon />
                </Pagination.Next>
              </Pagination.Item>
            </Pagination.Content>
          </Pagination>
        </>
      ) : (
        <div className="text-center py-20 border border-dashed border-zinc-800 rounded-[32px] max-w-7xl mx-auto">
          <p className="text-zinc-500 text-lg">No positions match your search criteria.</p>
        </div>
      )}
    </>
  );
}