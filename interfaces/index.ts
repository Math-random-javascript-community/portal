/**
 * Entity
 */
export interface Entity {
  id: string;
  status: string;
}

/**
 * Events
 */

export interface EventEntity extends Entity {
  title: string;
  description: string;
  event_date: string;
  location: string;
  address: string;
  summary: string;
  talks: TalkEntity[];
}

export interface TalkEntity extends Entity {
  title: string;
  description: string;
  talk_date: string;
  language: string;
  tags: string[];
  location: string;
  authors: AuthorEntity[];
}

export interface AuthorEntity extends Entity {
  email: string;
  name: string;
  about: string;
  links: string[];
  photo: AttachmentMedia[];
}

/**
 * Digests
 */
export interface PostEntity extends Entity {
  content: string;
  tags: string[];
  links: string[];
  media_type: string;
  media: AttachmentMedia[];
  priority: number;
  post_date: string;
}

export interface DigestType extends Entity {
  title: string;
  description: string;
  digest_date: string;
  posts: PostEntity[];
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
