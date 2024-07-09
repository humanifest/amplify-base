import { AlertContext } from "@/src/contexts/providers/ProviderAlert/ProviderAlert";
import { alertVariations } from "@/src/contexts/providers/ProviderAlert/state";
import { rkey } from "@avaelus/super-project-utils";
import { Button, Card, View } from "@aws-amplify/ui-react";
import { Text } from "@aws-amplify/ui-react";
import { useContext } from "react";

export default function DevEffects() {
  const [, setAlertState] = useContext(AlertContext);
  return (
    <View>
      <Text variation="primary" as="h2">
        Dev Effects
      </Text>
      <View>
        <Text variation="primary" as="p">
          Alert
        </Text>
        <Card>
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
      </View>
    </View>
  );
}
