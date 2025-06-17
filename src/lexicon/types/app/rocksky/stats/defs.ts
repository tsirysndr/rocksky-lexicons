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
const id = 'app.rocksky.stats.defs'

export interface StatsView {
  $type?: 'app.rocksky.stats.defs#statsView'
  /** The total number of scrobbles. */
  scrobbles?: number
  /** The total number of unique artists scrobbled. */
  artists?: number
  /** The total number of tracks marked as loved. */
  lovedTracks?: number
  /** The total number of unique albums scrobbled. */
  albums?: number
  /** The total number of unique tracks scrobbled. */
  tracks?: number
}

const hashStatsView = 'statsView'

export function isStatsView<V>(v: V) {
  return is$typed(v, id, hashStatsView)
}

export function validateStatsView<V>(v: V) {
  return validate<StatsView & V>(v, id, hashStatsView)
}
