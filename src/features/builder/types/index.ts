import { BaseEntity } from '../../../types';

export type Builder = {
  title: string;
  body: string;
  teamId: string;
} & BaseEntity;
