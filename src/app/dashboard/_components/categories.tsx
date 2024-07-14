import React from "react";
import { CategoryItem } from "./category-item";

export interface CategoryProps {
  name: string;
  value: string;
}

export const Categories = ({ items }: { items: CategoryProps[] }) => {
  return (
    <div className="flex gap-2 flex-wrap">
      {items.map((category) => (
        <CategoryItem
          key={category.name}
          name={category.name}
          value={category.value}
        ></CategoryItem>
      ))}
    </div>
  );
};
