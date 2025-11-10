import { create } from "zustand";

const useSueño = create((set) => ({
  registros: [],

  agregarRegistro: (fecha, horas) =>
    set((state) => ({
      registros: [...state.registros, { fecha, horas }],
    })),

  eliminarRegistro: (fecha) =>
    set((state) => ({
      registros: state.registros.filter((r) => r.fecha !== fecha),
    })),
}));

export default useSueño;
