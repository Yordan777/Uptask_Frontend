import api from "@/lib/axios";
import { isAxiosError } from "axios";
import { NoteFormData, Notes, Project, Task } from "../types";

type NotesAPItype = {
  formData: NoteFormData;
  projectId: Project["_id"];
  taskId: Task["_id"];
  noteId: Notes["_id"];
};

export async function createNotes({
  projectId,
  taskId,
  formData,
}: Pick<NotesAPItype, "projectId" | "taskId" | "formData">) {
  try {
    const url = `/projects/${projectId}/task/${taskId}/notes`;
    const { data } = await api.post<string>(url, formData);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}

export async function deleteNotes({
  projectId,
  taskId,
  noteId,
}: Pick<NotesAPItype, "projectId" | "taskId" | "noteId">) {
  try {
    const url = `/projects/${projectId}/tasks/${taskId}/notes/${noteId}`;
    const { data } = await api.delete<string>(url);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}
