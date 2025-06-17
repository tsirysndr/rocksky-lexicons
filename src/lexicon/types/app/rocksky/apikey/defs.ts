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
const id = 'app.rocksky.apikey.defs'

export interface ApiKeyView {
  $type?: 'app.rocksky.apikey.defs#apiKeyView'
  /** The unique identifier of the API key. */
  id?: string
  /** The name of the API key. */
  name?: string
  /** A description for the API key. */
  description?: string
  /** The date and time when the API key was created. */
  createdAt?: string
}

const hashApiKeyView = 'apiKeyView'

export function isApiKeyView<V>(v: V) {
  return is$typed(v, id, hashApiKeyView)
}

export function validateApiKeyView<V>(v: V) {
  return validate<ApiKeyView & V>(v, id, hashApiKeyView)
}
