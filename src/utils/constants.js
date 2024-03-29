export const NETFLIX_LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR = "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e";

export const NETFLIX_BACKGROUND = "https://assets.nflxext.com/ffe/siteui/vlv3/16006346-87f9-4226-bc25-a1fb346a2b0c/9662d0fd-0547-4665-b887-771617268815/IN-en-20240115-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const TMDB_API_OPTIONS =  {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTAxZDhkNDYyMDdiNzRlZTBmMWQwOTY3NDhjNzhjZCIsInN1YiI6IjY1YTI4MzE0YTZhNGMxMDEyNWE0NjZhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jB6N3zME1Y9Cn3iJ-lPVu2_ozEazwCqwggWCr_aX8Gw'
    }
  };

export const IMAGE_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const SUPPORTED_LANGUAGES = [
  {identifer: "en", name: "English"},
  {identifer: "hindi", name: "Hindi"},
  {identifer: "french", name: "French"},
  {identifer: "spanish", name: "Spanish"},
]

export const OPEN_AI_API_KEY = process.env.REACT_APP_OPEN_AI_API_KEY;
