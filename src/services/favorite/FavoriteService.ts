type FavoriteService = {
  favorite: (item: any) => Promise<boolean>;
  list: () => Promise<Array<any>>;
};

export default FavoriteService;
