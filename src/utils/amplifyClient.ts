import { Schema } from "@/data-schema";
import { generateClient } from "aws-amplify/data";

const client = generateClient<Schema>();

export default client;
