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

const mainControllers = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = {
            name: "Cookie",
            num: "63",
            rank: {
                get: 69840,
                max: 110000
            },
            weapon: {
                get: 134,
                max: 185
            },
            kits: {
                get: 46,
                max: 64
            },
            vehicles: {
                get: 77,
                max: 182
            },
            medals: {
                get: 11,
                max: 54
            },
            dogTags: {
                get: 357,
                max: 720
            },
            assignments: {
                get: 21,
                max: 110
            },
            wins: "44%",
            scorePerMin: 592,
            killsPerMin: "0.60",
            topVehicle: {
                name: "Main Battle Tank",
                kills: 33,
            },
            topPrimary: {
                name: "ACW-R",
                kills: 495,
            },
            topClass: {
                name: "Engineer",
                kills: "828,514",
            },
            topSideArm: {
                name: "M9",
                kills: 112,
            },
        }

        return res.status(200).json({
            success: true, data
        });
    } catch (error: any) {
        return res.status(500).json({ success: false, message: error.message });
    }
});
export { menuControllers, mainControllers }