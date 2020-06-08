
export enum Audience {
  BOTH,
  FAMILY,
  TEAM
}

export enum BroadCastTypes {
  VIDEO,
  AUDIO,
  TEXT,
  IMAGE,
  DOCUMENT
}

export interface IPaginatedResponse {
  total: number;
  limit: number;
  skip: number;
}

export interface ISuccessResponse {
  message: number;
  status: number;
}

export interface IBroadCastCommon {
  type: BroadCastTypes;
  audience: Audience;
  title: string;
  description: string;
}

// create the broadcast item
export interface IBroadCastRequest extends IBroadCastCommon {
  // if file uploaded to aws
  filePath?: URL;
  // if text is posted
  details?: any;
}

// response
export interface IBroadCastResponse extends IBroadCastRequest {
  // randomly generated unique id
  uuid: string;
  createdAt: Date;
}

// get all broadcast items
export interface IGetAllBroadCastRequest extends IPaginatedResponse {
  results: IBroadCastResponse[];
}

// delete the broadcasted item
export interface IDeleteBroadCastItemRequest {
  uuid: string;
}
