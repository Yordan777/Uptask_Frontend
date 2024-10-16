import { isAxiosError } from "axios";
import api from "@/lib/axios";
import {
  Project,
  TeamMember,
  TeamMemberForm,
  teamMembersSchema,
} from "../types";

export async function findUserByEmail({
  formData,
  projectId,
}: {
  formData: TeamMemberForm;
  projectId: Project["_id"];
}) {
  try {
    const url = `/projects/${projectId}/team/find`;
    const { data } = await api.post(url, formData);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}

export async function addUserToProject({
  id,
  projectId,
}: {
  id: TeamMember["_id"];
  projectId: Project["_id"];
}) {
  try {
    const url = `/projects/${projectId}/team`;
    const { data } = await api.post(url, { id });
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}

export async function getProjectTeam(projectId: Project["_id"]) {
  try {
    const url = `/projects/${projectId}/team`;
    const { data } = await api.get(url);
    const response = teamMembersSchema.safeParse(data);
    if (response.success) {
      return response.data;
    }
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}

export async function removeUserTeam({
  userId,
  projectId,
}: {
  userId: TeamMember["_id"];
  projectId: Project["_id"];
}) {
  try {
    const url = `/projects/${projectId}/team/${userId}`;
    const { data } = await api.delete(url);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}