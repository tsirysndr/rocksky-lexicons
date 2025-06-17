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
const id = 'app.rocksky.charts.defs'

export interface ChartsView {
  $type?: 'app.rocksky.charts.defs#chartsView'
  scrobbles?: ScrobbleViewBasic[]
}

const hashChartsView = 'chartsView'

export function isChartsView<V>(v: V) {
  return is$typed(v, id, hashChartsView)
}

export function validateChartsView<V>(v: V) {
  return validate<ChartsView & V>(v, id, hashChartsView)
}

export interface ScrobbleViewBasic {
  $type?: 'app.rocksky.charts.defs#scrobbleViewBasic'
  /** The date of the scrobble. */
  date?: string
  /** The number of scrobbles on this date. */
  count?: number
}

const hashScrobbleViewBasic = 'scrobbleViewBasic'

export function isScrobbleViewBasic<V>(v: V) {
  return is$typed(v, id, hashScrobbleViewBasic)
}

export function validateScrobbleViewBasic<V>(v: V) {
  return validate<ScrobbleViewBasic & V>(v, id, hashScrobbleViewBasic)
}
