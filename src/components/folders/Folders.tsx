import { Fragment, useContext } from "react";
import { FoldersContext } from "../../App";
import AddFolder from "./AddFolder";
import Folder from "./Folder";

export function Folders() {
  const { folders } = useContext(FoldersContext)

  return (
    <>
      <p>Folders</p>
      <Fragment>
        <div className="flex">
          {folders.map((folder, index) => (
            <Folder folder={folder} index={index} key={index} />
          ))}
          <AddFolder />
        </div>
      </Fragment>
    </>
  );
}