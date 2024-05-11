import { search, download } from 'addic7ed-api';
import  fs from 'fs';

export default async (serie, temporada, episodio) =>  {
    let file =  getFile(getFileName(serie, temporada, episodio));
    if(!file) {
        await downlad(serie, temporada, episodio);
    file = await getFile(getFileName(serie, temporada, episodio));
    };
    return !file ? [] :cleanSubtitles(file); 
}

const  getFile =  (filename)  => {
    try{
        const data =  fs.readFileSync(filename, { encoding: 'utf8' });

        return data;
    } catch(e) {
        return null;
    }
    
}

const downlad = async (serie, temporada, episodio) => {
    const subtitlesList = await search(serie, temporada, episodio, 'eng');
    const subInfo = subtitlesList && subtitlesList[0];
    if (subInfo) {
        await download(subInfo, getFileName(serie, temporada, episodio));
        console.log('Subtitles file downloaded.');
    }
}

const getFileName = (serie, temporada, episodio) => {
    return `${serie}-${temporada}-${episodio}.srt`.replace(/\s/g, '-');
}

const cleanSubtitles = (data) => {
    const result = data.split(/\n/)
    .map(t => t.replace(/\r/, '')
    .replace(/<i>/g, '')
    .replace(/<\/i>/g, '')
    .replace(/[\.]/g, '')
    .replace(/,/g, '')
    .replace(/-/g, '')
    .replace(/:/g, '')
    .replace(/♪/g, '')
    .replace(/\?/g, '')
    .replace(/>/g, '')
    .replace(/\d/g, '')
    .replace(/\\/g, '')
    .replace(/"/g, '')
    .replace(/\b\'/g, '')
    .trim()).filter(t => (t.trim().length > 1) && !t.match(/\d{2}:\d{2}:\d{2}/) && !t.match(/^\d+$/))
   return  result;
  }