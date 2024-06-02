import  { useState } from 'react';
import logo from '/public/logo.png';
import CompileButton from '../Editor/CompileButton';
import Languages from '../dropdown/Languages';
import FontSize from '../dropdown/FontSize';
import GroupAvatars from '../avatars';
import ShareRoom from '../clipboard';
import { FaBars, FaTimes } from 'react-icons/fa';

export interface Props {
  setIsOpen: () => void;
  setPanelType: (type: string) => void;
}

export default function EditorNavbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-card px-4 py-2">
      <div className="flex justify-between items-center max-w-[1980px] mx-auto">
        <div className="w-14 flex-shrink-0">
          <img src={logo} alt="logo" />
        </div>
        
        <div className="hidden md:flex gap-3">
          <Languages />
          <FontSize />
        </div>
        <div className="hidden md:flex gap-3 items-center">
          <GroupAvatars />
        </div>
          <div className='hidden md:flex'>
          <ShareRoom />
          </div>
        <div className="">
          <CompileButton />
        </div>
        <div className="flex md:hidden">
          <button onClick={toggleSidebar}>
            <FaBars size={24} />
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-background bg-opacity-50 z-50 transition-transform transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden w-full overflow-hidden`}
      >
        <div className="bg-background/80 w-full h-full shadow-lg p-4 items-start justify-start">
          <button onClick={toggleSidebar} className="mb-4">
            <FaTimes size={24} />
          </button>
          <div className="flex flex-col pl-10 gap-4 items-start justify-start">
            <FontSize />
            <Languages />
            <GroupAvatars />
            <ShareRoom />
          </div>
        </div>
      </div>
    </div>
  );
}
