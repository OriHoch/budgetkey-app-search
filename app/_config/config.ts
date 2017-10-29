/**
 * Created by adam on 18/12/2016.
 */
export const REMOTE_URL = 'https://next.obudget.org/search';
export const LOCAL_URL  = 'http://localhost:5000/search';
export const URL = REMOTE_URL;
// export const URL = LOCAL_URL;

declare const process: any;

let genericItemBaseUrl: any;
if (process.env.BUDGETKEY_GENERIC_ITEM_BASE_URL) {
    genericItemBaseUrl = process.env.BUDGETKEY_GENERIC_ITEM_BASE_URL;
  } else {
    genericItemBaseUrl = "https://next.obudget.org/i/";
  }
export const GENERIC_ITEM_BASE_URL = genericItemBaseUrl;
