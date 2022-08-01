import { Api } from "../axiosConfig";

const getAll = async (): Promise<any> => {
  try {
    const {data} = await Api.get('/projects');
    return data;
  } catch (error) {
    console.error(error);
    return new Error('Server Error');
  }
}

const getById = async (id: number): Promise<any> => {
  try {
    const {data} = await Api.get(`/projects/${id}`)
    return data;
  } catch (error) {
    console.error(error);
    return new Error('Server Error');    
  }
}

const updateById = async (id: number, body: any): Promise<any> => {
  try {
    await Api.put(`/projects/${id}`, body)
  } catch (error) {
    console.error(error);
    return new Error('Server Error');    
  }
}

const deleteById = async (id: number): Promise<any> => {
  try {
    await Api.delete(`/projects/${id}`)
  } catch (error) {
    console.error(error);
    return new Error('Server Error');    
  }
}

export const ProjectsService = {
  getAll,
  getById,
  updateById,
  deleteById,
}

