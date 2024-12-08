"use client";
import { ReactNode, Fragment } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

type BreadcrumbProps = {
  homeElement: ReactNode;
  separator: ReactNode;
  containerClasses?: string;
  listClasses?: string;
  activeClasses?: string;
  capitalizeLinks?: boolean;
};

export default function Breadcrumb({
  homeElement,
  separator,
  containerClasses,
  listClasses,
  activeClasses,
  capitalizeLinks,
}: BreadcrumbProps) {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);

  // Utility function to format the text for each breadcrumb
  const formatText = (text: string) => {
    return text
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <ul className={containerClasses}>
      <li className={listClasses}>
        <Link href={"/"}>{homeElement}</Link>
      </li>
      {pathNames.length > 0 && separator}
      {pathNames.map((link, index) => {
        const href = `/${pathNames.slice(0, index + 1).join("/")}`;
        const itemClasses =
          paths === href ? `${listClasses} ${activeClasses}` : listClasses;

        const formattedLink = capitalizeLinks
          ? formatText(link)
          : link.replace(/-/g, " ");

        return (
          <Fragment key={index}>
            <li className={itemClasses}>
              <Link href={href}>{formattedLink}</Link>
            </li>
            {pathNames.length !== index + 1 && separator}
          </Fragment>
        );
      })}
    </ul>
  );
}
