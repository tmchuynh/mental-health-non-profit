"use client";

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
import useSmallScreen from "@/hooks/useSmallScreen";
import { menuData, menuDataMobile } from "@/lib/constants/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";
import { ThemeToggle } from "../buttons/ThemeToggle";

function renderMenuItems(
  items: any[],
  router: any[] | AppRouterInstance,
  isSmallScreen: boolean
) {
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
          <MenubarSubContent
            className={
              isSmallScreen
                ? "flex flex-col min-w-[180px] absolute top-10 right-18"
                : undefined
            }
          >
            {renderMenuItems(item.items, router, isSmallScreen)}
          </MenubarSubContent>
        </MenubarSub>
      );
    // Default: regular item
    return (
      <MenubarItem
        key={idx}
        disabled={item.disabled}
        inset={item.inset}
        onClick={() => router.push(item.href)}
      >
        {item.label}
        {item.shortcut && <MenubarShortcut>{item.shortcut}</MenubarShortcut>}
      </MenubarItem>
    );
  });
}

export function MenuBarNav() {
  const router = useRouter();
  const isSmallScreen = useSmallScreen();

  // Helper to render a menu entry (page or dropdown)
  function renderMenu(menu: any, idx: number) {
    if (menu.type === "page") {
      return (
        <MenubarMenu key={menu.label}>
          <MenubarTrigger onClick={() => router.push(menu.href)}>
            {menu.label}
          </MenubarTrigger>
        </MenubarMenu>
      );
    }
    // Dropdown menu
    return (
      <MenubarMenu key={menu.label || idx}>
        <MenubarTrigger>{menu.label}</MenubarTrigger>
        <MenubarContent>
          {renderMenuItems(menu.items || [], router, isSmallScreen)}
        </MenubarContent>
      </MenubarMenu>
    );
  }

  const menus = isSmallScreen ? menuDataMobile : menuData;

  return (
    <Menubar className="relative flex justify-between items-center mx-auto my-4 w-10/12 md:w-11/12">
      <div className="flex gap-2">{menus.map(renderMenu)}</div>
      <ThemeToggle />
    </Menubar>
  );
}
