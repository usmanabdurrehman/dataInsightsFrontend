import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";
import { DataInsights as DataInsightsType } from "../../types";
import { DataDisplay } from "./DataDisplay";
import { DataStats } from "./DataStats";
import { FeatureImportances } from "./FeatureImportances";
import { FeaturesVsTarget } from "./FeaturesVsTarget";
import { MachineLearning } from "./MachineLearning";

export default function DataInsights({
  dataInsights,
}: {
  dataInsights: DataInsightsType;
}) {
  return (
    <Tabs
      variant="soft-rounded"
      colorScheme="green"
      display={"flex"}
      flexDirection="column"
      height="100%"
      overflow="auto"
      data-cy="data-insights"
    >
      <TabList>
        <Tab>The Dataset</Tab>
        <Tab>Data Stats</Tab>
        <Tab>Features vs Targets</Tab>
        <Tab>Feature Importances</Tab>
        <Tab>Machine Learning</Tab>
      </TabList>
      <TabPanels flex="1" overflow="auto">
        <TabPanel height="100%">
          <DataDisplay dataDisplay={dataInsights?.dataDisplay} />
        </TabPanel>
        <TabPanel height="100%">
          <DataStats stats={dataInsights.stats} />
        </TabPanel>
        <TabPanel height="100%">
          <FeaturesVsTarget plotData={dataInsights?.plotData} />
        </TabPanel>
        <TabPanel height="100%">
          <FeatureImportances
            featureImportances={dataInsights?.featureImportances}
          />
        </TabPanel>
        <TabPanel height="100%">
          <MachineLearning modelInfo={dataInsights?.model_info} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
