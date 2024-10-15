import { useDroppable } from "@dnd-kit/core"

type useDroppableProps = {
    status: string
}

function DropTask({ status }: useDroppableProps) {

    const { isOver, setNodeRef } = useDroppable({
        id: status
    })

    const style = {
        opacity: isOver ? 0.4 : undefined,
        zoom: isOver ? 0.9 : undefined
    }
    return (
        <div
            style={style}
            ref={setNodeRef}
            className=" text-sm font-semibold uppercase p-2 border border-dashed border-slate-500 mt-5 place-content-center text-slate-500">
            Soltar tarea aqui
        </div>
    )
}

export default DropTask