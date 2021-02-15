import fs from 'fs'; // @TODO: use svg library
import path from 'path';

const inDir = '/public/icon/in';
const outDir = '/public/icon/out';

const imgTemplate =
`import {  IconImgProps } from '../Icon.interfaces';
export default function __name__({className}: IconImgProps) {
  return (
    __svg__
  );
}`;

function getComponentName(fileName: string): string {
  return fileName.replace('.svg', '')
    .replace('.Active', '');
}

function getComponent(content: string, tpl: string, fileName: string): string {

  const imgClass: string = content.search('stroke') > 0 ? 'strokeImg' : 'fillImg' ;
  const rplClass: string = `<svg className={\`${imgClass} \${className}\`} `;  // I.e.: className={`strokeImg ${className}`}

  return tpl
    .replace('__svg__', content.trim().replace(/[\r\t\n]/gm, ''))
    .replace('__name__', fileName)
    .replace(/fill-rule=/gm, 'fillRule=') // @TODO: replace multiply lines with a proper regexp
    .replace(/clip-rule=/gm, 'clipRule=')
    .replace(/stroke-linecap=/gm, 'strokeLinecap=')
    .replace(/stroke-linejoin=/gm, 'strokeLinejoin=')
    .replace(/stroke-width=/gm, 'strokeWidth=')
    .replace('<svg ', rplClass)
    .replace(/\sfill=".*?"/gm, '')
    .replace(/\sstroke=".*?"/gm, '');
}

export function convertAll(): void {
  const imgInDir: string = path.join(process.cwd(), inDir);
  const imgOutDir: string = path.join(process.cwd(), outDir);
  const imagesList: string[] = (fs && typeof fs.readdirSync === 'function') ? fs.readdirSync(imgInDir) : [];

  console.log('Start converting');

  imagesList.forEach((imgName: string) => {
    const imgPath: string = path.join(imgInDir, imgName);

    let imgContent: string = '';

    try {
      imgContent = (fs && typeof fs.readFileSync === 'function') ? fs.readFileSync(imgPath, 'utf8') : '';
    } catch (e) {
      console.log('Error reading file ', imgPath);
    }

    const newFileName = `${imgOutDir}/${getComponentName(imgName)}.tsx`;
    const newContent = getComponent(imgContent, imgTemplate, getComponentName(imgName));

    try {
      fs.writeFileSync(newFileName, newContent, 'utf8');
    } catch (e) {
      console.log('Error writing to file ', newFileName);
    }

    console.log(newFileName, ' -> created.');
  });
}
