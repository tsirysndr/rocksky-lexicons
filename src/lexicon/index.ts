/**
 * GENERATED CODE - DO NOT MODIFY
 */
import {
  createServer as createXrpcServer,
  Server as XrpcServer,
  type Options as XrpcOptions,
  type AuthVerifier,
  type StreamAuthVerifier,
} from '@atproto/xrpc-server'
import { schemas } from './lexicons.js'

export function createServer(options?: XrpcOptions): Server {
  return new Server(options)
}

export class Server {
  xrpc: XrpcServer
  app: AppNS

  constructor(options?: XrpcOptions) {
    this.xrpc = createXrpcServer(schemas, options)
    this.app = new AppNS(this)
  }
}

export class AppNS {
  _server: Server
  rocksky: AppRockskyNS

  constructor(server: Server) {
    this._server = server
    this.rocksky = new AppRockskyNS(server)
  }
}

export class AppRockskyNS {
  _server: Server

  constructor(server: Server) {
    this._server = server
  }
}

type SharedRateLimitOpts<T> = {
  name: string
  calcKey?: (ctx: T) => string | null
  calcPoints?: (ctx: T) => number
}
type RouteRateLimitOpts<T> = {
  durationMs: number
  points: number
  calcKey?: (ctx: T) => string | null
  calcPoints?: (ctx: T) => number
}
type HandlerOpts = { blobLimit?: number }
type HandlerRateLimitOpts<T> = SharedRateLimitOpts<T> | RouteRateLimitOpts<T>
type ConfigOf<Auth, Handler, ReqCtx> =
  | Handler
  | {
      auth?: Auth
      opts?: HandlerOpts
      rateLimit?: HandlerRateLimitOpts<ReqCtx> | HandlerRateLimitOpts<ReqCtx>[]
      handler: Handler
    }
type ExtractAuth<AV extends AuthVerifier | StreamAuthVerifier> = Extract<
  Awaited<ReturnType<AV>>,
  { credentials: unknown }
>
