/**
 * Events
 */

export type EventType = {
  id: string
  Id: number
  title: string
  description: string
  event_date: string
  location: string
  address: string
  summary: string
  status: string
  talks: TalkType[]
}

export type TalkType = {
  id: string
  Id: number  
  title: string
  description: string
  talk_date: string
  language: string
  tags: string[]
  status: string
  location: string
  authors: AuthorType[]
}

export type AuthorType = {
  id: string
  Id: number  
  email: string
  name: string
  about: string
  links: string[]
  photo: AttachmentMediaType[]
  status: string
}

/**
 * Digests
 */
export type PostType = {
  id: string
  Id: number
  content: string
  tags: string[]
  links: string[]
  media_type: string
  media: AttachmentMediaType[]
  priority: number
  post_date: string
  status: string
}

export type DigestType = {
  id: string
  Id: number
  title: string
  description: string
  digest_date: string
  status: string
  posts: PostType[]
}

/**
 * Additional types
 */
export type AttachmentMediaType = {
  id: string
  size: number
  url: string
  type: string
  filename: string
  thumbnails: object
}

export type FilterStatusType = 'active' | 'all' | 'default';

export type FilterType = {
  id: number
  title: string
  status: FilterStatusType
}