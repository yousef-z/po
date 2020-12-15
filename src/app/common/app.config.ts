import { InjectionToken } from '@angular/core';

export const POSTS_URL = new InjectionToken<string>('sdds');
export const GITHUB_FOLLOWERS_ENDPOINT = new InjectionToken<string>('what the fuck is this for.'); 

// export const POSTS_URL: urlInterface = {
//     apiEndpoint: 'https://jsonplaceholder.typicode.com/posts',
//     title: 'posts endpoint'
//   };

// export const postEndpoint = new InjectionToken<AppConfig>('https://jsonplaceholder.typicode.com/posts');

// export const HERO_DI_CONFIG: AppConfig = {
//     apiEndpoint: 'https://jsonplaceholder.typicode.com/posts',
//     title: 'posts endpoint'
//   };


//   export interface urlInterface {
//     apiEndpoint: string
//     title: string
//   }