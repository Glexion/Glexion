import React from "react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export function Tabs({ tabs, addTab }) {
  return (
    <div className="p-4">
      <div className="flex space-x-2 border-b pb-2">
        {tabs.map((tab, index) => (
          <div key={tab.id} className="px-4 py-2 bg-gray-200 rounded-t-md cursor-pointer">
            Tab {index + 1}
          </div>
        ))}
        <Button onClick={addTab} className="ml-2">
          <PlusCircle />
        </Button>
      </div>
      <iframe
        src={tabs[tabs.length - 1].url}
        className="w-full h-[80vh] border mt-2"
        title="Browser Tab"
      ></iframe>
    </div>
  );
}
