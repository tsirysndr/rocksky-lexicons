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
import type * as AppRockskyChartsDefs from './defs.js'

const is$typed = _is$typed,
  validate = _validate
const id = 'app.rocksky.charts.getScrobblesChart'

export interface QueryParams {
  /** The DID or handle of the actor */
  did?: string
  /** The URI of the artist to filter by */
  artisturi?: string
  /** The URI of the album to filter by */
  albumuri?: string
  /** The URI of the track to filter by */
  songuri?: string
}

export type InputSchema = undefined
export type OutputSchema = AppRockskyChartsDefs.ChartsView
export type HandlerInput = undefined

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
