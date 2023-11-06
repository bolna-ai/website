export interface Template {
  name: string;
  image: string;
  episode: string;
  season: string;
  audio: string;
  description: string;
};
const one: Template = {
  name: "Assessing candidates for an interview",
  image: "/demo/demo-001/logo.jpg",
  episode: "",
  description: "Talent Acquisition team needs to assess and filter candicantes who do not match certain criteria",
  season: "",
  audio: "/demo/demo-001/audio.mp3"
};
const two: Template = {
  name: "Talk to customers and engage with them",
  image: "/demo/demo-002/logo.jpg",
  episode: "",
  description: "Engage with fans during the Cricket World Cup 2023 with a fantasy contest",
  season: "",
  audio: "/demo/demo-002/audio.mp3"
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
};
export const useCases = Object.values(byUseCase);
