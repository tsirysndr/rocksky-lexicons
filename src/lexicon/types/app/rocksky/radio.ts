/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { type ValidationResult, BlobRef } from '@atproto/lexicon'
import { CID } from 'multiformats/cid'
import { validate as _validate } from '../../../lexicons'
import { type $Typed, is$typed as _is$typed, type OmitKey } from '../../../util'

const is$typed = _is$typed,
  validate = _validate
const id = 'app.rocksky.radio'

export interface Record {
  $type: 'app.rocksky.radio'
  /** The name of the radio station. */
  name: string
  /** The URL of the radio station. */
  url: string
  /** A description of the radio station. */
  description?: string
  /** The genre of the radio station. */
  genre?: string
  /** The logo of the radio station. */
  logo?: BlobRef
  /** The website of the radio station. */
  website?: string
  /** The date when the radio station was created. */
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
