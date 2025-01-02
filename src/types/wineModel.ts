export interface Wine {
  winery: string;
  wine: string;
  rating: Rating;
  location: string;
  image: string;
  id: number;
}

export interface Rating {
  average: string;
  reviews: string;
}
