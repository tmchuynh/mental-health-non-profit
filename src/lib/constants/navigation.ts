export const menuData = [
  {
    label: "File",
    items: [
      { type: "item", label: "New Tab" },
      { type: "item", label: "New Window" },
      { type: "item", label: "New Incognito Window" },
      { type: "separator" },
      {
        type: "sub",
        label: "Share",
        items: [
          { type: "item", label: "Email link" },
          { type: "item", label: "Messages" },
          { type: "item", label: "Notes" },
        ],
      },
      { type: "separator" },
      { type: "item", label: "Print..." },
    ],
  },
  {
    label: "Edit",
    items: [
      { type: "item", label: "Undo" },
      { type: "item", label: "Redo" },
      { type: "separator" },
      {
        type: "sub",
        label: "Find",
        items: [
          { type: "item", label: "Search the web" },
          { type: "separator" },
          { type: "item", label: "Find..." },
          { type: "item", label: "Find Next" },
          { type: "item", label: "Find Previous" },
        ],
      },
      { type: "separator" },
      { type: "item", label: "Cut" },
      { type: "item", label: "Copy" },
      { type: "item", label: "Paste" },
    ],
  },
  {
    label: "View",
    items: [
      { type: "item", label: "Reload" },
      {
        type: "item",
        label: "Force Reload",
      },
      { type: "separator" },
      { type: "item", label: "Toggle Fullscreen" },
      { type: "separator" },
      { type: "item", label: "Hide Sidebar" },
    ],
  },
  {
    label: "Profiles",
    items: [
      { type: "item", label: "Edit..." },
      { type: "separator" },
      { type: "item", label: "Add Profile..." },
    ],
  },
];
