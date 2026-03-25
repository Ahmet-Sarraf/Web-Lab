import { Project } from "../types/project";

export const fetchProjects = async (): Promise<Project[]> => {
    try {
        const response = await fetch('/data/projects.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Projeler yüklenirken hata oluştu:", error);
        return [];
    }
};