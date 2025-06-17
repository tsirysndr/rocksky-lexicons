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
const id = 'app.rocksky.googledrive.defs'

export interface FileView {
  $type?: 'app.rocksky.googledrive.defs#fileView'
  /** The unique identifier of the file. */
  id?: string
}

const hashFileView = 'fileView'

export function isFileView<V>(v: V) {
  return is$typed(v, id, hashFileView)
}

export function validateFileView<V>(v: V) {
  return validate<FileView & V>(v, id, hashFileView)
}

export interface FileListView {
  $type?: 'app.rocksky.googledrive.defs#fileListView'
  files?: FileView[]
}

const hashFileListView = 'fileListView'

export function isFileListView<V>(v: V) {
  return is$typed(v, id, hashFileListView)
}

export function validateFileListView<V>(v: V) {
  return validate<FileListView & V>(v, id, hashFileListView)
}
