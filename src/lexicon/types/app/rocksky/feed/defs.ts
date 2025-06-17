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
import type * as AppRockskySongDefs from '../song/defs.js'
import type * as AppRockskyAlbumDefs from '../album/defs.js'
import type * as AppRockskyArtistDefs from '../artist/defs.js'
import type * as AppRockskyPlaylistDefs from '../playlist/defs.js'
import type * as AppRockskyActorDefs from '../actor/defs.js'

const is$typed = _is$typed,
  validate = _validate
const id = 'app.rocksky.feed.defs'

export interface SearchResultsView {
  $type?: 'app.rocksky.feed.defs#searchResultsView'
  hits?: (
    | $Typed<AppRockskySongDefs.SongViewBasic>
    | $Typed<AppRockskyAlbumDefs.AlbumViewBasic>
    | $Typed<AppRockskyArtistDefs.ArtistViewBasic>
    | $Typed<AppRockskyPlaylistDefs.PlaylistViewBasic>
    | $Typed<AppRockskyActorDefs.ProfileViewBasic>
    | { $type: string }
  )[]
  processingTimeMs?: number
  limit?: number
  offset?: number
  estimatedTotalHits?: number
}

const hashSearchResultsView = 'searchResultsView'

export function isSearchResultsView<V>(v: V) {
  return is$typed(v, id, hashSearchResultsView)
}

export function validateSearchResultsView<V>(v: V) {
  return validate<SearchResultsView & V>(v, id, hashSearchResultsView)
}

export interface NowPlayingView {
  $type?: 'app.rocksky.feed.defs#nowPlayingView'
  album?: string
  albumArt?: string
  albumArtist?: string
  albumUri?: string
  artist?: string
  artistUri?: string
  avatar?: string
  createdAt?: string
  did?: string
  handle?: string
  id?: string
  title?: string
  trackId?: string
  trackUri?: string
  uri?: string
}

const hashNowPlayingView = 'nowPlayingView'

export function isNowPlayingView<V>(v: V) {
  return is$typed(v, id, hashNowPlayingView)
}

export function validateNowPlayingView<V>(v: V) {
  return validate<NowPlayingView & V>(v, id, hashNowPlayingView)
}

export interface NowPlayingsView {
  $type?: 'app.rocksky.feed.defs#nowPlayingsView'
  nowPlayings?: NowPlayingView[]
}

const hashNowPlayingsView = 'nowPlayingsView'

export function isNowPlayingsView<V>(v: V) {
  return is$typed(v, id, hashNowPlayingsView)
}

export function validateNowPlayingsView<V>(v: V) {
  return validate<NowPlayingsView & V>(v, id, hashNowPlayingsView)
}
