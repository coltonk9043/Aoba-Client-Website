'use server'
import fs from "node:fs";

export type DirectoryTreeNode = {
    name: string,
    url_path: string,
    children: Array<DirectoryTreeNode>
}

export async function WikiSideBar({ posts } : { posts?: string[]}) {
    const pages : string[] = fs
        .readdirSync("app\\wiki", { withFileTypes: true, recursive: true })
        .filter((file) => file.isDirectory())
        .map((folder) => folder.path.replace('/', '\\') + "\\" + folder.name)
        .map((folder) => folder.replace("app\\", "").replace("_", " "))
          
    console.log(pages)
    const tree = {name: "wiki", url_path: "wiki", children: []};

    const addPath = (path : string, tree : DirectoryTreeNode) => {
        // helper function to create child objects
        const createChild = (name : string, url_path: string) => ({
          name,
          url_path,
          children: []
        });
      
        // split path to array of folders and files
        const parts = path.split("\\");
      
        // create tree if empty
        if (!tree.name) {
          Object.assign(tree, createChild(parts[0], "/wiki/" + path));
        }
      
        // check if root folder is correct
        if (tree.name !== parts[0]) {
          throw new Error(`Root folder is not "${tree.name}"`);
        }
        parts.shift();
      
        // check and add other path parts
        parts.reduce((current, p) => {
          const child = current.children.find((child) => child.name === p);
          if (child) {
            return child;
          }
      
          const newChild = createChild(p, "/" + path);
          current.children.push(newChild);
          return newChild;
        }, tree);
    };
      
    pages.forEach((path) => addPath(path, tree));

    function capitalizeFirstLetter(string : string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const GenerateTreeDOM = (tree : DirectoryTreeNode) => {
        const mapChildren = (childrenList : Array<DirectoryTreeNode> ) => {
            return childrenList.map((e, index) => {
                return GenerateTreeDOM(e)
            })
        }

        if(Array.isArray(tree.children)){
            if(tree.children.length <= 0){
                return (<a href={tree.url_path}><p>{capitalizeFirstLetter(tree.name)}</p></a>)
            }else{
                return (
                    <>
                        <p className="font-semibold text-xl">{capitalizeFirstLetter(tree.name)}</p>
                        <div className="ml-[3rem]">
                            {mapChildren(tree.children)}
                        </div>
                    </>
                    
                )
            }
        }else{
            return (<a href={tree.url_path}><p>{capitalizeFirstLetter(tree.name)}</p></a>)
        }
    }
      

    return(
        <div className="p-5 bg-zinc-800 border-r border-zinc-500 w-auto">
            {GenerateTreeDOM(tree)}
        </div>
    )
}

