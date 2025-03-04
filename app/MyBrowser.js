import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Sun, Moon, PlusCircle, XCircle } from "lucide-react";

export default function MyBrowser() {
  const [tabs, setTabs] = useState([{ id: 1, url: "https://www.google.com" }]);
  const [activeTab, setActiveTab] = useState(1);
  const [darkMode, setDarkMode] = useState(false);

  const addTab = () => {
    const newId = tabs.length + 1;
    setTabs([...tabs, { id: newId, url: "https://www.google.com" }]);
    setActiveTab(newId);
  };

  const removeTab = (id) => {
    const newTabs = tabs.filter(tab => tab.id !== id);
    setTabs(newTabs.length ? newTabs : [{ id: 1, url: "https://www.google.com" }]);
    setActiveTab(newTabs.length ? newTabs[0].id : 1);
  };

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      {/* Header */}
      <div className="flex justify-between items-center p-4 shadow-md">
        <h1 className="text-xl font-bold">MyBrowser 🚀</h1>
        <Button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <Sun /> : <Moon />}
        </Button>
      </div>

      {/* Tabs System */}
      <Tabs defaultValue={activeTab}>
        <TabsList className="flex space-x-2 p-2 border-b">
          {tabs.map((tab) => (
            <TabsTrigger key={tab.id} value={tab.id} activeTab={activeTab} setActiveTab={setActiveTab}>
              Tab {tab.id}
              <button onClick={() => removeTab(tab.id)} className="ml-2 text-red-500">
                <XCircle size={16} />
              </button>
            </TabsTrigger>
          ))}
          <Button onClick={addTab} className="ml-4 flex items-center">
            <PlusCircle size={16} className="mr-1" /> New Tab
          </Button>
        </TabsList>

        {tabs.map((tab) => (
          <TabsContent key={tab.id} value={tab.id} activeTab={activeTab}>
            <Input className="w-full p-2 border rounded" placeholder="Enter URL..." defaultValue={tab.url} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
