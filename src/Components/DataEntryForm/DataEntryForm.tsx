import { Box, Button, Flex, IconButton, Input, Text } from "@chakra-ui/react";
import { Field, FieldProps, Formik } from "formik";
import React, { useMemo, useRef } from "react";
import { CloudUpload, FiletypeCsv, PatchCheck } from "react-bootstrap-icons";
import { useGenerateDataInsights } from "../../mutations";
import { DataInsights } from "../../types";

enum Dataset {
  Prostate = "prostate",
  Heart = "heart",
  StockPrices = "stockprices",
}

const EXAMPLE_DATASETS = [
  {
    id: Dataset.Heart,
    name: "Heart Dataset",
  },
  {
    id: Dataset.StockPrices,
    name: "Stock Prices Dataset",
  },
  {
    id: Dataset.Prostate,
    name: "Prostate Dataset",
  },
];

type EntryFormType = {
  target: string;
  dataset: File | undefined;
  exampleDataset: Dataset | undefined;
};

export default function DataEntryForm({
  onSuccess,
}: {
  onSuccess: React.Dispatch<React.SetStateAction<DataInsights | undefined>>;
}) {
  const { mutateAsync: generateDataInsights } = useGenerateDataInsights();

  const fileInputRef = useRef<HTMLInputElement>(null);

  const initialValues: EntryFormType = useMemo(
    () => ({
      target: "",
      dataset: undefined,
      exampleDataset: undefined,
    }),
    []
  );

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values) => {
        const formData = new FormData();
        const showTicks = {
          custom: !!values.dataset,
          [Dataset.Prostate]: false,
          [Dataset.Heart]: false,
          [Dataset.StockPrices]: false,
        };

        if (values.exampleDataset) showTicks[values.exampleDataset] = true;

        if (values.dataset) formData.append("file", values.dataset);
        formData.append("target", values.target);
        formData.append("showTicks", JSON.stringify(showTicks));

        const data = await generateDataInsights(formData);
        onSuccess(data);
      }}
    >
      {({ values, setFieldValue, submitForm }) => {
        return (
          <Flex
            p={4}
            bg="#084c61"
            color="#bce7fd"
            direction={"column"}
            alignItems={"center"}
          >
            <Text fontWeight={"bold"} fontSize="xl">
              Data Insights.io
            </Text>
            <Flex flex="1" alignItems={"center"}>
              <Flex direction={"column"} alignItems={"center"}>
                <IconButton
                  icon={<CloudUpload />}
                  aria-label="Upload Dataset"
                  mt={4}
                  onClick={() => {
                    if (fileInputRef.current) fileInputRef.current.click();
                  }}
                  rounded="full"
                />
                <input
                  type="file"
                  style={{ display: "none" }}
                  ref={fileInputRef}
                  onChange={(e) => {
                    if (e.target.files?.[0]) {
                      setFieldValue("dataset", e.target.files?.[0]);
                    }
                  }}
                  accept=".csv"
                />
                <Text textAlign={"center"} fontSize="xs" mt={2}>
                  Allowed Format .csv
                </Text>
                <Field name="target">
                  {({ field }: FieldProps) => (
                    <Input
                      placeholder="Target Name"
                      mt={4}
                      fontSize="sm"
                      _placeholder={{ color: "inherit", fontSize: "sm" }}
                      {...field}
                    />
                  )}
                </Field>

                <Box mt={4}>
                  <Text textAlign={"center"} fontSize="sm">
                    OR
                  </Text>
                  <Text textAlign={"center"} fontSize="sm">
                    Select among these example datasets
                  </Text>
                </Box>
                <Flex gap={2}>
                  {EXAMPLE_DATASETS.map(({ id, name }) => (
                    <IconButton
                      icon={
                        values.exampleDataset === id ? (
                          <PatchCheck />
                        ) : (
                          <FiletypeCsv />
                        )
                      }
                      aria-label={name}
                      mt={4}
                      title={name}
                      onClick={() => setFieldValue("exampleDataset", id)}
                      rounded="full"
                    />
                  ))}
                </Flex>
                <Button
                  colorScheme={"whatsapp"}
                  onClick={submitForm}
                  mt={4}
                  size="md"
                >
                  Get Insights
                </Button>
              </Flex>
            </Flex>
          </Flex>
        );
      }}
    </Formik>
  );
}
