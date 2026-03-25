/* -------------------- KATEGORI TIPLERI -------------------- */
export type Category =
    | "frontend"
    | "fullstack"
    | "backend";

/* -------------------- SIRALAMA TIPLERI -------------------- */
export type SortField = "year" | "title";
export type SortOrder = "asc" | "desc";

/* -------------------- PROJE VERI MODELI -------------------- */
export interface Project {
    readonly id: number; // degistirilemez
    title: string;
    description: string;
    tech: string[];
    year: number;
    category: Category;
    featured: boolean;
    image: string;

    // opsiyonel alanlar (olabilir de olmayabilir)
    demoUrl?: string;
    sourceUrl?: string;
}

/* -------------------- FILTRE DURUMU -------------------- */
export interface FilterState {
    search: string;
    category: Category | "all";
    sortField: SortField;
    sortOrder: SortOrder;
}
