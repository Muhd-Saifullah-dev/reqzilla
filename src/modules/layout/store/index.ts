import { create} from "zustand"


type Workspace={
    id:string,
    name:string
}

interface workspaceState{
    selectedWorkspace:(Workspace | null)
    setSelectedWorkspace:(workspace:Workspace)=>void
}

export const useWorkspaceStore=create<workspaceState>((set)=>({
    selectedWorkspace:null,
    setSelectedWorkspace:(workspace)=> set(()=>({selectedWorkspace:workspace }))
}))