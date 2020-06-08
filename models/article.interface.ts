import { IBroadCastCommon, IPaginatedResponse } from "./broadcast.interface";


// create the article item
export interface ICreateArticleRequest extends IBroadCastCommon {
  featuredImagePath: URL;
  details: any;
}

// response
export interface ICreateArticleResponse extends ICreateArticleRequest {
  // randomly generated unique id
  uuid: string;
  createdAt: Date;
}

// get all ariticles items
export interface IGetAllArticlesRequest extends IPaginatedResponse {
  results: ICreateArticleResponse[];
}

// delete the article 
export interface IDeleteArticleRequest {
  uuid: string;
}
