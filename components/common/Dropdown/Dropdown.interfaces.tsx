export interface SelectorItem {
  val: string;
  label: string;
}

export interface DropdownProps {
  items: SelectorItem[];
  defaultVal?: string;
  label?: string;
  color?: string;
}
