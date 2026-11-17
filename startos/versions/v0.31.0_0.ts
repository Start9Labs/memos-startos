import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

// CalVer releases require the database migrations shipped in Memos 0.31.0.
export const v_0_31_0_0 = VersionInfo.of({
  version: '0.31.0:0',
  releaseNotes: {
    en_US: 'Updated Memos to 0.31.0.',
    es_ES: 'Memos actualizado a 0.31.0.',
    de_DE: 'Memos auf 0.31.0 aktualisiert.',
    pl_PL: 'Zaktualizowano Memos do 0.31.0.',
    fr_FR: 'Memos mis à jour vers 0.31.0.',
  },
  migrations: {
    up: IMPOSSIBLE,
    down: IMPOSSIBLE,
  },
})
