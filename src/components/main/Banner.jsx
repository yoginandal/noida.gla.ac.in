"use client";
import { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { useMediaQuery } from "@/hooks/use-media-query";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Ellipsis, ChevronRightIcon } from "lucide-react";
import WordPullUp from "@/components/ui/word-pull-up";
import React from "react";

const ITEMS_TO_DISPLAY = 3;

const Banner = ({ title, image, breadcrumbItems = [], imageAlt }) => {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <div className="relative flex items-end justify-center h-[50vh] sm:h-[70vh]">
      <img
        src={image}
        alt={imageAlt || "Banner"}
        className="absolute top-0 left-0 object-cover w-full h-full shadow-sm -z-10"
        width={1920}
        height={1080}
        fetchPriority="high"
        decoding="async"
        loading="eager"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/50 p-6">
        <div className="p-5 bg-black/50 rounded-md text-center">
          <WordPullUp
            words={title}
            className="text-2xl sm:text-6xl text-white font-extrabold tracking-wide leading-tight sm:leading-none"
          />
        </div>
      </div>

      {breadcrumbItems.length > 0 && (
        <Breadcrumb className="relative z-10 -mb-8 transition-all duration-300 ease-in-out hover:drop-shadow-2xl drop-shadow-xl hover:scale-105">
          <BreadcrumbList className="px-8 py-4 bg-cusGreen rounded-full">
            {isDesktop ? (
              // Desktop view: show all breadcrumbs
              breadcrumbItems.map((item, index) => (
                <React.Fragment key={index}>
                  <BreadcrumbItem>
                    {item.href ? (
                      <BreadcrumbLink asChild className="">
                        <Link
                          href={item.href}
                          className="text-lg font-semibold text-white transition-colors duration-100 ease-in-out hover:text-slate-100"
                        >
                          {item.label}
                        </Link>
                      </BreadcrumbLink>
                    ) : (
                      <BreadcrumbPage className="text-lg font-semibold text-slate-200">
                        {item.label}
                      </BreadcrumbPage>
                    )}
                  </BreadcrumbItem>
                  {index < breadcrumbItems.length - 1 && (
                    <BreadcrumbSeparator className="[&>svg]:w-5 [&>svg]:h-5 mt-1 text-white flex items-center justify-end">
                      <ChevronRightIcon className="stroke-[3] w-full h-full" />
                    </BreadcrumbSeparator>
                  )}
                </React.Fragment>
              ))
            ) : (
              // Mobile view: show first, ellipsis, and last two
              <>
                {breadcrumbItems.length > 0 && (
                  <>
                    <BreadcrumbItem className="text-white mobile-breadcrumb-item">
                      <BreadcrumbLink asChild className="text-white">
                        <Link
                          href={breadcrumbItems[0].href}
                          className="font-semibold text-white transition-colors duration-100 ease-in-out hover:text-slate-100"
                        >
                          {breadcrumbItems[0].label}
                        </Link>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    {breadcrumbItems.length > 1 && <BreadcrumbSeparator />}
                  </>
                )}
                {breadcrumbItems.length > ITEMS_TO_DISPLAY && (
                  <>
                    <BreadcrumbItem>
                      <Drawer open={open} onOpenChange={setOpen}>
                        <DrawerTrigger aria-label="Toggle Menu">
                          <Ellipsis className="w-4 h-4" />
                        </DrawerTrigger>
                        <DrawerContent>
                          <DrawerHeader className="text-left">
                            <DrawerTitle>Navigate to</DrawerTitle>
                            <DrawerDescription>
                              Select a page to navigate to.
                            </DrawerDescription>
                          </DrawerHeader>
                          <div className="grid gap-1 px-4">
                            {breadcrumbItems.slice(1, -2).map((item, index) => (
                              <Link
                                key={index}
                                href={item.href ? item.href : "#"}
                                className="py-1 text-sm text-white"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                          <DrawerFooter className="pt-4">
                            <DrawerClose asChild>
                              <Button variant="outline">Close</Button>
                            </DrawerClose>
                          </DrawerFooter>
                        </DrawerContent>
                      </Drawer>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                  </>
                )}
                {breadcrumbItems.slice(-2).map((item, index) => (
                  <React.Fragment key={index}>
                    <BreadcrumbItem className="text-white">
                      {item.href ? (
                        <BreadcrumbLink
                          asChild
                          className="truncate max-w-20 md:max-w-none text-white"
                        >
                          <Link href={item.href}>{item.label}</Link>
                        </BreadcrumbLink>
                      ) : (
                        <BreadcrumbPage className="truncate max-w-20 md:max-w-none text-white">
                          {item.label}
                        </BreadcrumbPage>
                      )}
                    </BreadcrumbItem>
                    {index < breadcrumbItems.slice(-2).length - 1 && (
                      <BreadcrumbSeparator />
                    )}
                  </React.Fragment>
                ))}
              </>
            )}
          </BreadcrumbList>
        </Breadcrumb>
      )}
    </div>
  );
};

export default Banner;
