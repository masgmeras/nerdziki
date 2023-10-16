export interface LeafletModel {
  id?: number;
  brand: string;
  pageUrl: string;
  thumbnailUrl: string; // TODO add in python script fields with values
  pdfUrl: string;
  pageNo: number;
  ocrResult: string;
  checked: boolean;
  offerStartDate: string;
  offerEndDate: string; //"2023-09-06"

  specificFilteredLeaflets: LeafletModel[];
  occursOnPage: number;

  categories: string;
  listOfCategories: string[];
}
