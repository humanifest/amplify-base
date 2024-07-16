import { rkey } from "@avaelus/super-project-utils";

import { useNavigate } from "react-router-dom";
import useClickableNavigation from "@/src/contexts/hooks/useClickableNavigation/useClickableNavigation";
import { Divider, Menu, MenuItem } from "@aws-amplify/ui-react";
import useNavUtils from "@/src/contexts/hooks/useNavUtils";

export default function NavBarDropDown() {
  const nav = useNavigate();
  const navItems = useClickableNavigation();
  const navUtils = useNavUtils();

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
      <Divider />
      {Object.entries(navUtils).map(([label, item], index) => (
        <MenuItem key={rkey(index, label)} children={label} {...item} />
      ))}
    </Menu>
  );
}
