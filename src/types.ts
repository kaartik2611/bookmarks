export interface FolderProps {
    name: string;
    links: LinkFolderProps[];
}
export interface LinkFolderProps {
    title: string;
    url: string;
}
export interface FolderContextProps {
    folders: FolderProps[];
    setFolders: React.Dispatch<React.SetStateAction<FolderProps[]>>;
    addFolder: (folderName: string) => void;
    deleteFolder: (folderName: string) => void;
    addLink: (folderName: string, link: LinkFolderProps) => void;
    deleteLink: (folderName: string, index: number) => void;
}