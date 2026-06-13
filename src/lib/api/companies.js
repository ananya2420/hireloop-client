import { serverFetch } from "../core/server";
import { getUserSession } from "../core/session";


export const getCompanies = async () => {
    return serverFetch(`/api/companies`);
}

export const updateCompany = async (id, data) => {
    const result = serverMutation(`/api/companies/${id}`, data, 'PATCH');
    revalidatePath('/dashboard/admin/companies');
    return result;
}

export const getRecruiterCompany = async (recruiterId) => {
    return await serverFetch(`/api/my/companies?recruiterId=${recruiterId}`);
}

export const getLoggedInRecruiterCompany = async () => {
    const user = await getUserSession();
    return await getRecruiterCompany(user?.id);
}

