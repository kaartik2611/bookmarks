import { useContext } from "react";
import { FolderProps } from "../../types";
import { FoldersContext } from "../../App";
import AddLink from "./AddLink";

interface Props {
  folder: FolderProps;
  index: number;
}
function Folder({ folder, index }: Props) {
  const { deleteFolder, deleteLink } = useContext(FoldersContext)
  return (
    <div className="border-2" key={index}>
      <div className="flex my-2 mx-1 justify-between">
        <p>{folder.name}</p>
        <div>
          <AddLink folderName={folder.name} />
          <button onClick={() => deleteFolder(folder.name)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      </div>
      {folder.links.map((link, index) => {
        return (
          <div key={index} className='border'>
            <p>{link.title}</p>
            <a className="link-button" href={link.url} target='_blank' rel="noreferrer">Go to Link</a>
            <button onClick={() => deleteLink(folder.name, index)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Folder;