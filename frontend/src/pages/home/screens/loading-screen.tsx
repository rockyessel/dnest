import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { slideAnimation } from '../../../utils/motion';
import { useSnapshot } from 'valtio';
import { screenState } from '../../../utils/state';
import { Button, CircleProgressbar } from '../../../components';
import { FaTimes } from 'react-icons/fa';
import { AiOutlineUpload, AiOutlinePlus } from 'react-icons/ai';
import { GiTimeDynamite } from 'react-icons/gi';
import Logo from '../../../components/logo';
import { useAppwriteContext } from '../../../context/app-write';
import { formatFileSize, hasNoValue } from '../../../utils/functions';
import FileItem from '../../../components/file-item';

const LoadingScreen = () => {
  const snap = useSnapshot(screenState);
  const [state, setState] = React.useState<boolean>();
  const [loading, setLoading] = React.useState<boolean>();
  const { files, handleClear, handleFile, uploadFile, documentsData } =
    useAppwriteContext();

  const handleFileUpload = async () => {
    setLoading(true);
    const uploadPromises = files.map((file) => uploadFile(file));
    await Promise.allSettled(uploadPromises);
    setLoading(false);
  };

  // @desc This effect is responsible for screen changes
  React.useEffect(() => {
    const hasEmptyDocument = hasNoValue(documentsData);
    const hasFiles = files.length > 0;
    const hasNoFiles = files.length === 0;

    if (hasNoFiles) {
      screenState.defaultScreen = true;
      screenState.loadingScreen = false;
      screenState.filesScreen = false;
    }

    setState(hasEmptyDocument);

    screenState.filesScreen = !hasEmptyDocument && hasFiles;
  }, [documentsData, files.length, state]);


  return (
    <AnimatePresence>
      {snap.loadingScreen && (
        <motion.section className='w-full' {...slideAnimation('right')}>
          <motion.div className='w-full flex flex-col gap-10 items-center justify-center lg:w-[40rem] px-4'>
            <Logo size='text-2xl' />
            <motion.div className='w-full flex flex-col gap-0 p-0 m-0 items-center justify-center  bg-[rgb(255,255,255,0.4)] backdrop-blur-lg border-[1px] rounded-lg'>
              <p>Click on start, to upload your files.</p>
              {loading && <p>Loading, please wait patent</p>}
            </motion.div>
            <motion.div className='flex flex-col gap-4 items-center justify-center w-full  bg-[rgb(255,255,255,0.4)] backdrop-blur-lg border-[1px] rounded-lg px-4 py-2'>
              <motion.div className='w-full inline-flex items-center justify-between text-sm'>
                <span className='inline-flex items-center gap-2'>
                  <Button
                    styles={' bg-[rgb(255,255,255,0.5)] backdrop-blur-lg'}
                    title={'Start'}
                    handleClick={handleFileUpload}
                  >
                    <span className='hidden md:block'>Start</span>{' '}
                    <AiOutlineUpload />
                  </Button>
                  <label className='inline-flex items-center  bg-[rgb(255,255,255,0.5)] backdrop-blur-lg border-[1px] rounded-lg px-4 py-2'>
                    <span className='hidden md:block'>Add more</span>{' '}
                    <AiOutlinePlus />
                    <input
                      type='file'
                      name='file'
                      id='uploader'
                      className='w-0 h-0'
                      onChange={handleFile}
                      multiple
                    />
                  </label>
                </span>
                <Button
                  styles={'bg-[rgb(255,255,255,0.5)] backdrop-blur-lg'}
                  title={'Clear'}
                  handleClick={handleClear}
                >
                  <span className='hidden md:block'>Clear</span>{' '}
                  <GiTimeDynamite className='text-red-500' />
                </Button>
              </motion.div>
              <motion.div
                className={`w-full flex flex-col gap-2  ${
                  files.length > 5 && 'overflow-y-auto h-48'
                }`}
              >
                {files?.map((file, index) => (
                  <FileItem key={index} file={file} />
                ))}

                {files.length === 0 && (
                  <p className='w-full bg-[rgb(255,255,255,0.5)] backdrop-blur-lg border-[1px] rounded-lg flex items-center justify-between p-3'>
                    Add files to start uploading.
                  </p>
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
