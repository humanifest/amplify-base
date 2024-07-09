import { rkey } from "@avaelus/super-project-utils";
import { Badge, Button, Card, Flex } from "@aws-amplify/ui-react";
import { useLocation, useNavigate } from "react-router-dom";

type DEVPROPS = {
  handleDelete: (id: string) => void;
  createdAt: string;
  updatedAt: string;
  [key: string]: any;
};

export default function EntityCard({
  handleDelete,
  createdAt,
  updatedAt,
  ...details
}: DEVPROPS) {
  const location = useLocation();
  const nav = useNavigate();
  return (
    <Card variation="outlined">
      <Flex direction="row" alignItems="flex-start">
        <Flex direction="column" alignItems="flex-start">
          <Flex>
            <Badge size="small" variation="info">
              Created: {createdAt}
            </Badge>
            <Badge size="small" variation="success">
              Updated {updatedAt}
            </Badge>
          </Flex>

          {Object.entries(details).map(([k, v], i) => (
            <div key={rkey(i, k)}>
              <span>
                <strong>{k}: </strong>
              </span>
              <span>
                <em>{v}</em>
              </span>
            </div>
          ))}
          <Flex justifyContent="space-between">
            <Button onClick={() => nav(location.pathname + "/" + details.id)}>
              Edit
            </Button>
            <Button
              variation="primary"
              onClick={() => handleDelete(details.id)}
            >
              Delete
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
}
