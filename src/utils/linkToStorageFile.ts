import { getUrl } from "aws-amplify/storage";

export const linkToStorageFile = async (
  path: string,
  callback: (url: string) => void
) => {
  const link = await getUrl({
    path,
  });
  callback(link.url.toString());
};
