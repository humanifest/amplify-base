import { rkey } from "@avaelus/super-project-utils";

import { useNavigate } from "react-router-dom";
import useClickableNavigation from "@/src/contexts/hooks/useClickableNavigation/useClickableNavigation";
import { Menu, MenuItem } from "@aws-amplify/ui-react";

export default function NavBarDropDown() {
  // TODO: Authentication
  const nav = useNavigate();
  const navItems = useClickableNavigation();

  return (
    <Menu>
      {Object.entries(navItems).map(([label, item], index) => (
        <MenuItem
          key={rkey(index, label)}
          onClick={() => nav(item.url)}
          children={label}
          {...item}
        />
      ))}
    </Menu>
  );
}
