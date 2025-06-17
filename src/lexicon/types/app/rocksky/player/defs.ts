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
const id = 'app.rocksky.player.defs'

export interface CurrentlyPlayingViewDetailed {
  $type?: 'app.rocksky.player.defs#currentlyPlayingViewDetailed'
  /** The title of the currently playing track */
  title?: string
}

const hashCurrentlyPlayingViewDetailed = 'currentlyPlayingViewDetailed'

export function isCurrentlyPlayingViewDetailed<V>(v: V) {
  return is$typed(v, id, hashCurrentlyPlayingViewDetailed)
}

export function validateCurrentlyPlayingViewDetailed<V>(v: V) {
  return validate<CurrentlyPlayingViewDetailed & V>(
    v,
    id,
    hashCurrentlyPlayingViewDetailed,
  )
}
