"use client";

import { createColumnHelper } from "@tanstack/react-table";

// Define the shape of our data
/**
 * @typedef {Object} Payment
 * @property {string} id
 * @property {number} amount
 * @property {"pending" | "processing" | "success" | "failed"} status
 * @property {string} email
 */

const columnHelper = createColumnHelper();

/** @type {import("@tanstack/react-table").ColumnDef[]} */
export const columns = [
  columnHelper.accessor("name", {
    header: "Name",
  }),
  columnHelper.accessor("role", {
    header: "Role",
  }),
  columnHelper.accessor("progress", {
    header: "Progress",
  }),
  columnHelper.accessor("action", {
    header: "Action",
  }),
];



