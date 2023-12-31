import { Box, Button, Flex, IconButton, Input, Text } from "@chakra-ui/react";
import { Field, FieldProps, Formik } from "formik";
import React, { useCallback, useMemo, useRef } from "react";
import { CloudUpload, FiletypeCsv, PatchCheck } from "react-bootstrap-icons";
import { Dataset, EXAMPLE_DATASETS } from "./DataEntryForm.constants";

type EntryFormType = {
  target: string;
  dataset: File | undefined;
  exampleDataset: Dataset | undefined;
};

export default function DataEntryForm({
  onSubmit,
}: {
  onSubmit: (formData: FormData) => void;
}) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const initialValues: EntryFormType = useMemo(
    () => ({
      target: "",
      dataset: undefined,
      exampleDataset: undefined,
    }),
    []
  );

  const submitHandler = useCallback(
    async (values: EntryFormType) => {
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

      onSubmit(formData);
    },
    [onSubmit]
  );

  return (
    <Formik initialValues={initialValues} onSubmit={submitHandler}>
      {({ values, setFieldValue, submitForm }) => {
        return (
          <Flex
            p={4}
            width={280}
            height="100%"
            bg="brand.bg"
            color="brand.color"
            direction={"column"}
            alignItems={"center"}
            data-cy="data-entry-form"
          >
            <Text fontWeight={"bold"} fontSize="2xl">
              Data Insights.io
            </Text>
            <Flex flex="1" alignItems={"center"}>
              <Flex direction={"column"} alignItems={"center"}>
                <IconButton
                  icon={values.dataset ? <PatchCheck /> : <CloudUpload />}
                  colorScheme={values.dataset ? "whatsapp" : undefined}
                  aria-label="Upload Dataset"
                  mt={4}
                  onClick={() => {
                    if (fileInputRef.current) fileInputRef.current.click();
                  }}
                  data-cy="file-input-btn"
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
                  data-cy="file-input"
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
                      data-cy="target-name"
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
                      colorScheme={
                        values.exampleDataset === id ? "whatsapp" : undefined
                      }
                      aria-label={name}
                      mt={4}
                      title={name}
                      onClick={() => setFieldValue("exampleDataset", id)}
                      rounded="full"
                      data-cy="custom-dataset"
                    />
                  ))}
                </Flex>
                <Button
                  onClick={submitForm}
                  mt={4}
                  size="sm"
                  colorScheme="messenger"
                  isDisabled={!values.exampleDataset && !values.dataset}
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
