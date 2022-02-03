declare interface Navigation {
  path: NavigationPath,
  name: NavigationName
}


declare interface NavigationPath {
  '/'?: string | null,
  about?: string | null,
  addPerson?: string | null,
  catalog?: string | null,
  login?: string | null,
  register?: string | null,
}

declare interface NavigationName {
  Home?: string | null,
  About?: string | null,
  AddPerson?: string | null,
  Catalog?: string | null,
  Login?: string | null,
  Register?: string | null,
}

export {
  Navigation,
  NavigationPath,
};
