/**
 * GENERATED CODE - DO NOT MODIFY
 */
import express from 'express'
import { type ValidationResult, BlobRef } from '@atproto/lexicon'
import { CID } from 'multiformats/cid'
import { validate as _validate } from '../../../../lexicons'
import {
  type $Typed,
  is$typed as _is$typed,
  type OmitKey,
} from '../../../../util'
import { HandlerAuth, HandlerPipeThrough } from '@atproto/xrpc-server'
import type * as AppRockskySongDefs from './defs.js'

const is$typed = _is$typed,
  validate = _validate
const id = 'app.rocksky.song.createSong'

export interface QueryParams {}

export interface InputSchema {
  /** The title of the song */
  title: string
  /** The artist of the song */
  artist: string
  /** The album artist of the song, if different from the main artist */
  albumArtist: string
  /** The album of the song, if applicable */
  album: string
  /** The duration of the song in seconds */
  duration?: number
  /** The MusicBrainz ID of the song, if available */
  mbId?: string
  /** The URL of the album art for the song */
  albumArt?: string
  /** The track number of the song in the album, if applicable */
  trackNumber?: number
  /** The release date of the song, formatted as YYYY-MM-DD */
  releaseDate?: string
  /** The year the song was released */
  year?: number
  /** The disc number of the song in the album, if applicable */
  discNumber?: number
  /** The lyrics of the song, if available */
  lyrics?: string
}

export type OutputSchema = AppRockskySongDefs.SongViewDetailed

export interface HandlerInput {
  encoding: 'application/json'
  body: InputSchema
}

export interface HandlerSuccess {
  encoding: 'application/json'
  body: OutputSchema
  headers?: { [key: string]: string }
}

export interface HandlerError {
  status: number
  message?: string
}

export type HandlerOutput = HandlerError | HandlerSuccess | HandlerPipeThrough
export type HandlerReqCtx<HA extends HandlerAuth = never> = {
  auth: HA
  params: QueryParams
  input: HandlerInput
  req: express.Request
  res: express.Response
  resetRouteRateLimits: () => Promise<void>
}
export type Handler<HA extends HandlerAuth = never> = (
  ctx: HandlerReqCtx<HA>,
) => Promise<HandlerOutput> | HandlerOutput
