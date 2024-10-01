import React, {useState, useRef, useEffect} from "react";
import Tab from "./Tab";
import TabPanel from "./TabPanel";

export type TabType = {
  id: string;
  label: string;
  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
  active?: boolean;
};

export type TabsProps = {
  tabs: TabType[];
  fixedWidth?: boolean;
  tabsSecondary?: boolean;
  sizeSm?: boolean;
  sizeLg?: boolean;
  isSlider?: boolean;
  scrollAmount?: number;
};

export default function Tabs({
  tabs,
  fixedWidth,
  tabsSecondary,
  sizeLg,
  sizeSm,
  isSlider,
  scrollAmount = 100,
}: TabsProps) {
  const [activeTab, setActiveTab] = useState<string>(() => {
    const activeTabItem = tabs.find((tab) => tab.active);
    return activeTabItem ? activeTabItem.id : tabs[0].id;
  });
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const tabListRef = useRef<HTMLUListElement>(null);
  const isDraggingRef = useRef<boolean>(false);
  const startXRef = useRef<number>(0);
  const scrollLeftRef = useRef<number>(0);

  const handleTabClick = (id: string) => {
    setActiveTab(id);
  };

  const handleScroll = (direction: "left" | "right") => {
    if (tabListRef.current) {
      const {scrollLeft, clientWidth, scrollWidth} = tabListRef.current;
      const maxScrollLeft = scrollWidth - clientWidth;
      let newScrollLeft = scrollLeft;

      if (direction === "left") {
        newScrollLeft = Math.max(scrollLeft - scrollAmount, 0);
      } else if (direction === "right") {
        newScrollLeft = Math.min(scrollLeft + scrollAmount, maxScrollLeft);
      }

      tabListRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  const updateScrollButtons = () => {
    if (tabListRef.current) {
      const {scrollLeft, clientWidth, scrollWidth} = tabListRef.current;
      const maxScrollLeft = scrollWidth - clientWidth;

      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < maxScrollLeft);
    }
  };

  useEffect(() => {
    updateScrollButtons();
    tabListRef.current?.addEventListener("scroll", updateScrollButtons);

    return () => {
      tabListRef.current?.removeEventListener("scroll", updateScrollButtons);
    };
  }, []);

  useEffect(() => {
    if (tabListRef.current) {
      const activeTabElement = tabListRef.current.querySelector(
        `button#${activeTab}`,
      );
      if (activeTabElement) {
        activeTabElement.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }
    }
  }, [activeTab]);

  const handleDragStart = (event: React.DragEvent<HTMLUListElement>) => {
    isDraggingRef.current = true;
    startXRef.current = event.clientX - tabListRef.current!.offsetLeft;
    scrollLeftRef.current = tabListRef.current!.scrollLeft;

    tabListRef.current!.style.cursor = "grabbing";
  };

  const handleDragEnd = () => {
    isDraggingRef.current = false;
    tabListRef.current!.style.cursor = "auto";
  };

  const handleDragOver = (event: React.DragEvent<HTMLUListElement>) => {
    if (!isDraggingRef.current) return;

    event.preventDefault();

    const x = event.clientX - tabListRef.current!.offsetLeft;
    const walk = (x - startXRef.current) * 0.7;
    tabListRef.current!.scrollLeft = scrollLeftRef.current - walk;
  };

  return (
    <>
      <nav
        className="tabs-slider"
        aria-label="Navegación por pestañas"
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onMouseMove={handleDragOver}
      >
        <ul
          className={`nav nav-pills tabs${fixedWidth ? " fixedWidth" : ""}${tabsSecondary ? " nav-box" : ""}`}
          role="tablist"
          ref={tabListRef}
        >
          {tabs.map((tab) => (
            <Tab
              key={tab.id}
              id={tab.id}
              label={tab.label}
              iconLeft={tab.iconLeft}
              iconRight={tab.iconRight}
              isActive={tab.id === activeTab}
              isDisabled={tab.disabled || false}
              onClick={handleTabClick}
              sizeLg={sizeLg}
              sizeSm={sizeSm}
            />
          ))}
        </ul>
        {isSlider && (
          <div className="icons-container">
            <button
              className={`right-left icon ${canScrollLeft ? "d-flex" : "d-none"}`}
              id="left"
              onClick={() => handleScroll("left")}
            >
              <span className="material-icons-round">arrow_back_ios</span>
            </button>
            <button
              className={`right-left icon ${canScrollRight ? "d-flex" : "d-none"}`}
              id="right"
              onClick={() => handleScroll("right")}
            >
              <span className="material-icons-round">arrow_forward_ios</span>
            </button>
          </div>
        )}
      </nav>

      <div className="tab-content">
        {tabs.map((tab) => (
          <TabPanel
            key={tab.id}
            id={`panel-content-${tab.id}`}
            isActive={tab.id === activeTab}
          >
            {tab.content}
          </TabPanel>
        ))}
      </div>
    </>
  );
}
