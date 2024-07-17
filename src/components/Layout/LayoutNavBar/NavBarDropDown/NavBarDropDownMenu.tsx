import { rkey } from "@avaelus/super-project-utils";

import { useNavigate } from "react-router-dom";
import useClickableNavigation from "@/src/contexts/hooks/useClickableNavigation/useClickableNavigation";
import { Divider, Menu, MenuItem } from "@aws-amplify/ui-react";
import useNavUtils from "@/src/contexts/hooks/useNavUtils";
import { navIconGap } from "@/src/assets";
import { IconType } from "react-icons";

export const RenderIcon = ({ Icon }: { Icon: IconType }) => <Icon />;
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
          gap={navIconGap}
        >
          {item.icon && <item.icon />} {label}
        </MenuItem>
      ))}
      <Divider />
      {Object.entries(navUtils).map(([label, { icon, ...item }], index) => (
        <MenuItem key={rkey(index, label)} gap={navIconGap} {...item}>
          {icon && <RenderIcon Icon={icon} />} {label}
        </MenuItem>
      ))}
    </Menu>
  );
}
