/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { type ValidationResult, BlobRef } from '@atproto/lexicon'
import { CID } from 'multiformats/cid'
import { validate as _validate } from '../../../../lexicons'
import {
  type $Typed,
  is$typed as _is$typed,
  type OmitKey,
} from '../../../../util'

const is$typed = _is$typed,
  validate = _validate
const id = 'app.rocksky.artist.defs'

export interface ArtistViewBasic {
  $type?: 'app.rocksky.artist.defs#artistViewBasic'
  /** The unique identifier of the artist. */
  id?: string
  /** The URI of the artist. */
  uri?: string
  /** The name of the artist. */
  name?: string
  /** The picture of the artist. */
  picture?: string
  /** The SHA256 hash of the artist. */
  sha256?: string
  /** The number of times the artist has been played. */
  playCount?: number
  /** The number of unique listeners who have played the artist. */
  uniqueListeners?: number
}

const hashArtistViewBasic = 'artistViewBasic'

export function isArtistViewBasic<V>(v: V) {
  return is$typed(v, id, hashArtistViewBasic)
}

export function validateArtistViewBasic<V>(v: V) {
  return validate<ArtistViewBasic & V>(v, id, hashArtistViewBasic)
}

export interface ArtistViewDetailed {
  $type?: 'app.rocksky.artist.defs#artistViewDetailed'
  /** The unique identifier of the artist. */
  id?: string
  /** The URI of the artist. */
  uri?: string
  /** The name of the artist. */
  name?: string
  /** The picture of the artist. */
  picture?: string
  /** The SHA256 hash of the artist. */
  sha256?: string
  /** The number of times the artist has been played. */
  playCount?: number
  /** The number of unique listeners who have played the artist. */
  uniqueListeners?: number
}

const hashArtistViewDetailed = 'artistViewDetailed'

export function isArtistViewDetailed<V>(v: V) {
  return is$typed(v, id, hashArtistViewDetailed)
}

export function validateArtistViewDetailed<V>(v: V) {
  return validate<ArtistViewDetailed & V>(v, id, hashArtistViewDetailed)
}
