import { NextFunction, Request, Response } from "express";
import asyncHandler from "../utils/asyncHandler.utils";

const menuControllers = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = [
            "HOME",
            "MULTIPLAYER",
            "CAMPAIGN",
            "SOLDIERS",
            "STORE",
            "MORE",
            "TESTING"
        ];
        return res.status(200).json({ success: true, data });
    } catch (error: any) {
        return res.status(500).json({ success: false, message: error.message });
    }
});

export { menuControllers }