export type IconName =
  | "instagram"
  | "snapchat"
  | "discord"
  | "threads"
  | "facebook"
  | "linkedin"
  | "github"
  | "protonmail"
  | "phone";

export type Tile = {
  name: string;
  url: string;
  iconName: IconName;
};

export type TileSet = {
  title: string;
  tiles: Tile[];
};
