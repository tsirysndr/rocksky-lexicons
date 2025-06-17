/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { type ValidationResult, BlobRef } from '@atproto/lexicon'
import { CID } from 'multiformats/cid'
import { validate as _validate } from '../../../lexicons'
import { type $Typed, is$typed as _is$typed, type OmitKey } from '../../../util'
import type * as AppRockskySong from './song.js'

const is$typed = _is$typed,
  validate = _validate
const id = 'app.rocksky.playlist'

export interface Record {
  $type: 'app.rocksky.playlist'
  /** The name of the playlist. */
  name: string
  /** The playlist description. */
  description?: string
  /** The picture of the playlist. */
  picture?: BlobRef
  /** The tracks in the playlist. */
  tracks?: AppRockskySong.Record[]
  /** The date the playlist was created. */
  createdAt: string
  /** The Spotify link of the playlist. */
  spotifyLink?: string
  /** The Tidal link of the playlist. */
  tidalLink?: string
  /** The YouTube link of the playlist. */
  youtubeLink?: string
  /** The Apple Music link of the playlist. */
  appleMusicLink?: string
  [k: string]: unknown
}

const hashRecord = 'main'

export function isRecord<V>(v: V) {
  return is$typed(v, id, hashRecord)
}

export function validateRecord<V>(v: V) {
  return validate<Record & V>(v, id, hashRecord, true)
}
