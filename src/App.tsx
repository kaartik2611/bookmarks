import React from "react";
import './App.css';
import { Folders } from "./components/folders/Folders";
import { Navbar } from './components/navbar/Navbar';
import { FolderProps, FolderContextProps, LinkFolderProps } from "./types";

export const FoldersContext = React.createContext<FolderContextProps>({
  folders: [],
  setFolders: () => { },
  addFolder: () => { },
  deleteFolder: () => { },
  addLink: () => { },
  deleteLink: () => { },
});

function App() {
  const [folders, setFolders] = React.useState<FolderProps[]>([
    {
      name: 'Socials',
      links: [
        {
          title: 'Github',
          url: "https://github.com",
        },
        {
          title: 'LinkedIn',
          url: "https://www.linkedin.com/",
        },
        {
          title: 'Twitter',
          url: "https://twitter.com/",
        },
      ]
    },
    {
      name: 'Programming',
      links: [
        {
          title: 'blogs',
          url: "https://blogs.msdn.microsoft.com/",
        },
      ]
    }
  ]);

  const deleteLink = (folderName: string, index: number) => {
    const newFolders = folders.map(f => {
      if (f.name === folderName) {
        f.links.splice(index, 1);
      }
      return f;
    });
    setFolders(newFolders);
    //   const newLinks = [...links];
    //   newLinks.splice(index, 1);
    //   setLinks(newLinks);
  }

  const deleteFolder = (folderName: string) => {
    const newFolders = folders.filter(f => f.name !== folderName);
    setFolders(newFolders);
  }

  const addLink = (folderName: string, link: LinkFolderProps) => {
    const newFolders = folders.map(f => {
      if (f.name === folderName) {
        f.links.push(link);
      }
      return f;
    });
    setFolders(newFolders);
  }

  const addFolder = (folderName: string) => {
    const newFolders = [...folders];
    newFolders.push({ name: folderName, links: [] });
    setFolders(newFolders);
  }

  return (
    <div className="App">
      <Navbar />
      <FoldersContext.Provider value={{ folders, setFolders, deleteFolder, deleteLink, addFolder, addLink }}>
        <Folders />
      </FoldersContext.Provider>
    </div>
  );
}

export default App;
