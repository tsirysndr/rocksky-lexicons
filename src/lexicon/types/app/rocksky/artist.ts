/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { type ValidationResult, BlobRef } from '@atproto/lexicon'
import { CID } from 'multiformats/cid'
import { validate as _validate } from '../../../lexicons'
import { type $Typed, is$typed as _is$typed, type OmitKey } from '../../../util'

const is$typed = _is$typed,
  validate = _validate
const id = 'app.rocksky.artist'

export interface Record {
  $type: 'app.rocksky.artist'
  /** The name of the artist. */
  name: string
  /** The biography of the artist. */
  bio?: string
  /** The picture of the artist. */
  picture?: BlobRef
  /** The tags of the artist. */
  tags?: string[]
  /** The birth date of the artist. */
  born?: string
  /** The death date of the artist. */
  died?: string
  /** The birth place of the artist. */
  bornIn?: string
  /** The date the song was created. */
  createdAt: string
  [k: string]: unknown
}

const hashRecord = 'main'

export function isRecord<V>(v: V) {
  return is$typed(v, id, hashRecord)
}

export function validateRecord<V>(v: V) {
  return validate<Record & V>(v, id, hashRecord, true)
}
