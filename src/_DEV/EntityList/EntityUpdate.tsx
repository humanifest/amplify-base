import { useParams } from "react-router-dom";

interface EntityUpdateProps {
  Component: React.ComponentType<{ id?: string }>;
  prefix?: string;
  onSubmit: VoidFunction;
}

export default function EntityUpdate({
  Component,
  prefix = "",
  ...props
}: EntityUpdateProps) {
  const params = useParams();
  const id = params[prefix];

  return <Component id={id} {...props} />;
}
