import { useState } from "react";
import "./tabs.scss";

const Tab = () => {
  const tabsList = [
    {
      id: "1",
      label: "Create Bulk 15 Min. Slots",
      component: <div>create bulk Slot</div>,
    },
    {
      id: "2",
      label: "Create One Slot",
      component: <div>create single Slot</div>,
    },
  ];

  const [currentTabId, setCurrentTabId] = useState("1");

  const handleRenderTab = (id) => {
    setCurrentTabId(id);
  };

  const getComponentById = () => {
    const currentTab = tabsList.filter((item) => item.id === currentTabId);
    console.log(currentTab, "currenttab");
    return currentTab[0].component;
  };

  return (
    <div className="tabs">
      <div className="tabs_header">
        {tabsList.map((item) => (
          <div
            className={`tabs_item ${item.id === currentTabId ? "active" : ""}`}
            onClick={() => handleRenderTab(item.id)}
            key={item.id}
          >
            {item.label}
          </div>
        ))}
      </div>
      <div className="tabs_body">{getComponentById()}</div>
    </div>
  );
};

export default Tab;
