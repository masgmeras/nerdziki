export interface LeafletModel {
  id?: number;
  brand: string;
  pageUrl: string;
  thumbnailUrl: string; // TODO add in python script fields with values
  pdfUrl: string;
  pageNo: number;
  ocrResult: string[];
  checked: boolean;
}
