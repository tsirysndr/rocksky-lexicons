/**
 * GENERATED CODE - DO NOT MODIFY
 */
import {
  type LexiconDoc,
  Lexicons,
  ValidationError,
  type ValidationResult,
} from '@atproto/lexicon'
import { type $Typed, is$typed, maybe$typed } from './util.js'

export const schemaDict = {
  AppRockskyAlbum: {
    lexicon: 1,
    id: 'app.rocksky.album',
    defs: {
      main: {
        type: 'record',
        key: 'tid',
        description: 'A declaration of an album.',
        record: {
          type: 'object',
          required: ['title', 'artist', 'createdAt'],
          properties: {
            title: {
              type: 'string',
              description: 'The title of the album.',
              minLength: 1,
              maxLength: 512,
            },
            artist: {
              type: 'string',
              description: 'The artist of the album.',
              minLength: 1,
              maxLength: 256,
            },
            duration: {
              type: 'integer',
              description: 'The duration of the album in seconds.',
            },
            releaseDate: {
              type: 'string',
              description: 'The release date of the album.',
              format: 'datetime',
            },
            year: {
              type: 'integer',
              description: 'The year the album was released.',
            },
            genre: {
              type: 'string',
              description: 'The genre of the album.',
              maxLength: 256,
            },
            albumArt: {
              type: 'blob',
              description: 'The album art of the album.',
              accept: ['image/png', 'image/jpeg'],
              maxSize: 2000000,
            },
            tags: {
              type: 'array',
              description: 'The tags of the album.',
              items: {
                type: 'string',
                minLength: 1,
                maxLength: 256,
              },
            },
            youtubeLink: {
              type: 'string',
              description: 'The YouTube link of the album.',
              format: 'uri',
            },
            spotifyLink: {
              type: 'string',
              description: 'The Spotify link of the album.',
              format: 'uri',
            },
            tidalLink: {
              type: 'string',
              description: 'The Tidal link of the album.',
              format: 'uri',
            },
            appleMusicLink: {
              type: 'string',
              description: 'The Apple Music link of the album.',
              format: 'uri',
            },
            createdAt: {
              type: 'string',
              description: 'The date the song was created.',
              format: 'datetime',
            },
          },
        },
      },
    },
  },
  AppRockskyArtist: {
    lexicon: 1,
    id: 'app.rocksky.artist',
    defs: {
      main: {
        type: 'record',
        key: 'tid',
        description: 'A declaration of an artist.',
        record: {
          type: 'object',
          required: ['name', 'createdAt'],
          properties: {
            name: {
              type: 'string',
              description: 'The name of the artist.',
              minLength: 1,
              maxLength: 512,
            },
            bio: {
              type: 'string',
              description: 'The biography of the artist.',
              maxLength: 1000,
            },
            picture: {
              type: 'blob',
              description: 'The picture of the artist.',
              accept: ['image/png', 'image/jpeg'],
              maxSize: 2000000,
            },
            tags: {
              type: 'array',
              description: 'The tags of the artist.',
              items: {
                type: 'string',
                minLength: 1,
                maxLength: 256,
              },
            },
            born: {
              type: 'string',
              description: 'The birth date of the artist.',
              format: 'datetime',
            },
            died: {
              type: 'string',
              description: 'The death date of the artist.',
              format: 'datetime',
            },
            bornIn: {
              type: 'string',
              description: 'The birth place of the artist.',
              maxLength: 256,
            },
            createdAt: {
              type: 'string',
              description: 'The date the song was created.',
              format: 'datetime',
            },
          },
        },
      },
    },
  },
  AppRockskyScrobble: {
    lexicon: 1,
    id: 'app.rocksky.scrobble',
    defs: {
      main: {
        type: 'record',
        key: 'tid',
        description: 'A declaration of a scrobble.',
        record: {
          type: 'object',
          required: [
            'title',
            'artist',
            'albumArtist',
            'album',
            'duration',
            'createdAt',
          ],
          properties: {
            trackNumber: {
              type: 'integer',
              description: 'The track number of the song in the album.',
              minimum: 1,
            },
            discNumber: {
              type: 'integer',
              description: 'The disc number of the song in the album.',
              minimum: 1,
            },
            title: {
              type: 'string',
              description: 'The title of the song.',
              minLength: 1,
              maxLength: 512,
            },
            artist: {
              type: 'string',
              description: 'The artist of the song.',
              minLength: 1,
              maxLength: 256,
            },
            albumArtist: {
              type: 'string',
              description: 'The artist of the album the song is from.',
              minLength: 1,
              maxLength: 256,
            },
            album: {
              type: 'string',
              description: 'The album the song is from.',
              minLength: 1,
              maxLength: 256,
            },
            duration: {
              type: 'integer',
              description: 'The duration of the song in seconds.',
              minimum: 1,
            },
            releaseDate: {
              type: 'string',
              description: 'The release date of the song.',
              format: 'datetime',
            },
            year: {
              type: 'integer',
              description: 'The year the song was released.',
            },
            genre: {
              type: 'string',
              description: 'The genre of the song.',
              maxLength: 256,
            },
            tags: {
              type: 'array',
              description: 'The tags of the song.',
              items: {
                type: 'string',
                minLength: 1,
                maxLength: 256,
              },
            },
            composer: {
              type: 'string',
              description: 'The composer of the song.',
              maxLength: 256,
            },
            lyrics: {
              type: 'string',
              description: 'The lyrics of the song.',
              maxLength: 10000,
            },
            copyrightMessage: {
              type: 'string',
              description: 'The copyright message.',
              maxLength: 256,
            },
            wiki: {
              type: 'string',
              description: 'Informations about the song',
              maxLength: 10000,
            },
            albumArt: {
              type: 'blob',
              description: 'The album art of the song.',
              accept: ['image/png', 'image/jpeg'],
              maxSize: 2000000,
            },
            youtubeLink: {
              type: 'string',
              description: 'The YouTube link of the song.',
              format: 'uri',
            },
            spotifyLink: {
              type: 'string',
              description: 'The Spotify link of the song.',
              format: 'uri',
            },
            tidalLink: {
              type: 'string',
              description: 'The Tidal link of the song.',
              format: 'uri',
            },
            appleMusicLink: {
              type: 'string',
              description: 'The Apple Music link of the song.',
              format: 'uri',
            },
            createdAt: {
              type: 'string',
              description: 'The date the song was created.',
              format: 'datetime',
            },
            mbid: {
              type: 'string',
              description: 'The MusicBrainz ID of the song.',
            },
            label: {
              type: 'string',
              description: 'The label of the song.',
              maxLength: 256,
            },
          },
        },
      },
    },
  },
  AppRockskySong: {
    lexicon: 1,
    id: 'app.rocksky.song',
    defs: {
      main: {
        type: 'record',
        key: 'tid',
        description: 'A declaration of a song.',
        record: {
          type: 'object',
          required: [
            'title',
            'artist',
            'album',
            'albumArtist',
            'duration',
            'createdAt',
          ],
          properties: {
            trackNumber: {
              type: 'integer',
              description: 'The track number of the song in the album.',
              minimum: 1,
            },
            discNumber: {
              type: 'integer',
              description: 'The disc number of the song in the album.',
              minimum: 1,
            },
            title: {
              type: 'string',
              description: 'The title of the song.',
              minLength: 1,
              maxLength: 512,
            },
            artist: {
              type: 'string',
              description: 'The artist of the song.',
              minLength: 1,
              maxLength: 256,
            },
            albumArtist: {
              type: 'string',
              description: 'The artist of the album the song is from.',
              minLength: 1,
              maxLength: 256,
            },
            album: {
              type: 'string',
              description: 'The album the song is from.',
              minLength: 1,
              maxLength: 256,
            },
            duration: {
              type: 'integer',
              description: 'The duration of the song in seconds.',
              minimum: 1,
            },
            releaseDate: {
              type: 'string',
              description: 'The release date of the song.',
              format: 'datetime',
            },
            year: {
              type: 'integer',
              description: 'The year the song was released.',
            },
            genre: {
              type: 'string',
              description: 'The genre of the song.',
              minLength: 1,
              maxLength: 256,
            },
            tags: {
              type: 'array',
              description: 'The tags of the song.',
              items: {
                type: 'string',
                minLength: 1,
                maxLength: 256,
              },
            },
            composer: {
              type: 'string',
              description: 'The composer of the song.',
              maxLength: 256,
            },
            lyrics: {
              type: 'string',
              description: 'The lyrics of the song.',
              maxLength: 10000,
            },
            copyrightMessage: {
              type: 'string',
              description: 'The copyright message.',
              maxLength: 256,
            },
            wiki: {
              type: 'string',
              description: 'Informations about the song',
              maxLength: 10000,
            },
            albumArt: {
              type: 'blob',
              description: 'The album art of the song.',
              accept: ['image/png', 'image/jpeg'],
              maxSize: 2000000,
            },
            youtubeLink: {
              type: 'string',
              description: 'The YouTube link of the song.',
              format: 'uri',
            },
            spotifyLink: {
              type: 'string',
              description: 'The Spotify link of the song.',
              format: 'uri',
            },
            tidalLink: {
              type: 'string',
              description: 'The Tidal link of the song.',
              format: 'uri',
            },
            appleMusicLink: {
              type: 'string',
              description: 'The Apple Music link of the song.',
              format: 'uri',
            },
            createdAt: {
              type: 'string',
              description: 'The date the song was created.',
              format: 'datetime',
            },
            mbid: {
              type: 'string',
              description: 'The MusicBrainz ID of the song.',
            },
            label: {
              type: 'string',
              description: 'The label of the song.',
              maxLength: 256,
            },
          },
        },
      },
    },
  },
} as const satisfies Record<string, LexiconDoc>
export const schemas = Object.values(schemaDict) satisfies LexiconDoc[]
export const lexicons: Lexicons = new Lexicons(schemas)

export function validate<T extends { $type: string }>(
  v: unknown,
  id: string,
  hash: string,
  requiredType: true,
): ValidationResult<T>
export function validate<T extends { $type?: string }>(
  v: unknown,
  id: string,
  hash: string,
  requiredType?: false,
): ValidationResult<T>
export function validate(
  v: unknown,
  id: string,
  hash: string,
  requiredType?: boolean,
): ValidationResult {
  return (requiredType ? is$typed : maybe$typed)(v, id, hash)
    ? lexicons.validate(`${id}#${hash}`, v)
    : {
        success: false,
        error: new ValidationError(
          `Must be an object with "${hash === 'main' ? id : `${id}#${hash}`}" $type property`,
        ),
      }
}

export const ids = {
  AppRockskyAlbum: 'app.rocksky.album',
  AppRockskyArtist: 'app.rocksky.artist',
  AppRockskyScrobble: 'app.rocksky.scrobble',
  AppRockskySong: 'app.rocksky.song',
} as const
