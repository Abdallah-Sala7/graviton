import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/",
  }),

  endpoints: (builder) => ({
    getAllTodos: builder.query({
      query: () => `todos`,
    }),

    getTodoById: builder.query({
      query: (arg) => `todos/${arg.id}`,
    }),
  }),
});

export const { useGetAllTodosQuery, useGetTodoByIdQuery } = todoApi;
