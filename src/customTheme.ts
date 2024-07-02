// customTheme.ts
import { CustomFlowbiteTheme } from 'flowbite-react';

const customTheme: CustomFlowbiteTheme = {
  tabs: {
    "base": "",
    "tablist": {
      "base": "grid grid-cols-4 mt-2",
      "tabitem": {
        "base": "flex items-center gap-1 justify-center md:text-lg text-xs md:p-2 p-1",
        "variant": {
          "default": {
            "base": "",
            "active": {
              "on": "bg-gray-100 text-cyan-600 rounded-xl",
              "off": "text-gray-500 hover:bg-gray-200 hover:text-cyan-400 rounded-xl"
            }
          },
        },
        "icon": "h-5 w-5"
      }
    },
  },
  card: {
    "root": {
      "base": "flex rounded-lg border border-gray-200 bg-white shadow-md",
      "children": "flex h-full flex-col justify-center gap-4 p-6",
      "horizontal": {
        "off": "flex-col",
        "on": "flex-col md:max-w-xl md:flex-row"
      },
      "href": "hover:bg-gray-100 dark:hover:bg-gray-700"
    },
    "img": {
      "base": "",
      "horizontal": {
        "off": "rounded-t-lg",
        "on": "h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
      }
    }
  },
  footer: {
    "root": {
      "base": "w-full rounded-lg bg-gray-200 shadow relative bottom-0 md:flex md:items-center md:justify-between",
      "container": "w-full p-6",
    },
    "title": {
      "base": "mb-6 text-sm font-semibold uppercase text-gray-500"
    },
    "copyright": {
      "base": "text-sm text-gray-500 sm:text-center",
      "href": "ml-1 hover:underline",
      "span": "ml-1"
    },
    "icon": {
      "base": "mb-4 flex items-center sm:mb-0",
      "size": "h-6 w-6"
    }
  },
  timeline: {
    "root": {
      "direction": {
        "vertical": "relative border-l border-blue-300"
      }
    },
    "item": {
      "root": {
        "vertical": "mb-10 ml-6"
      },
      "content": {
        "root": {
          "base": "",
          "vertical": ""
        },
        "body": {
          "base": "mb-4 text-base font-normal text-gray-500"
        },
        "time": {
          "base": "mb-1 text-lg font-normal leading-none text-blue-500 font-bold"
        },
        "title": {
          "base": "text-lg font-semibold text-gray-900"
        }
      },
      "point": {
        "line": "hidden h-0.5 w-full bg-blue-500 sm:flex",
        "marker": {
          "base": {
            "vertical": "absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-black bg-blue-500"
          },
        },
        "vertical": ""
      }
    }
  }
};

export default customTheme;
