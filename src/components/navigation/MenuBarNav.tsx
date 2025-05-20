import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { menuData } from "@/lib/constants/navigation";
import { ThemeToggle } from "../buttons/ThemeToggle";

function renderMenuItems(items: any[]) {
  return items.map((item, idx) => {
    if (item.type === "separator") return <MenubarSeparator key={idx} />;
    if (item.type === "checkbox")
      return (
        <MenubarCheckboxItem key={idx} checked={item.checked}>
          {item.label}
        </MenubarCheckboxItem>
      );
    if (item.type === "sub")
      return (
        <MenubarSub key={idx}>
          <MenubarSubTrigger>{item.label}</MenubarSubTrigger>
          <MenubarSubContent>{renderMenuItems(item.items)}</MenubarSubContent>
        </MenubarSub>
      );
    // Default: regular item
    return (
      <MenubarItem key={idx} disabled={item.disabled} inset={item.inset}>
        {item.label}
        {item.shortcut && <MenubarShortcut>{item.shortcut}</MenubarShortcut>}
      </MenubarItem>
    );
  });
}

export function MenuBarNav() {
  return (
    <Menubar className="flex justify-between items-center my-7 w-full">
      <div className="flex gap-2">
        {menuData.map((menu, idx) => (
          <MenubarMenu key={idx}>
            <MenubarTrigger>{menu.label}</MenubarTrigger>
            <MenubarContent>{renderMenuItems(menu.items)}</MenubarContent>
          </MenubarMenu>
        ))}
      </div>
      <ThemeToggle />
    </Menubar>
  );
}
