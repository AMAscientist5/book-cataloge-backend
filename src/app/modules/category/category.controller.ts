import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { CategoryServices } from "./category.service";

//  list
const categoryList = catchAsync(async (req: Request, res: Response) => {
  const result = await CategoryServices.categoryList();

  sendResponse(res, {
    status_code: httpStatus.OK,
    success: true,
    data: result,
    message: "Categories information retrieved successfully",
  });
});

//  Details
const categoryDetails = catchAsync(async (req: Request, res: Response) => {
  const { id: ct_id } = req.params;

  const result = await CategoryServices.ctDetails(ct_id);

  sendResponse(res, {
    status_code: httpStatus.OK,
    success: true,
    data: result,
    message: "Category information retrieved successfully",
  });
});

//  create
const categoryCreate = catchAsync(async (req: Request, res: Response) => {
  const { ...ct_data } = req.body;

  const result = await CategoryServices.createCategory(ct_data);

  sendResponse(res, {
    status_code: httpStatus.OK,
    success: true,
    data: result,
    message: "Category created successfully",
  });
});

//  Update
const categoryUpdate = catchAsync(async (req: Request, res: Response) => {
  const { id: ct_id } = req.params;
  const { ...ct_data } = req.body;

  const result = await CategoryServices.updateCategory(ct_id, ct_data);

  sendResponse(res, {
    status_code: httpStatus.OK,
    success: true,
    data: result,
    message: "Category updated successfully",
  });
});

// Delete
const deleteCategory = catchAsync(async (req: Request, res: Response) => {
  const { id: ct_id } = req.params;

  const result = await CategoryServices.ctDelete(ct_id);

  sendResponse(res, {
    status_code: httpStatus.OK,
    success: true,
    data: result,
    message: "Category deleted successfully",
  });
});

export const CategoryController = {
  categoryDetails,
  categoryList,
  deleteCategory,
  categoryUpdate,
  categoryCreate,
};
