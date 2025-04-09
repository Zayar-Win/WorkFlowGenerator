"use client";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import React, { Fragment } from "react";
import MobileSidebar from "./MobileSidebar";

const BreadcrumbHeader = () => {
  const pathName = usePathname();
  const paths = pathName == "/" ? [""] : pathName.split("/");
  return (
    <div className="flex items-center flex-start">
      <MobileSidebar />
      <Breadcrumb>
        <BreadcrumbList>
          {paths.map((path, index) => {
            return (
              <Fragment key={index}>
                <BreadcrumbItem>
                  <BreadcrumbLink href={`/${path}`}>
                    <BreadcrumbPage>
                      {path == "" ? "Dashboard" : path}
                    </BreadcrumbPage>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {index == paths.length - 1 ? "" : <BreadcrumbSeparator />}
              </Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default BreadcrumbHeader;
