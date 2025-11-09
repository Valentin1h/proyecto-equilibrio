import create from "zustand";

const useHabitos = create((set) => ({
  habitos: [
    { id: 1, texto: "Beber 2L de agua", completado: false },
    { id: 2, texto: "Caminar 30 min", completado: true },
  ],

  agregarHabito: (texto) =>
    set((state) => {
      const nuevo = {
        id: Date.now(),
        texto,
        completado: false,
      };
      return { habitos: [nuevo, ...state.habitos] };
    }),

  toggleHabito: (id) =>
    set((state) => ({
      habitos: state.habitos.map((h) =>
        h.id === id ? { ...h, completado: !h.completado } : h
      ),
    })),

  eliminarHabito: (id) =>
    set((state) => ({
      habitos: state.habitos.filter((h) => h.id !== id),
    })),
}));

export default useHabitos;
