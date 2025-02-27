import {
  SearchBar as AntdSearchBar,
  type SearchBarProps as AntdSearchBarProps,
  type SearchBarRef as AntdSearchBarRef,
} from "antd-mobile";
import { forwardRef } from "react";

export interface SearchBarProps extends AntdSearchBarProps {
  /** An optional prop */
  optional?: string;
}

export type SearchBarRef = AntdSearchBarRef;

export const SearchBar = forwardRef<SearchBarRef, SearchBarProps>(
  (props, ref) => {
    return <AntdSearchBar ref={ref} {...props} />;
  }
);
