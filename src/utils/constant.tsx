import { TbApps } from 'react-icons/tb';
import {
  MdOutlineBrokenImage,
  MdOutlineSmartDisplay,
  MdOutlineMusicVideo,
  MdOutlineDocumentScanner,
  MdOutlineCloudUpload,
  MdRestartAlt,
  MdFontDownload,
  MdFolderZip,
} from 'react-icons/md';
import {
  SiAndroid,
  SiMicrosoftexcel,
  SiMicrosoftpowerpoint,
  SiMicrosoftword,
} from 'react-icons/si';
import { FaCompactDisc, FaFileCsv, FaFilePdf, FaLinux } from 'react-icons/fa';
import { GrAppleAppStore } from 'react-icons/gr';
import { TfiMicrosoftAlt } from 'react-icons/tfi';
import { SlCalender } from 'react-icons/sl';
import { BsFileTextFill } from 'react-icons/bs';
import { AiFillCode } from 'react-icons/ai';

export const sidebarMenuCategoriesItems = [
  {
    name: 'music',
    title: 'Music',
    icon: <MdOutlineMusicVideo className='text-2xl text-rose-600' />,
  },
  {
    name: 'video',
    title: 'Videos',
    icon: <MdOutlineSmartDisplay className='text-2xl text-orange-600' />,
  },
  {
    name: 'image',
    title: 'Images',
    icon: <MdOutlineBrokenImage className='text-2xl text-green-600' />,
  },
  {
    name: 'document',
    title: 'Documents',
    icon: <MdOutlineDocumentScanner className='text-2xl text-yellow-500' />,
  },
  {
    name: 'application',
    title: 'Applications',
    icon: <TbApps className='text-2xl text-slate-500' />,
  },
  // { name: 'generative-image', title: 'Generative Image', icon: <GiArtificialHive className='text-xl' /> },
];

export const sidebarMenuAppItems = [
  {
    name: 'upload',
    title: 'Upload',
    icon: (
      <MdOutlineCloudUpload
        className='text-2xl text-blue-500'
        
      />
    ),
  },
  {
    name: 'recent',
    title: 'Recent',
    icon: (
      <MdRestartAlt className='text-2xl text-blue-500'  />
    ),
  },
];

export const tabMenu = [
  { name: 'link', title: 'Link' },
  { name: 'html-code', title: 'HTML' },
  { name: 'bb-code', title: 'BB' },
];


export const dayMonthYear = [
  {name: 'day'},
  {name: 'week'},
  {name: 'month'},
  {name: 'year'},
]

export const mimeTypes = [
  'deb',
  'rpm',
  'app',
  'ipa',
  'dmg',
  'msi',
  'rs',
  'c',
  'cpp',
  'cs',
  'java',
  'py',
  'js',
  'rb',
  'php',
  'swift',
  'go',
  'rust',
  'ts',
  'html',
  'css',
  'json',
  'xml',
  'sh',
  'pl',
  'kt',
  'lua',
  'objc',
  'ps1',
  'sql',
  'vb',
  'cr',
  'ex',
  'f90',
  'ml',
  'groovy',
  'puppet',
  'matlab',
  'r',
  'scala',
  'haskell',
  'dart',
  'erlang',
  'julia',
  'perl',
  'kotlin',
  'lisp',
  'ada',
  'pro',
  'cob',
  'scm',
  'e',
  'awk',
  'ahk',
  'purs',
  'elm',
  're',
  'crystal',
  'groovy',
  'julia',
  'mips',
  'ps',
  'rkt',
  'lua',
  'vb',
  'rexx',
  'hack',
  'abap',
  'elixir',
  'dylan',
  'factor',
  'forth',
  'io',
  'j',
  'nim',
  'oz',
  'pli',
  'sather',
  'vhdl',
  'x10',
  'bal',
  'bef',
  'chpl',
  'd',
  'hx',
  'ttf',
  'otf',
  'woff',
  'woff2',
  'eot',
  'svg',
  'pfa',
  'pfb',
  'ps',
  'zip',
  'rar',
  '7z',
  'tar',
  'gz',
  'bz2',
  'xz',
  'lz',
  'Z',
  'lha',
  'lzh',
  'cab',
  'iso',
];

export const assignedMimeTypes: { [key: string]: string } = {
  zip: 'application/zip',
  rar: 'application/x-rar-compressed',
  '7z': 'application/x-7z-compressed',
  tar: 'application/x-tar',
  gz: 'application/gzip',
  bz2: 'application/x-bzip2',
  xz: 'application/x-xz',
  lz: 'application/x-lzip',
  Z: 'application/x-compress',
  lha: 'application/x-lha',
  lzh: 'application/x-lha',
  cab: 'application/vnd.ms-cab-compressed',
  iso: 'application/x-iso9660-image',
  ttf: 'application/font-sfnt',
  otf: 'application/font-sfnt',
  woff: 'font/woff',
  woff2: 'font/woff2',
  eot: 'application/vnd.ms-fontobject',
  svg: 'font/svg',
  pfa: 'application/x-font-type1',
  pfb: 'application/x-font-type1',
  ps: 'application/postscript',
  deb: 'application/vnd.debian.binary-package',
  rpm: 'application/x-rpm',
  app: 'application/octet-stream',
  ipa: 'application/octet-stream',
  dmg: 'application/x-apple-diskimage',
  msi: 'application/x-msdownload',
  xls: 'application/vnd.ms-excel',
  xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  doc: 'application/msword',
  docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document ',
  ppt: 'application/vnd.ms-powerpoint',
  pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  pdf: 'application/pdf',
  rs: 'text/x-rustsrc',
  c: 'text/x-csrc',
  cpp: 'text/x-c++src',
  cs: 'text/x-csharp',
  java: 'text/x-java-source',
  py: 'text/x-python',
  js: 'text/javascript',
  rb: 'text/x-ruby',
  php: 'text/x-php',
  swift: 'text/x-swift',
  go: 'text/x-go',
  rust: 'text/x-rustsrc',
  ts: 'text/typescript',
  html: 'text/html',
  css: 'text/css',
  json: 'text/json',
  xml: 'text/xml',
  sh: 'text/x-sh',
  pl: 'text/x-perl',
  kt: 'text/x-kotlin',
  lua: 'text/x-lua',
  objc: 'text/x-objectivec',
  ps1: 'text/x-powershell',
  sql: 'text/sql',
  cr: 'text/x-crystal',
  ex: 'text/x-elixir',
  f90: 'text/x-fortran',
  ml: 'text/x-ocaml',
  groovy: 'text/x-groovy',
  puppet: 'text/x-puppet',
  matlab: 'text/matlab',
  r: 'text/x-rsrc',
  scala: 'text/x-scala',
  haskell: 'text/x-haskell',
  dart: 'text/dart',
  erlang: 'text/x-erlang',
  julia: 'text/julia',
  perl: 'text/perl',
  kotlin: 'text/x-kotlin',
  lisp: 'text/x-lisp',
  ada: 'text/x-ada',
  pro: 'text/x-prolog',
  cob: 'text/x-cobol',
  scm: 'text/x-scheme',
  e: 'text/x-eiffel',
  awk: 'text/x-awk',
  ahk: 'text/x-autohotkey',
  purs: 'text/x-purescript',
  elm: 'text/x-elm',
  re: 'text/x-reasonml',
  crystal: 'text/x-crystal',
  mips: 'text/x-mips',
  rkt: 'text/x-racket',
  vb: 'text/x-vb',
  rexx: 'text/rexx',
  hack: 'text/x-hack',
  abap: 'text/plain',
  elixir: 'text/x-elixir',
  dylan: 'text/x-dylan',
  factor: 'text/x-factor',
  forth: 'text/x-forth',
  io: 'text/x-io',
  j: 'text/plain',
  nim: 'text/x-nim',
  oz: 'text/x-oz',
  pli: 'text/x-pli',
  sather: 'text/plain',
  vhdl: 'text/x-vhdl',
  x10: 'text/x-x10',
  bal: 'text/plain',
  bef: 'text/plain',
  chpl: 'text/x-chapel',
  d: 'text/x-d',
  hx: 'text/plain',
};

export const assignedIconExtensions: { [key: string]: React.ReactNode } = {
  pdf: <FaFilePdf className='text-4xl' />,
  dotx: <SiMicrosoftword className='text-4xl' />,
  xlts: <SiMicrosoftexcel className='text-4xl' />,
  potx: <SiMicrosoftpowerpoint className='text-4xl' />,
  doc: <SiMicrosoftword className='text-4xl' />,
  xls: <SiMicrosoftexcel className='text-4xl' />,
  ppt: <SiMicrosoftpowerpoint className='text-4xl' />,
  dot: <SiMicrosoftword className='text-4xl' />,
  xlt: <SiMicrosoftexcel className='text-4xl' />,
  pot: <SiMicrosoftpowerpoint className='text-4xl' />,
  docx: <SiMicrosoftword className='text-4xl' />,
  xlsx: <SiMicrosoftexcel className='text-4xl' />,
  pptx: <SiMicrosoftpowerpoint className='text-4xl' />,
  woff: <MdFontDownload className='text-4xl' />,
  woff2: <MdFontDownload className='text-4xl' />,
  ttf: <MdFontDownload className='text-4xl' />,
  otf: <MdFontDownload className='text-4xl' />,
  eot: <MdFontDownload className='text-4xl' />,
  pfa: <MdFontDownload className='text-4xl' />,
  pfb: <MdFontDownload className='text-4xl' />,
  zip: <MdFolderZip className='text-4xl' />,
  rar: <MdFolderZip className='text-4xl' />,
  '7z': <MdFolderZip className='text-4xl' />,
  tar: <MdFolderZip className='text-4xl' />,
  gz: <MdFolderZip className='text-4xl' />,
  bz2: <MdFolderZip className='text-4xl' />,
  xz: <MdFolderZip className='text-4xl' />,
  lz: <MdFolderZip className='text-4xl' />,
  Z: <MdFolderZip className='text-4xl' />,
  lha: <MdFolderZip className='text-4xl' />,
  lzh: <MdFolderZip className='text-4xl' />,
  cab: <MdFolderZip className='text-4xl' />,
  iso: <FaCompactDisc className='text-4xl' />,
  rs: <AiFillCode className='text-4xl' />,
  c: <AiFillCode className='text-4xl' />,
  cpp: <AiFillCode className='text-4xl' />,
  cs: <AiFillCode className='text-4xl' />,
  java: <AiFillCode className='text-4xl' />,
  py: <AiFillCode className='text-4xl' />,
  js: <AiFillCode className='text-4xl' />,
  rb: <AiFillCode className='text-4xl' />,
  php: <AiFillCode className='text-4xl' />,
  swift: <AiFillCode className='text-4xl' />,
  go: <AiFillCode className='text-4xl' />,
  rust: <AiFillCode className='text-4xl' />,
  ts: <AiFillCode className='text-4xl' />,
  html: <AiFillCode className='text-4xl' />,
  css: <AiFillCode className='text-4xl' />,
  json: <AiFillCode className='text-4xl' />,
  xml: <AiFillCode className='text-4xl' />,
  sh: <AiFillCode className='text-4xl' />,
  pl: <AiFillCode className='text-4xl' />,
  kt: <AiFillCode className='text-4xl' />,
  lua: <AiFillCode className='text-4xl' />,
  objc: <AiFillCode className='text-4xl' />,
  ps1: <AiFillCode className='text-4xl' />,
  sql: <AiFillCode className='text-4xl' />,
  vb: <AiFillCode className='text-4xl' />,
  cr: <AiFillCode className='text-4xl' />,
  ex: <AiFillCode className='text-4xl' />,
  f90: <AiFillCode className='text-4xl' />,
  ml: <AiFillCode className='text-4xl' />,
  groovy: <AiFillCode className='text-4xl' />,
  puppet: <AiFillCode className='text-4xl' />,
  matlab: <AiFillCode className='text-4xl' />,
  r: <AiFillCode className='text-4xl' />,
  scala: <AiFillCode className='text-4xl' />,
  haskell: <AiFillCode className='text-4xl' />,
  dart: <AiFillCode className='text-4xl' />,
  erlang: <AiFillCode className='text-4xl' />,
  julia: <AiFillCode className='text-4xl' />,
  perl: <AiFillCode className='text-4xl' />,
  kotlin: <AiFillCode className='text-4xl' />,
  lisp: <AiFillCode className='text-4xl' />,
  ada: <AiFillCode className='text-4xl' />,
  pro: <AiFillCode className='text-4xl' />,
  cob: <AiFillCode className='text-4xl' />,
  scm: <AiFillCode className='text-4xl' />,
  e: <AiFillCode className='text-4xl' />,
  awk: <AiFillCode className='text-4xl' />,
  ahk: <AiFillCode className='text-4xl' />,
  purs: <AiFillCode className='text-4xl' />,
  elm: <AiFillCode className='text-4xl' />,
  re: <AiFillCode className='text-4xl' />,
  crystal: <AiFillCode className='text-4xl' />,
  mips: <AiFillCode className='text-4xl' />,
  ps: <AiFillCode className='text-4xl' />,
  rkt: <AiFillCode className='text-4xl' />,
  rexx: <AiFillCode className='text-4xl' />,
  hack: <AiFillCode className='text-4xl' />,
  abap: <AiFillCode className='text-4xl' />,
  elixir: <AiFillCode className='text-4xl' />,
  dylan: <AiFillCode className='text-4xl' />,
  factor: <AiFillCode className='text-4xl' />,
  forth: <AiFillCode className='text-4xl' />,
  io: <AiFillCode className='text-4xl' />,
  j: <AiFillCode className='text-4xl' />,
  nim: <AiFillCode className='text-4xl' />,
  oz: <AiFillCode className='text-4xl' />,
  pli: <AiFillCode className='text-4xl' />,
  sather: <AiFillCode className='text-4xl' />,
  vhdl: <AiFillCode className='text-4xl' />,
  x10: <AiFillCode className='text-4xl' />,
  bal: <AiFillCode className='text-4xl' />,
  bef: <AiFillCode className='text-4xl' />,
  chpl: <AiFillCode className='text-4xl' />,
  d: <AiFillCode className='text-4xl' />,
  hx: <AiFillCode className='text-4xl' />,
  app: <GrAppleAppStore className='text-4xl' />,
  ipa: <GrAppleAppStore className='text-4xl' />,
  dmg: <GrAppleAppStore className='text-4xl' />,
  apk: <SiAndroid className='text-4xl' />,
  xapk: <SiAndroid className='text-4xl' />,
  deb: <FaLinux className='text-4xl' />,
  rmp: <FaLinux className='text-4xl' />,
  exe: <TfiMicrosoftAlt className='text-4xl' />,
  msi: <TfiMicrosoftAlt className='text-4xl' />,
  txt: <BsFileTextFill className='text-4xl' />,
  ics: <SlCalender className='text-4xl' />,
  csv: <FaFileCsv className='text-4xl' />,
};


export const defaultMetaData = {
  description: `description`,
  title: `title`,
  image: `image`,
  alt: 'alt',
  keywords: 'keywords',
  type: `type`,
  publishedAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  author_name: 'Rocky Essel',
  MIME: 'png',
};
