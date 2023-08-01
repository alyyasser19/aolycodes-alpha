import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./header.module.css";

type HeaderType = {
  logo?: string;

  /** Style props */
  aolyGuieLogoIconAlignSelf?: Property.AlignSelf;
  aolyHomeLinkWidth?: Property.Width;
  homeIconFlex?: Property.Flex;
  frameDivWidth?: Property.Width;
  frameDivFlex?: Property.Flex;

  /** Action props */
  onaolyGuieLogoImageClick?: () => void;
};

const Header: NextPage<HeaderType> = ({
  logo,
  aolyGuieLogoIconAlignSelf,
  aolyHomeLinkWidth,
  homeIconFlex,
  frameDivWidth,
  frameDivFlex,
  onaolyGuieLogoImageClick,
}) => {
  const topHeaderStyle: CSS.Properties = useMemo(() => {
    return {
      alignSelf: aolyGuieLogoIconAlignSelf,
    };
  }, [aolyGuieLogoIconAlignSelf]);

  const tryforFreeStyle: CSS.Properties = useMemo(() => {
    return {
      width: frameDivWidth,
      flex: frameDivFlex,
    };
  }, [frameDivWidth, frameDivFlex]);

  return (
    <header className={styles.topHeader}>
      <img
        className={styles.aolyGuieLogoIcon}
        alt=""
        src={logo}
        onClick={onaolyGuieLogoImageClick}
      />
    </header>
  );
};

export default Header;
