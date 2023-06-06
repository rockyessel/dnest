// import React from 'react';
import { UserDocumentProps } from '../../../interface';
import DefaultCard from '../applications/default-card';
import CodeCard from '../code/code';
import MicrosoftCard from './ms';
import {
  MdTextSnippet,
  MdFontDownload,
  MdPictureAsPdf,
  MdFolderZip,
} from 'react-icons/md';



interface Props {
  documentData: UserDocumentProps;
  extension: string;
}
const DocumentCard = (props: Props) => {
  switch (props.extension) {
    case 'application dotx':
    case 'application xlts':
    case 'application potx':
    case 'application doc':
    case 'application xls':
    case 'application ppt':
    case 'application dot':
    case 'application xlt':
    case 'application pot':
    case 'application docx':
    case 'application xlsx':
    case 'application pptx':
      return <MicrosoftCard documentData={props.documentData} />;

    case 'application json':
    case 'text rs':
    case 'text c':
    case 'text cpp':
    case 'text cs':
    case 'text java':
    case 'text py':
    case 'text js':
    case 'text rb':
    case 'text php':
    case 'text swift':
    case 'text go':
    case 'text rust':
    case 'text ts':
    case 'text html':
    case 'text css':
    case 'text json':
    case 'text xml':
    case 'text sh':
    case 'text pl':
    case 'text kt':
    case 'text lua':
    case 'text objc':
    case 'text ps1':
    case 'text sql':
    case 'text vb':
    case 'text cr':
    case 'text ex':
    case 'text f90':
    case 'text ml':
    case 'text groovy':
    case 'text puppet':
    case 'text matlab':
    case 'text r':
    case 'text scala':
    case 'text haskell':
    case 'text dart':
    case 'text erlang':
    case 'text julia':
    case 'text perl':
    case 'text kotlin':
    case 'text lisp':
    case 'text ada':
    case 'text pro':
    case 'text cob':
    case 'text scm':
    case 'text e':
    case 'text awk':
    case 'text ahk':
    case 'text purs':
    case 'text elm':
    case 'text re':
    case 'text crystal':
    case 'text mips':
    case 'text ps':
    case 'text rkt':
    case 'text rexx':
    case 'text hack':
    case 'text abap':
    case 'text elixir':
    case 'text dylan':
    case 'text factor':
    case 'text forth':
    case 'text io':
    case 'text j':
    case 'text nim':
    case 'text oz':
    case 'text pli':
    case 'text sather':
    case 'text vhdl':
    case 'text x10':
    case 'text bal':
    case 'text bef':
    case 'text chpl':
    case 'text d':
    case 'text hx':
      return <CodeCard documentData={props.documentData} />;

    case 'text txt':
      return (
        <DefaultCard
          documentData={props.documentData}
          icon={<MdTextSnippet className='text-4xl' />}
        />
      );

    case 'font woff':
    case 'font woff2':
    case 'font svg':
    case 'application ttf':
    case 'application otf':
    case 'application eot':
    case 'application pfa':
    case 'application pfb':
    case 'application ps':
      return (
        <DefaultCard
          documentData={props.documentData}
          icon={<MdFontDownload className='text-4xl' />}
        />
      );

    case 'application pdf':
      return (
        <DefaultCard
          documentData={props.documentData}
          icon={<MdPictureAsPdf className='text-4xl' />}
        />
      );

    case 'application zip':
    case 'application rar':
    case 'application 7z':
    case 'application tar':
    case 'application gz':
    case 'application bz2':
    case 'application xz':
    case 'application lz':
    case 'application Z':
    case 'application lha':
    case 'application lzh':
    case 'application cab':
    case 'application iso':
      return (
        <DefaultCard
          documentData={props.documentData}
          icon={<MdFolderZip className='text-4xl' />}
        />
      );
    default:
      return <p>Helo{props.documentData.filename}</p>;
  }
};

export default DocumentCard;
