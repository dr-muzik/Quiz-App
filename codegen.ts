import { CodegenConfig } from "@graphql-codegen/cli";
// import { API_URL } from "./src/apollo/index";

const config: CodegenConfig = {
  schema: "http://127.0.0.1:3000",
  documents: ["src/**/*.tsx"],
  generates: {
    "./src/__generated__/": {
      preset: "client",
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
