import { create } from "zustand";

export const useStore = create((set) => ({
  habitos: [
    { id: 1, nombre: "Meditar 10 minutos", completado: false },
    { id: 2, nombre: "Tomar 2L de agua", completado: false },
    { id: 3, nombre: "Caminar 30 minutos", completado: false },
  ],

  // Marcar o desmarcar hábito
  toggleHabito: (id) =>
    set((state) => ({
      habitos: state.habitos.map((h) =>
        h.id === id ? { ...h, completado: !h.completado } : h
      ),
    })),

  // Agregar nuevo hábito
  agregarHabito: (nombre) =>
    set((state) => ({
      habitos: [
        ...state.habitos,
        { id: Date.now(), nombre, completado: false },
      ],
    })),

  // Eliminar hábito
  eliminarHabito: (id) =>
    set((state) => ({
      habitos: state.habitos.filter((h) => h.id !== id),
    })),
}));
