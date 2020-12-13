/**
 * Events
 */

export type Events = {
  id: number,
  title: string,
  description: string,
  event_date: string,
  location_url: string,
  location_address: string,
  summary: string,
  status: string,
  talks: Talks[]
}

export type Talks = {
  id: number,
  title: string,
  description: string,
  talk_date: string,
  language: string,
  tags: string[],
  status: string,
  location: string,
  authors: Authors[]
}

export type Authors = {
  id: number  
  email: string
  name: string
  title: string
  about: string
  links: string[]
  photo: AttachmentMedia[]
  status: string
}

/**
 * Digests
 */
export type Post = {
  id: string
  Id: number
  content: string
  tags: string[]
  links: string[]
  media_type: string
  media: AttachmentMedia[]
  priority: number
  post_date: string
  status: string
}

export type Digest = {
  id: string
  Id: number
  title: string
  description: string
  digest_date: string
  status: string
  posts: Post[]
}

/**
 * Additional types
 */
export type AttachmentMedia = {
  id: string,
  size: number,
  url: string,
  type: string,
  filename: string,
  thumbnails: object
}

export type Filter = {
  id: number
  title: string
}