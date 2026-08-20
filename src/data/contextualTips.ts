import type { ContextualTip } from "../types";

export const contextualTips: ContextualTip[] = [
  {
    id: "tip-weather",
    type: "weather",
    template:
      "{title} {lastName}, parece que hoy va a bajar la temperatura al final de la tarde. Le recomiendo abrigarse.",
  },
  {
    id: "tip-traffic",
    type: "traffic",
    template:
      "{title} {lastName}, parece que hay tráfico complicado en su sector. Le recomiendo tomar precauciones al salir.",
  },
  {
    id: "tip-event",
    type: "event",
    template:
      "{title} {lastName}, le recuerdo que hoy hay un evento astronómico destacado; puede ser una buena oportunidad para un plan en familia.",
  },
  {
    id: "tip-bday",
    type: "birthday",
    template:
      "{title} {lastName}, el equipo y yo le deseamos un muy feliz cumpleaños. Que tenga un excelente día.",
  },
];
