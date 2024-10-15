import { isAxiosError } from "axios";
import { Project, Task, TaskFormData, taskSchema } from "../types";
import api from "@/lib/axios";

type taskAPI = {
  formData: TaskFormData;
  projectId: Project["_id"];
  taskId: Task["_id"];
  status: Task["status"];
};
export async function createTask({
  formData,
  projectId,
}: Pick<taskAPI, "formData" | "projectId">) {
  try {
    const url = `projects/${projectId}/task`;
    const { data } = await api.post<string>(url, formData);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}

export async function getTaskById({
  projectId,
  taskId,
}: Pick<taskAPI, "projectId" | "taskId">) {
  try {
    const url = `/projects/${projectId}/task/${taskId}`;
    const { data } = await api.get(url);
    const response = taskSchema.safeParse(data); 
    if (response.success) {
      return response.data;
    }
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}

export async function updateTask({
  projectId,
  taskId,
  formData,
}: Pick<taskAPI, "projectId" | "taskId" | "formData">) {
  try {
    const url = `/projects/${projectId}/task/${taskId}`;
    const { data } = await api.put<string>(url, formData);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}

export async function deleteTask({
  projectId,
  taskId,
}: Pick<taskAPI, "projectId" | "taskId">) {
  try {
    const url = `/projects/${projectId}/task/${taskId}`;
    const { data } = await api.delete(url);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}

export async function updateStatus({
  projectId,
  taskId,
  status
}: Pick<taskAPI, "projectId" | "taskId" | "status">) {
  try {
    const url = `/projects/${projectId}/task/${taskId}/status`;
    const { data } = await api.post(url, { status });
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}
