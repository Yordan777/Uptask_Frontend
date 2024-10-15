import { getProjectsById } from "@/api/ProjectAPI"
import EditProjectForm from "@/components/project/EditProjectForm"
import { useQuery } from "@tanstack/react-query"
import { Navigate, useParams } from "react-router-dom"

export default function EditProjectView() {
    const params = useParams()
    const projectId = params.projectId!

    const { data, isLoading, error } = useQuery({
        queryKey: ['editProjects', projectId],
        queryFn: () => getProjectsById(projectId),
        retry: 1
    })

    if (isLoading) return 'Cargando'
    if (error) return <Navigate to='/404' />
    if (data) return <EditProjectForm data={data} projectId={projectId}/>
}
