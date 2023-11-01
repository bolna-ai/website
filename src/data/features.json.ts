export interface Template {
  name: string;
  description: string;
};
const one: Template = {
  name: "Agent live in 5 minutes",
  description: "Create your agents in less thn 5 minutes",
};
const two: Template = {
    name: "No code needed",
    description: "No code needed or any deployments needed",
};
const three: Template = {
  name: "Rich dashboard",
  description: "Track usage, metrics and analytics of your agents",
};
const four: Template = {
  name: "Plug & play custom models",
  description: "Make agents use your own custom models",
};
export const byName = {
  one,
  two,
    three,
  four,
};
export const features = Object.values(byName);
