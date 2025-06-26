import type { ChangelogTypeEnum } from "./enums";

export interface ChangelogTypeDetails {
  code: ChangelogTypeEnum;
  label: string;
  color: string;
  icon: string;
}

export interface Change {
  date: string;
  type: string;
  description: string;
}

export interface Changelog {
  releaseDate: string;
  changes: Change[];
}

export interface ChangelogTypeDetails {
  code: ChangelogTypeEnum;
  label: string;
  color: string;
  icon: string;
}