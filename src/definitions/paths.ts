import { join } from 'path';

export const SONGS_FOLDER_PATH = join(process.cwd(), 'songs');

export const DIST_FOLDER_PATH = join(process.cwd(), 'dist');

export const JSON_SONGS_PATH = join(DIST_FOLDER_PATH, 'songs.json');
export const XML_SONGS_PATH = join(DIST_FOLDER_PATH, 'songs.xml');
export const XML_NO_IDS_SONGS_PATH = join(DIST_FOLDER_PATH, 'songs-no-ids.xml');

export const DIST_FILES = [JSON_SONGS_PATH, XML_SONGS_PATH, XML_NO_IDS_SONGS_PATH];
