import Page from "./Page";
import { LayoutMain } from "@/src/components";
import { ProviderLayout } from "@/src/contexts/providers";

export const BasePage = () => {
  return (
    <Page id="<|BasePage|>">
      <ProviderLayout
        nav={{ visible: false, expanded: false }}
        drawer={{ visible: false, expanded: false }}
        footer={{ visible: false, expanded: false }}
      >
        <LayoutMain />
      </ProviderLayout>
    </Page>
  );
};

export const HeadlessPage = () => {
  return (
    <Page id="<|HeadlessPage|>">
      <ProviderLayout
        nav={{ visible: false, expanded: false }}
        drawer={{ visible: true, expanded: false }}
        footer={{ visible: true, expanded: false }}
      >
        <LayoutMain />
      </ProviderLayout>
    </Page>
  );
};

export const FullPage = () => {
  return (
    <Page id="<|FullPage|>">
      <ProviderLayout
        nav={{ visible: true, expanded: false }}
        drawer={{ visible: true, expanded: false }}
        footer={{ visible: true, expanded: false }}
      >
        <LayoutMain />
      </ProviderLayout>
    </Page>
  );
};
