import React from "react";

import { RichTextBlock } from "@/types/common";

interface RichTextRendererProps {
  content: RichTextBlock[];
  classNames?: string;
  classNamesContainer?: string;
}

export const RichTextRenderer = ({
  content,
  classNames,
  classNamesContainer,
}: RichTextRendererProps) => {
  return (
    <div className={classNamesContainer}>
      {content.map((paragraph, index) => (
        <p key={index} className={classNames}>
          {paragraph.children.map((child, childIndex) => {
            const { text, bold, italic } = child;

            if (italic && bold) {
              return (
                <span className="font-bold italic" key={childIndex}>
                  {text}
                </span>
              );
            }

            if (italic) {
              return (
                <span className="italic" key={childIndex}>
                  {text}
                </span>
              );
            }

            if (bold) {
              return (
                <span className="font-bold" key={childIndex}>
                  {text}
                </span>
              );
            }
            return text;
          })}
        </p>
      ))}
    </div>
  );
};
