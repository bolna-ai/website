export interface Template {
  name: string;
  image: string;
  episode: string;
  season: string;
  audio: string;
  description: string;
};
const one: Template = {
  name: "Sales 101",
  image: "https://placehold.co/100",
  episode: "XYZ company",
  description: "Description about problem statement and the prompt",
  season: "Demo 01",
  audio: ""
};
const two: Template = {
  name: "Interview 101",
  image: "https://placehold.co/100",
  episode: "XYZ company 2",
  description: "Description about problem statement and the prompt",
  season: "Demo 01",
  audio: ""
};
const three: Template = {
  name: "Cart abandonment 101",
  image: "https://placehold.co/100",
  episode: "XYZ company 3",
  description: "Description about problem statement and the prompt",
  season: "Demo 01",
  audio: ""
};
const four: Template = {
  name: "Customer feedback 101",
  image: "https://placehold.co/100",
  episode: "XYZ company 4",
  description: "Description about problem statement and the prompt",
  season: "Demo 01",
  audio: ""
};
export const byUseCase = {
  one,
  two,
  three,
  four,
};
export const useCases = Object.values(byUseCase);
