import { LoadingContext } from "@/src/contexts/providers";
import { AlertContext } from "@/src/contexts/providers/ProviderAlert/ProviderAlert";
import { alertVariations } from "@/src/contexts/providers/ProviderAlert/state";
import { rkey } from "@avaelus/super-project-utils";
import { Button, Card, Heading, Loader, View } from "@aws-amplify/ui-react";
import { Text } from "@aws-amplify/ui-react";
import { useContext } from "react";

export default function DevEffects() {
  const [, setAlertState] = useContext(AlertContext);
  const [loading, setLoading] = useContext(LoadingContext);
  return (
    <View>
      <Text variation="primary" as="h2">
        Dev Effects
      </Text>
      <Card variation="elevated">
        <Heading>Alerts</Heading>
        {alertVariations.map((variation, i) => (
          <Button
            key={rkey(i, variation ?? "default")}
            onClick={() =>
              setAlertState({
                alert: {
                  variation,
                  heading: variation + " " + "Alert",
                  children: "Alert Content",
                },
                show: true,
              })
            }
          >
            {variation ?? "default"}
          </Button>
        ))}
      </Card>
      <Card variation="elevated">
        <div>{loading ? <Loader></Loader> : <Heading>Loading</Heading>}</div>

        <Button onClick={() => setLoading((prev) => !prev)}>
          {loading ? "Cancel" : "Load"}
        </Button>
      </Card>
    </View>
  );
}
