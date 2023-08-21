import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@carbon/react";
import React from "react";
import styles from "./commodity-tabs.scss";
import StockItems from "../stock-items/stock-items.component";
import StockSources from "../stock-sources/stock-sources.component";
import StockUserScopes from "../stock-user-role-scopes/stock-user-role-scopes.component";
import StockLocations from "../stock-locations/stock-locations-table.component";
import StockOperations from "../stock-operations/stock-operations-table.component";

const StockCommodityTabs: React.FC = () => {
  return (
    <div className={styles.tabContainer}>
      <Tabs>
        <TabList contained>
          <Tab> Stock Items</Tab>
          <Tab> Stock Operations</Tab>
          <Tab> Stock User Role Scopes</Tab>
          <Tab> Stock Sources</Tab>
          <Tab> Stock Locations</Tab>
          <Tab> Stock Reports</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <StockItems />
          </TabPanel>
          <TabPanel>
            <StockOperations />
          </TabPanel>
          <TabPanel>
            <StockUserScopes />
          </TabPanel>
          <TabPanel>
            <StockSources />
          </TabPanel>
          <TabPanel>
            <StockLocations />
          </TabPanel>
          <TabPanel>
            <StockItems />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default StockCommodityTabs;
