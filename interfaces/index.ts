/**
 * Entity
 */
export interface Entity {
  id: string;
  Id: number;
}

/**
 * Events
 */

export interface EventType extends Entity {
  title: string;
  description: string;
  event_date: string;
  location: string;
  address: string;
  summary: string;
  status: string;
  talks: TalkType[];
}

export interface TalkType extends Entity {
  title: string;
  description: string;
  talk_date: string;
  language: string;
  tags: string[];
  status: string;
  location: string;
  authors: AuthorType[];
}

export interface AuthorType extends Entity {
  email: string;
  name: string;
  about: string;
  links: string[];
  photo: AttachmentMedia[];
  status: string;
}

/**
 * Digests
 */
export interface PostType extends Entity {
  content: string;
  tags: string[];
  links: string[];
  media_type: string;
  media: AttachmentMedia[];
  priority: number;
  post_date: string;
  status: string;
}

export interface DigestType extends Entity {
  title: string;
  description: string;
  digest_date: string;
  status: string;
  posts: PostType[];
}

/**
 * Additional types
 */
export interface AttachmentMedia {
  id: string;
  size: number;
  url: string;
  type: string;
  filename: string;
  thumbnails: object;
}

export type FilterStatusType = 'active' | 'all' | 'default';

export type FilterType = {
  id: number;
  title: string;
  status: FilterStatusType;
};
